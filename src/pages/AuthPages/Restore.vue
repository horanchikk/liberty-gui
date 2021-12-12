<template>
  <div class="regtitle">Восстановление данных от вашего аккаунта</div>

  <div class="input_wrapper">
    <Input :placeholder="'Электронная почта'" :type="'text'"/>
    <FormError :type="'info'" :text="'Логин указан в письме'"/>
  </div>

  <router-link to="/auth/restore2">
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
