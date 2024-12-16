<template>
  <FilterForm @update:modelValue="query = $event" :modelValue="query" />
  <UserList :users="filterUsers" />
  <p class="text-info" v-if="filterUsers.length === 0">Користувачів не має</p>
</template>

<script>
import { getUsers } from "@/service/index.js";
import { FilterForm } from "@/components/index.js";
import { UserList } from "@/components/index.js";

export default {
  name: "home",
  components: {
    FilterForm,
    UserList,
  },
  data() {
    return {
      users: [],
      query: "",
    };
  },
  methods: {
    async fetchUsers() {
      try {
        this.users = await getUsers();
        this.filteredUsers = this.users;
      } catch (error) {
        console.error("Error fetching users:", error);
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

<style lang="scss">
.text-info {
  text-align: center;
  font-size: 24px;
  margin: 200px;
}
</style>
