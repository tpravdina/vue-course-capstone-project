import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Characters from "../views/Characters.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Characters",
    component: Characters,
  },
  {
    path: "/favourites",
    name: "Favourites",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Favourites.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
