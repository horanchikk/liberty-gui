<template>
  <div class="regtitle">Создайте персонажа мечты для игрового мира</div>
    <Input :placeholder="'Логин'" :type="'text'"/>
    <Input :placeholder="'Пароль'" :type="'password'"/>
  <div class="form-error">
    <img src="../../assets/img/err.svg" alt="img" class="form_err_img" />
    <a class="form_err_title">Некорректный пароль</a>
  </div>
  
  <Button :text="'Продолжить'"/>
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
