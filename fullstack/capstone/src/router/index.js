import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CartView from "../views/CartView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/products",
    name: "products",
    component: () => import("../views/ProductsView.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/AdminView.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/ContactView.vue"),
  },
  {
    path: "/viewmore/:prodID",
    name: "ViewMore",
    component: () => import("../views/MoreView.vue"),
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/Register",
    name: "Register",
    component: () => import("../views/RegisterView.vue"),
  },
  {
    path: "/cart",
    name: "CartView",
    component: CartView,
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/UserProfileView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
