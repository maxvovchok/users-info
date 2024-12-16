import { createRouter, createWebHashHistory } from "vue-router";

import { UserListView } from "@/pages/index.js";

const routes = [
  {
    path: "/",
    name: "home",
    component: UserListView,
  },
  {
    path: "/user/:id",
    name: "user",
    component: () => import("../pages/UserDetailsView"),
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: () => import("../pages/PageNotFoundView"),
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
