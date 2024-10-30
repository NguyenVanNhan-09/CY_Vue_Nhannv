import { createRouter, createWebHistory } from 'vue-router'
import routerLs1 from "./routerLs1.ts";
import routerLs2 from "./routerLs2.ts";
import routerLs3 from "./routersLs3.ts";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../view/Home.vue'),
        },
        ...routerLs1,
        ...routerLs2,
        ...routerLs3,
    ],
})

export default router
