<template>
  <div
    class="user-details"
    v-if="userDetails && userDetails.address && userDetails.company"
  >
    <img
      class="user-image"
      src="../../../public/img/user-image.png"
      alt="user-image"
      loading="lazy"
    />
    <h1 class="user-name">{{ userDetails.name }}</h1>
    <p class="user-email">📧 Email: {{ userDetails.email }}</p>
    <p class="user-phone">📞 Phone: {{ userDetails.phone }}</p>
    <p class="user-website">
      🌐 Website:
      <a :href="'http://' + userDetails.website" target="_blank">{{
        userDetails.website
      }}</a>
    </p>

    <div class="user-address">
      <h2>Address:</h2>
      <p>{{ userDetails.address.suite }}, {{ userDetails.address.street }}</p>
      <p>{{ userDetails.address.city }}, {{ userDetails.address.zipcode }}</p>
      <p>
        🌍 Coordinates: {{ userDetails.address.geo.lat }},
        {{ userDetails.address.geo.lng }}
      </p>
    </div>

    <div class="user-company">
      <h2>Company:</h2>
      <p>
        <strong>{{ userDetails.company.name }}</strong>
      </p>
      <p>{{ userDetails.company.catchPhrase }}</p>
      <p>{{ userDetails.company.bs }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserDetails",
  props: {
    userDetails: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss" scoped>
.user-details {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-family: Arial, sans-serif;

  .user-image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 20px;
  }

  .user-name {
    font-size: 24px;
    color: #333;
    margin-bottom: 10px;
  }

  .user-email,
  .user-phone,
  .user-website {
    font-size: 16px;
    color: #555;
    margin: 5px 0;
  }

  .user-website a {
    color: #007bff;
    text-decoration: none;
  }

  .user-website a:hover {
    text-decoration: underline;
  }

  .user-address,
  .user-company {
    margin-top: 20px;
    text-align: left;

    h2 {
      font-size: 20px;
      color: #333;
      margin-bottom: 10px;
    }

    p {
      font-size: 14px;
      color: #555;
      margin: 5px 0;
    }
  }
}
</style>
