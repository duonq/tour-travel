export default [
  {
    path: "",
    name: "home",
    component: () => import("@/pages/user/Home")
  },
  {
    path: "profile",
    meta: { auth: true },
    component: () => import("@/pages/user/Profile"),
    children: [
      {
        path: "infomation",
        name: "profile.info",
        component: () => import("@/components/profile/Infomation")
      },
      {
        path: "orders",
        name: "profile.orders",
        component: () => import("@/components/profile/Order")
      }
    ]
  },
  {
    path: "tours",
    name: "tours",
    component: () => import("@/pages/user/Tours")
  },
  {
    path: "tour/:slug",
    name: "tours.show",
    component: () => import("@/pages/user/TourDetail")
  },
  {
    path: "about",
    name: "about",
    component: () => import("@/pages/user/About")
  },
  {
    path: "contact",
    name: "contact",
    component: () => import("@/pages/user/Contact")
  },
  {
    path: "blog",
    name: "blog",
    component: () => import("@/pages/user/Blog")
  },
  {
    path: "check-out",
    name: "checkout",
    meta: { auth: true },
    component: () => import("@/pages/user/CheckOut")
  }
];
