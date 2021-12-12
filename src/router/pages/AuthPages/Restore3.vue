<template>
  <div class="regtitle">Восстановление данных от вашего аккаунта</div>

  <Input :placeholder="'Новый пароль'" :type="'password'"/>
  <Input :placeholder="'Подтверждение'" :type="'password'"/>

  <div class="form-done" style="position: absolute; top: 192px;">
    <img src="../../assets/img/done.svg" alt="img" class="form_done_img" />
    <a class="form_done_title">Данные успешно изменены!</a>
  </div>
  <router-link to="/auth">
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
