import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import NotFound from "../views/404.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/tours",
    name: "Tours",
    component: () => import("../views/tour/Tours.vue"),
    children: [
      {
        path: 'tour-detail',
        name: 'tour-detail',
        component: () => import('../views/tour/TourDetail.vue')
      },
    ]
  },
  {
    path: "/about",
    name: "About",

    component: () => import("../views/about/About.vue"),
  },
  {
    path: "/contact",
    name: "Contact",

    component: () => import("../views/contract/Contact.vue"),
  },
  {
    path: "/blog",
    name: "Blog",

    component: () => import("../views/Blog.vue"),
  },
  {
    path: "/login",
    name: "SignIn",
    component: () => import("../components/login/SignIn.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../components/login/Register.vue"),
  },
  {
    path: "*",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
