<template>
  <div class="regtitle">Восстановление данных от вашего аккаунта</div>

  <Input :placeholder="'Проверочный код'" :type="'type'"/>

  <div class="form-error" style="position: absolute; top: 107px;">
    <img src="../../assets/img/err.svg" alt="img" class="form_err_img" />
    <a class="form_err_title">Некорректный код</a>
  </div>
  <router-link to="/auth/restore3">
    <Button :text="'Восстановить'" />
  </router-link>
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
