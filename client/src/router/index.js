import Vue from "vue";
import Router from "vue-router";
import Register from "@/components/Register";
import Login from "@/components/Login";
import Tweet from "@/components/Tweet";
import TweetList from "@/components/TweetList";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/Tweet",
      name: "Tweet",
      component: Tweet
    },
    {
      path: "/register",
      name: "Register",
      component: Register
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },

    {
      path: "/",
      name: "TweetList",
      component: TweetList
    }
  ]
});
