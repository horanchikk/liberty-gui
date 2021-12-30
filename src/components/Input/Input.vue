<template>
    <input
        required
        :type="type"
        class="input"
        :class="{ focus: focus === true }"
        :placeholder="placeholder"
        @blur="onBlur"
        @focus="onFocus"
        v-model="inputValue"
        @input="emit"
    />
</template>

<script>
export default {
    props: {
        placeholder: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            focus: false,
            inputValue: "",
        };
    },
    methods: {
        onFocus() {
            this.focus = true;
        },
        onBlur() {
            this.focus = false;
        },
        emit() {
            this.$emit("getValue", this.inputValue);
        },
    },
};
</script>

<style>
@import url(./index.css);
</style>
