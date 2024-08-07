const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/MainBoardPage.vue") },
      {
        path: "/write",
        component: () => import("src/pages/WriteBoardPage.vue"),
      },
      {
        path: "/detail/:id",
        component: () => import("src/pages/DetailBoardPage.vue"),
      },
    ],
  },
  {
    path: "/login",
    component: () => import("src/pages/LoginPage.vue"),
  },
  {
    path: "/signup",
    component: () => import("src/pages/SignUpPage.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
