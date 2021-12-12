<template>
  <div class="regtitle">Восстановление данных от вашего аккаунта</div>
  
  <div class="input_wrapper">
    <Input :placeholder="'Проверочный код'" :type="'text'"/>
    <FormError :type="'error'" :text="'Некорректный код'"/>
  </div>

  <router-link to="/auth/restore3">
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
