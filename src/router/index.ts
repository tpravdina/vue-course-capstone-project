import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Characters from "../views/Characters.vue";
import Favourites from "../views/Favourites.vue";
import CharacterDetails from "../views/CharacterDetails.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Characters",
    component: Characters,
  },
  {
    path: "/character/:id",
    name: "CharacterDetails",
    component: CharacterDetails,
  },
  {
    path: "/favourites",
    name: "Favourites",
    component: Favourites,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
