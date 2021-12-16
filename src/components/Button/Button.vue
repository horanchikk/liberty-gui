<template>
   <button type="submit" class="button">{{text}}</button>
</template>

<script>

export default {
    props: {
        text: {
            type: String,
            required: true
        }
    }
}
</script>

<style>
    @import url('./index.css');
</style>