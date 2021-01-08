import { createRouter, createWebHistory } from "vue-router";

import Home from "./components/Home";
import People from "./components/People";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
      name: "Home",
    },
    {
      path: "/detail/people/:id",
      component: People,
      name: "PeopleDetail",
    },
  ],
});
