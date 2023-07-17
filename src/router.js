import { createRouter, createWebHistory } from "vue-router";
import Homepage from "./pages/Homepage.vue";
import Apartment from "./pages/Apartment.vue";
import ErrorPage from "./pages/ErrorPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Homepage,
      name: "homepage",
    },
    {
      path: "/apartment/:id",
      component: Apartment,
      name: "apartment",
    },
    {
      path: "/:pathMatch(.*)",
      component: ErrorPage,
      name: "error-page",
    },
  ],
});

export default router;
