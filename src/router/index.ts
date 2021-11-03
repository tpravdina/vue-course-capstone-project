import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Characters from "../views/Characters.vue";
import Favourites from "../views/Favourites.vue";
import CharacterDetails from "../views/CharacterDetails.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Characters",
    component: Characters,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    props: (route) => ({
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      page: parseInt(route.query.page) || 1,
      species: route.query.species || "",
      name: route.query.name || "",
    }),
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
