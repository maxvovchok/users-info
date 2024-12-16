<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import "vue-loading-overlay/dist/css/index.css";

export default {
  name: "App",
};
</script>

<style lang="scss">
body {
  font-family: $font-family;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

li {
  list-style: none;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (max-width: 768px) {
    padding: 0 15px;
  }
}

.header {
  padding: 5px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header-nav {
    display: flex;
    gap: 40px;

    @media screen and (max-width: 768px) {
      gap: 20px;
    }

    .nav-menu-link {
      text-decoration: none;
      color: rgb(57, 57, 57);
      transition: color 0.3s;

      &:hover {
        color: rgb(79, 79, 255);
      }

      @media screen and (max-width: 768px) {
        font-size: 16px;
        padding: 8px 0;
      }
    }
  }
}
</style>
