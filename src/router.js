import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Character from "../src/views/Character.vue";
import CharacterList from "../src/views/CharacterList.vue";
import GodList from "../src/views/GodList.vue";
import SocietyList from "../src/views/SocietyList.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function() {
        return import(/* webpackChunkName: "about" */ "./views/About.vue");
      }
    },
    {
      path: "/characters",
      name: "characters",
      props: true,
      component: CharacterList
    },
    {
      path: "/characters/:characterId",
      name: "character",
      props: true,
      component: Character
    },
    {
      path: "/gods",
      name: "gods",
      props: true,
      component: GodList
    },
    {
      path: "/societies",
      name: "societies",
      props: true,
      component: SocietyList
    }
  ]
});
