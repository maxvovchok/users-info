<template>
  <input
    class="my-input"
    type="text"
    :value="modelValue"
    @input="updateValue"
  />
</template>

<script>
export default {
  props: {
    modelValue: String,
  },
  methods: {
    updateValue(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style lang="scss">
.my-input {
  height: 20px;
  width: 200px;

  &:focus {
    border-color: #007bff;
  }
}
</style>
