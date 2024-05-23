import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/addDeclaration',
        name: 'addDeclaration',
        component: () => import(/* webpackChunkName: "addDeclaration" */ '../views/AddDeclarationView.vue'),
    },
    {
        path: '/data-page',
        name: 'data-page',
        component: () => import(/* webpackChunkName: "data-page" */ '../views/DataPageView.vue'),
    },
    {
        path: '/bonus',
        name: 'bonus',
        component: () => import(/* webpackChunkName: "data-page" */ '../views/BonusView.vue'),
    },
    {
        path: '/info',
        name: 'info',
        component: () => import(/* webpackChunkName: "data-page" */ '../views/SearchPageView.vue'),
    },
    {
        path: '/searchDecl',
        name: 'searchDecl',
        component: () => import(/* webpackChunkName: "data-page" */ '../views/SearchDeclarationView.vue'),
    },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
