<template>
  <form
    class="login100-form validate-form"
    id="reg-form"
    action=""
    method="POST"
  >
    <div class="regtitle">Создайте персонажа мечты для игрового мира</div>

    <div class="input_wrapper">
      <Input :placeholder="'Введите почту'" :type="'email'"/>
    </div>

    <div class="input_wrapper">
      <Input :placeholder="'Введите логин'" :type="'text'"/>
    </div>

    <div class="input_wrapper">
      <Input :placeholder="'Введите пароль'" :type="'password'"/>
      <FormError :type="'error'" :text="'Некорректный пароль'"/>
    </div>
    
    <div class="input_wrapper">
      <Input :placeholder="'Подтвердите пароль'" :type="'password'"/>
    </div>

    <router-link to="/auth/register2">
      <Button :text="'Создать аккаунт'"/>
    </router-link>

  </form>
</template>

<script>
import Input from '@/components/Input/Input.vue';
import Button from '@/components/Button/Button.vue';
import FormError from '@/components/FormError/FormError.vue';

export default {
  components: {
    Input,
    Button,
    FormError
  }
};
</script>

<style></style>
