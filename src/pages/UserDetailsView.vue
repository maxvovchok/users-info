<template>
  <UserDetails v-if="user" :userDetails="user" />
  <p v-else>Loading...</p>
</template>

<script>
import { UserDetails } from "@/components/index.js";
import { getUserDetails } from "@/service/index.js";

export default {
  components: {
    UserDetails,
  },

  data() {
    return {
      userId: 0,
      user: {},
    };
  },

  methods: {
    getIdParams() {
      this.userId = this.$route.params.id;
    },
    async fetchUserDetails() {
      try {
        this.user = await getUserDetails(this.userId);
      } catch (error) {
        console.log(error);
      }
    },
  },

  mounted() {
    this.getIdParams();
    this.fetchUserDetails();
  },
};
</script>
