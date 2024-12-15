<template>
  <UserList :users="users" />
</template>

<script>
import { getUsers } from "@/service/index.js";
import { UserList } from "@/components/index.js";

export default {
  name: "home",
  components: {
    UserList,
  },
  data() {
    return {
      users: [],
    };
  },
  methods: {
    async fetchUsers() {
      try {
        this.users = await getUsers();
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.fetchUsers();
  },
};
</script>

<style></style>
