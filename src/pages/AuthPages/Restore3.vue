<template>
  <div class="regtitle">Восстановление данных от вашего аккаунта</div>

  <div class="input_wrapper">
    <Input :placeholder="'Новый пароль'" :type="'password'"/>
  </div>

  <div class="input_wrapper">
    <Input :placeholder="'Подтверждение'" :type="'password'"/>
    <FormError :type="'done'" :text="'Данные успешно изменены!'"/>
  </div>
  
  <router-link to="/auth">
    <Button :text="'Восстановить'" />
  </router-link>
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
