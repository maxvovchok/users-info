<template>
  <button class="custom-button" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    handleClick: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.custom-button {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }

  &.small {
    padding: 5px 10px;
    font-size: 14px;
  }

  &.large {
    padding: 15px 30px;
    font-size: 18px;
  }
}
</style>
