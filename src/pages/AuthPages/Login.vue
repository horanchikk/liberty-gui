<template>
  <div id="welcome"></div>
  <div class="regtitle">Создайте персонажа мечты для игрового мира</div>

    <div class="input_wrapper">
      <Input :placeholder="'Логин'" :type="'text'" :value="login" @getValue="setLogin"/>
      <FormError :text="'Некорректный логин'" :type="'error'" id="err_login" style="opacity: 0" />
    </div>
    
    <div class="input_wrapper">
      <Input :placeholder="'Пароль'" :type="'password'" :value="password" @getValue="setPassword" />
      <FormError :text="'Некорректный пароль'" :type="'error'" id="err_passwd" style="opacity: 0"/>
    </div>
    
  <Button :text="'Продолжить'" @click="loggi"/>
</template>

<script>
import Input from '@/components/Input/Input.vue';
import Button from '@/components/Button/Button.vue';
import FormError from '@/components/FormError/FormError.vue';
import { collection, getDocs } from "@firebase/firestore";
import { db } from "@/firebase.js";

export default {
  components: {
    Input,
    Button,
    FormError
  },
  data() {
    return {
      login: "",
      password: ""
    }
  },
  methods: {
    setLogin(value) {
      this.login = value;
    },
    setPassword(value) {
      this.password = value;
    },
    async loggi() {
      const login = this.login;
      const password = this.password;
      const querySnapshot = await getDocs(collection(db, "users"));

      document.getElementById("err_login").style.opacity = "1";
      document.getElementById("err_passwd").style.opacity = "1";

      querySnapshot.forEach((account) => {
        if (account.data().login == login && account.data().password == password) {
          document.getElementById("err_login").style.opacity = "0";
          document.getElementById("err_passwd").style.opacity = "0";
          document.getElementById("welcome").innerText = `Аккаунт: ${login}`;
          document.getElementById("welcome").style.opacity = "1";

          this.$swal({
            text: `Привет, ${login}!`,
            showConfirmButton: false,
            timer: 3000
          })
        }
      });
    }
  }
};
</script>
<style>
#welcome {
  position:relative;
  opacity: 0;
  font-size: 24px;
  left: 400px;
  top: 310px;
  line-height: 30px;
  cursor: default;
  font-weight: 200;
  font-size: 20px;
}
</style>
