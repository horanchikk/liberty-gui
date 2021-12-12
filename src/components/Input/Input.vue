<template>
  <input
    required
    class="input"
    :type="type"
    :class="{ 'focus' : focus === true}"
    :placeholder="placeholder"
    @blur="onBlur"
    @focus="onFoucs"
  />

</template>

<script>
export default {
    props: {
        placeholder: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            focus: false
        }
    },
    methods: {
        onFoucs() {
            this.focus = true
        },
        onBlur() {
            this.focus = false
        }
    }
}
</script>

<style>
    @import url(./index.css);
</style>