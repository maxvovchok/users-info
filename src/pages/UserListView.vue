<template>
  <loading
    :active="loading"
    :can-cancel="true"
    :on-cancel="onCancel"
    :is-full-page="fullPage"
  />
  <FilterForm @update:modelValue="query = $event" :modelValue="query" />
  <UserList :users="filterUsers" />
  <p class="text-info" v-if="filterUsers.length === 0 && !loading">
    There are no users.
  </p>
</template>

<script>
import Loading from "vue-loading-overlay";

import { getUsers } from "@/service/index.js";

import { FilterForm } from "@/components/index.js";
import { UserList } from "@/components/index.js";

export default {
  name: "home",
  components: {
    FilterForm,
    UserList,
    Loading,
  },
  data() {
    return {
      users: [],
      query: "",
      loading: false,
    };
  },
  methods: {
    async fetchUsers() {
      try {
        this.loading = true;
        this.users = await getUsers();
        this.filteredUsers = this.users;
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        this.loading = false;
      }
    },
  },
  computed: {
    filterUsers() {
      if (!this.query.trim()) {
        return this.users;
      }
      return this.users.filter(({ name }) =>
        name.toLowerCase().includes(this.query.toLowerCase())
      );
    },
  },
  mounted() {
    this.fetchUsers();
  },
};
</script>

<style lang="scss" scoped>
.text-info {
  text-align: center;
  font-size: $font-size;
  margin-top: 200px;
}
</style>
