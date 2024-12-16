<template>
  <MyButton :handleClick="back">back</MyButton>
  <UserDetails v-if="user" :userDetails="user" />
  <loading
    :active="loading"
    :can-cancel="true"
    :on-cancel="onCancel"
    :is-full-page="true"
  />
</template>

<script>
import Loading from "vue-loading-overlay";

import { UserDetails } from "@/components/index.js";

import { getUserDetails } from "@/service/index.js";

import { MyButton } from "@/UI/index.js";

export default {
  name: "UserDetailsView",
  components: {
    UserDetails,
    MyButton,
    Loading,
  },

  data() {
    return {
      userId: 0,
      user: null,
      loading: false,
    };
  },

  methods: {
    getIdParams() {
      this.userId = this.$route.params.id || 0;
    },
    async fetchUserDetails() {
      try {
        this.loading = true;
        this.user = await getUserDetails(this.userId);
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
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
