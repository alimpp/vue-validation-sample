import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/welcome",
    name: "welcome",
    component: () => import("@/pages/welcome.vue"),
  },
  {
    path: "/form-validate",
    name: "form validate",
    component: () => import("@/pages/form.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
