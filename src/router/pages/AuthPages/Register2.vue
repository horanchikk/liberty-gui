<template>
  <form
    class="login100-form validate-form"
    id="reg-form"
    action=""
    method="POST"
  >
    <div class="regtitle">Создайте персонажа мечты для игрового мира</div>
    <Input :placeholder="'Имя персонажа'" :type="'text'"/>
    <Input :placeholder="'Фамилия персонажа'" :type="'text'"/>
    <Input :placeholder="'Возраст персонажа'" :type="'text'"/>
    <router-link to="/auth">
      <Button :text="'Создать аккаунт'"/>
    </router-link>
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
