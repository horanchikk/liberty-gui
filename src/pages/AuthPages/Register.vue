<template>
  <form
    class="login100-form validate-form"
    id="reg-form"
    action=""
    method="POST"
  >
    <div class="regtitle">Регистрация</div>

    <Input :placeholder="'Введите почту'" :type="'email'"/>
    <Input :placeholder="'Введите логин'" :type="'text'"/>
    <Input :placeholder="'Введите пароль'" :type="'password'"/>
    <div class="form-error" style="position: absolute; top: 238px">
      <img src="../../assets/img/err.svg" alt="img" class="form_err_img" />
      <a class="form_err_title">Некорректный пароль</a>
    </div>
    <Input :placeholder="'Подтвердите пароль'" :type="'password'"/>
    <!-- <Input :placeholder="'Код приглашения'" :type="'text'"/> -->
     
    <Button :text="'Создать аккаунт'"/>

  </form>
</template>

<script>
import Input from '@/components/Input/Input.vue';
import Button from '@/components/Button/Button.vue';

export default {
  components: {
    Input,
    Button
  }
};
</script>

<style></style>
