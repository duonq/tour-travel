import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/HomePage/Home.vue";
// import PageTour from "../views/TourPage/PageTour.vue";
// import NotFound from "../views/404.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/tours",
    component: { render: c => c('router-view') },
    children: [
      {
        path: '',
        name: "PageTour",
        component: () => import("../views/TourPage/PageTour.vue"),
      },
      {
        path: ':tour-detail',
        name: 'tour-detail',
        component: () => import('../views/TourPage/TourDetail.vue')
      },
    ]
  },
  {
    path: "/about",
    name: "About",

    component: () => import("../views/AboutPage/About.vue"),
  },
  {
    path: "/contact",
    name: "Contact",

    component: () => import("../views/ContactPage/Contact.vue"),
  },
  {
    path: "/blog",
    name: "Blog",

    component: () => import("../views/BlogPage/Blog.vue"),
  },
  {
    path: "/login",
    name: "SignIn",
    component: () => import("../views/Login/SignIn"),
  },
  // {
  //   path: "/register",
  //   name: "Register",
  //   component: () => import("../views/Login/Register"),
  // },
  // {
  //   path: "*",
  //   component: NotFound,
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
