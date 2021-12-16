<template>
  <div class="form-error"
    :class="checkType(type)">    

    <img v-if="type === 'error'" src='../../assets/img/err.svg' alt="img" class="form_err_img">
    <img v-else-if="type === 'info'" src='../../assets/img/info.svg' alt="img" class="form_err_img">
    <img v-else-if="type === 'done'" src='../../assets/img/done.svg' alt="img" class="form_err_img">

    <span class="form_err_title">{{text}}</span>
  </div>
</template>
done
<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  },
  methods: {
    checkType(type) {
      if (type === 'error') return 'error';
      else if (type === 'info') return 'info';
      else if (type === 'done') return 'done';
      else console.log('Компонент должен содержать директиву (атрибут) :type со значением [error] || [info] || [done]')
    }
  }
};
</script>

<style>
  @import url(./index.css);
</style>