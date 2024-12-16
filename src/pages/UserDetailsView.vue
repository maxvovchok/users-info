<template>
  <MyButton :handleClick="back">back</MyButton>
  <UserDetails v-if="user" :userDetails="user" />
  <p v-else>Loading...</p>
</template>

<script>
import { UserDetails } from "@/components/index.js";

import { getUserDetails } from "@/service/index.js";

import { MyButton } from "@/UI/index.js";

export default {
  components: {
    UserDetails,
    MyButton,
  },

  data() {
    return {
      userId: 0,
      user: null,
    };
  },

  methods: {
    getIdParams() {
      this.userId = this.$route.params.id || 0;
    },
    async fetchUserDetails() {
      try {
        this.user = await getUserDetails(this.userId);
      } catch (error) {
        console.log(error);
      }
    },
    back() {
      this.$router.push({ name: "home" });
    },
  },

  mounted() {
    this.getIdParams();
    this.fetchUserDetails();
  },
};
</script>
