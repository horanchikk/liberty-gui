<template>
    <template v-if="stage === 1">
        <form
            class="login100-form validate-form"
            id="reg-form"
            action=""
            method="POST"
        >
            <div class="regtitle">
                Создайте персонажа мечты для игрового мира
            </div>

            <div class="input_wrapper">
                <Input
                    :placeholder="'Введите почту'"
                    :type="'email'"
                    :value="mail"
                    @getValue="setMail"
                />
            </div>

            <div class="input_wrapper">
                <Input
                    :placeholder="'Введите логин'"
                    :type="'text'"
                    :value="login"
                    @getValue="setLogin"
                />
            </div>

            <div class="input_wrapper">
                <Input
                    :placeholder="'Введите пароль'"
                    :type="'password'"
                    :value="password"
                    @getValue="setPassword"
                />
                <FormError :type="'error'" :text="'Некорректный пароль'" style="opacity: 0" id="'conf-passwd'" />
            </div>

            <div class="input_wrapper">
                <Input
                    :placeholder="'Подтвердите пароль'"
                    :type="'password'"
                    :value="confirmPassword"
                    @getValue="setConfirmPassword"
                />
            </div>

            <Button @click="setStage(2)" :text="'Создать аккаунт'" />
        </form>
    </template>

    <template v-else>
        <form class="login100-form validate-form" id="reg-form" action="">
            <div class="regtitle">
                Создайте персонажа мечты для игрового мира
            </div>

            <div class="input_wrapper">
                <Input
                    :placeholder="'Имя персонажа'"
                    :type="'text'"
                    :value="userName"
                    @getValue="setUserName"
                />
            </div>

            <div class="input_wrapper">
                <Input
                    :placeholder="'Фамилия персонажа'"
                    :type="'text'"
                    :value="userSurname"
                    @getValue="setUserSurname"
                />
            </div>

            <div class="input_wrapper">
                <Input
                    :placeholder="'Возраст персонажа'"
                    :type="'number'"
                    :value="userAge"
                    @getValue="setUserAge"
                />
            </div>
        </form>

        <Button :type="button" :text="'Создать аккаунт'" @click="register" />

        <Button :type="button" :text="'Назад'" @click="setStage(1)" />
    </template>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, getDocs } from "@firebase/firestore";
import Input from "@/components/Input/Input.vue";
import Button from "@/components/Button/Button.vue";
import FormError from "@/components/FormError/FormError.vue";
import { db } from "@/firebase.js";

export default {
    components: {
        Input,
        Button,
        FormError,
    },
    data() {
        return {
            mail: "",
            login: "",
            password: "",
            confirmPassword: "",
            userName: "",
            userSurname: "",
            userAge: "",
            stage: 1,
        };
    },
    methods: {
        setMail(value) {
            this.mail = value;
        },
        setLogin(value) {
            this.login = value;
        },
        setPassword(value) {
            this.password = value;
        },
        setConfirmPassword(value) {
            this.confirmPassword = value;
        },
        setUserName(value) {
            this.userName = value;
        },
        setUserSurname(value) {
            this.userSurname = value;
        },
        setUserAge(value) {
            this.userAge = value;
        },
        setStage(stage) {
            this.stage = stage;
        },

        async register() {
            const auth = getAuth();
            const email = this.mail;
            const password = this.password;
            const confirmPassword = this.confirmPassword;
            const name = this.userName;
            const surname = this.userSurname;
            const login = this.login;
            const age = this.userAge;

            if (
                email &&
                password &&
                name &&
                confirmPassword &&
                age &&
                surname &&
                login
            ) {
                try {
                    const responseFromAuth =
                        await createUserWithEmailAndPassword(
                            auth,
                            email,
                            password
                        );

                    const userId = responseFromAuth.user.uid;

                    const userData = {
                        email: email,
                        uid: userId,
                        name: name,
                        password: password,
                        surname: surname,
                        login: login,
                        age: age,
                    };

                    const querySnapshot = await getDocs(collection(db, "users"));
                    querySnapshot.forEach((account) => {
                        if (account.data().login == login) {
                            throw new Error(`[Server Side] User with login ${login} was registered.`)
                        }
                    })

                    await addDoc(collection(db, "users"), userData);
                    localStorage.setItem("user", JSON.stringify(userData));

                    this.$swal({
                        text: "Пользователь успешно создан. Теперь необходимо войти в аккаунт.",
                        showConfirmButton: false,
                        timer: 3500
                    });
					this.$router.push('/auth/login');

                } catch (error) {
                    if (error.message == "Firebase: Error (auth/email-already-in-use).") {
                        this.$swal({
                            text: `Почта ${email} уже используется.`,
                            timer: 3000,
                            showConfirmButton: false
                        })
                        console.log(`${email} was found on the server`)
                    } else if (error.message == `[Server Side] User with login ${login} was registered.`) {
                        this.$swal({
                            text: `Игрок с ником ${login} уже зарегистрирован на Liberty RP`
                        })
                    } else {
                        this.$swal({
                            title: `Ошибка на сервере, отправьте её разработчикам для устранения`,
                            text: `${error.message}`
                        })
                    }
                }
            } else if (password !== confirmPassword) {
                this.$swal({
                    text: `Пароль повторно введён неверно.`,
                    timer: 3000,
                    showConfirmButton: false
                })
            } else {
                console.log("")
            }
        },
    },
};
</script>

<style></style>
