import Vue from "vue";
import Router from "vue-router";
import GMap from "./views/GMap.vue";
import Signup from "./views/auth/Signup";
import Login from "./views/auth/Login";
import firebase from "firebase";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "GMap",
      component: GMap,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/signup",
      name: "Signup",
      component: Signup
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    }
  ]
});

router.beforeEach((to, from, next) => {
  // check to see if route requires Auth>
  if (to.matched.some(rec => rec.meta.requiresAuth)) {
    // check auth state of user>
    let user = firebase.auth().currentUser;
    if (user) {
      // user signed in, proceed to route:
      next();
    } else {
      // no user signed in, redirect to login:
      next({ name: "login" });
    }
  } else {
    next();
  }
});

export default router;
