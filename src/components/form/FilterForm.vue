<template>
  <form class="form-query" v-on:submit.prevent>
    <label class="text" for="query">Пошук користувачів</label>
    <MyInput
      :modelValue="modelValue"
      @update:modelValue="updateQuery"
      name="query"
    />
  </form>
</template>

<script>
import { MyInput } from "@/UI/index.js";
import { MyButton } from "@/UI/index.js";

export default {
  name: "FilterForm",
  components: {
    MyInput,
    MyButton,
  },
  props: {
    modelValue: {
      type: String,
      required: true,
    },
  },
  methods: {
    updateQuery(value) {
      this.$emit("update:modelValue", value);
    },
  },
};
</script>

<style lang="scss">
.form-query {
  margin: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 20px;
}

.text {
  font-size: 24px;
}
</style>
