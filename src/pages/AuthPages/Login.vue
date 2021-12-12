<template>
  <div class="regtitle">Создайте персонажа мечты для игрового мира</div>
  
    <div class="input_wrapper">
      <Input :placeholder="'Логин'" :type="'text'"/>
      <FormError :text="'Некорректный логин'" :type="'error'" />
    </div>
    
    <div class="input_wrapper">
      <Input :placeholder="'Пароль'" :type="'password'"/>
      <FormError :text="'Некорректный пароль'" :type="'error'" />
    </div>
    
  <Button :text="'Продолжить'"/>
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

<style>
</style>
