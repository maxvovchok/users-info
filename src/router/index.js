import { createRouter, createWebHistory } from "vue-router";
import { UserListView } from "@/pages/index.js";
import { UserDetailsView } from "@/pages/index.js";

const routes = [
  {
    path: "/",
    name: "home",
    component: UserListView,
  },
  {
    path: "/user/:id",
    name: "user",
    component: UserDetailsView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
