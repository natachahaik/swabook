import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import HomePage from "@/views/HomePage.vue";
import SearchPageSwabook from "@/views/SearchPageSwabook.vue";

// 2. Define some routes

const routes = [
  { path: "/", component: HomePage, name: "HomePage" },
  {
    path: "/search/:search",
    component: SearchPageSwabook,
    name: "SearchPageSwabook",
    props: true,
  },
];

// 3. Create the router instance and pass the `routes` option

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;
