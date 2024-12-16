<template>
  <ul class="user-list">
    <li class="user-item" v-for="user in users" :key="user.id">
      <router-link :to="'/user/' + user.id">
        <div class="user-box">
          <img
            class="user-img"
            src="../../../public/img/user-image.png"
            alt="user-image"
          />
          <h1>{{ user.name }}</h1>
          <p>{{ user.email }}</p>
        </div>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.user-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 0;
  margin: 0;

  .user-box {
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .user-item {
    height: 300px;
    list-style: none;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    }

    a {
      text-decoration: none;
      display: block;
      height: 100%;
      cursor: pointer;

      .user-box {
        .user-img {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          object-fit: cover;
          margin-bottom: 10px;
          border: 2px solid #42b983;
        }

        h1 {
          font-size: 18px;
          color: #333;
          margin: 10px 0 5px;
          font-weight: bold;
        }

        p {
          font-size: 14px;
          color: #666;
        }
      }
    }
  }
}
</style>
