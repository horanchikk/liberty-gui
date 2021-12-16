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
                <FormError :type="'error'" :text="'Некорректный пароль'" />
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
import { addDoc, collection } from "@firebase/firestore";

import Input from "@/components/Input/Input.vue";
import Button from "@/components/Button/Button.vue";
import FormError from "@/components/FormError/FormError.vue";
import { db } from "@/firebase.js";
console.log(db);
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

                    // save to firebase;
                    await addDoc(collection(db, "users"), userData);

                    // save to localStorage;
                    localStorage.setItem("user", JSON.stringify(userData));

                    alert("пользователь создан");
					this.$router.push('/auth/login');
					
                } catch (error) {
                    alert(error.message);
                }
            } else if (password !== confirmPassword) {
                alert("Пароли не совпадают");
            } else {
                alert("Все поля должны быыть заполнены");
            }
        },
    },
};
</script>

<style></style>
