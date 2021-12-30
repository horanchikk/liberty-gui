<template>
  <div class="regtitle">Смена пароля от аккаунта Liberty RP</div>

  <div class="input_wrapper">
    <Input :placeholder="'Пароль'" :type="'password'" :value="password" @getValue="setPassword" />
  </div>

  <div class="input_wrapper">
    <Input :placeholder="'Подтверждение пароля'" :type="'password'" :value="confirmPassword" @getValue="setConfirmPassword" />
    <FormError :text="'Некорректный пароль'" :type="'error'" id="err_passwd" style="opacity: 1" />
  </div>

  <Button :text="'Сменить пароль'" id="change-passwd"/>
</template>

<script>
import Input from '@/components/Input/Input.vue';
import Button from '@/components/Button/Button.vue';
import FormError from '@/components/FormError/FormError.vue';
import { updateDoc, doc } from "@firebase/firestore"; 
import { db } from "@/firebase.js";

export default {
  components: {
    Input,
    Button,
    FormError
  },
  async beforeMount() {
    let href = window.location.href;
    let parse = href.toString().split("/");
    let uid = parse[5];
    let userRef = doc(db, "users", uid.toString()); 
    const userdb = await updateDoc(userRef, {
      "password": "lolkek"
    });
    console.log(uid);
    console.log(userdb);
    // await addDoc(collection(db, "users"), userData);
  },
}
</script>
<style>
#change-passwd {
  background-color: rgb(204, 83, 83); box-shadow: 0px 0px 16px rgb(204 83 83 / 35%);
}
#change-passwd:hover {
  background-color: rgb(221, 105, 105); box-shadow: 0px 0px 16px rgb(251 105 105 / 35%);
}
</style>
