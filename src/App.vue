<template>
  <div id="app">
    <h1 class="test">Hello, Vue with Sass!</h1>
  </div>
</template>

<script>
export default {
  components: {},
  name: "App",
};
</script>

<style lang="scss">
#app {
  font-family: Arial, sans-serif;
  color: #2c3e50;
  background-color: #f4f4f4;

  .test {
    color: #42b983;
  }
}
</style>
