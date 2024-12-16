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
  name: "MyInput",
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

<style lang="scss" scoped>
.my-input {
  height: 20px;
  width: 200px;

  &:focus {
    border-color: #007bff;
  }

  @media (max-width: $breakpoint-sm) {
    height: 30px;
    width: 250px;
  }
}
</style>
