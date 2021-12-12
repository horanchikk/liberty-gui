<template>
  <div class="regtitle">Восстановление данных от вашего аккаунта</div>

  <Input :placeholder="'Электронная почта'" :type="'type'"/>

  <div class="form-info" style="position: absolute; top: 107px;">
    <img src="../../assets/img/info.svg" alt="img" class="form_info_img" />
    <a class="form_info_title">Логин указан в письме</a>
  </div>
  <router-link to="/auth/restore2">
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
