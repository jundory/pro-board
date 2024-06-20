import { createRouter, createWebHistory } from "vue-router";
import BaseLayout from "@/layout/BaseLayout.vue";
import DetailPage from "@/views/DetailPage.vue";
import WritePage from "@/views/WritePage.vue";

const routes = [
  {
    path: "/",
    name: "메인 화면",
    component: BaseLayout,
    children: [
      {
        path: "",
        name: "홈",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("../views/HomeView.vue"),
      },
      {
        path: "/board",
        name: "board",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/MainBoard.vue"),
      },
    ],
  },
  {
    path: "/detail/:id",
    name: "글 보기",
    component: DetailPage,
  },
  {
    path: "/write",
    name: "글 쓰기",
    component: WritePage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
