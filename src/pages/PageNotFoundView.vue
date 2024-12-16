<template>
  <div class="page-not-found">
    <h1>404 - Page Not Found</h1>
    <p>Go to the <router-link to="/">main page</router-link>.</p>
  </div>
</template>

<script>
export default {
  name: "PageNotFound",
};
</script>

<style lang="scss" scoped>
.page-not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f4f6f9;
  text-align: center;
  font-family: "Arial", sans-serif;
  color: #333;

  h1 {
    font-size: 4rem;
    font-weight: bold;
    color: #e74c3c;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.5rem;
    color: #555;
    margin-top: 10px;
  }

  router-link {
    font-size: 1.2rem;
    color: #3498db;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      text-decoration: underline;
      color: #2980b9;
    }
  }

  &::before {
    content: "⚠️";
    font-size: 6rem;
    margin-bottom: 20px;
    color: #f39c12;
  }
}
</style>
