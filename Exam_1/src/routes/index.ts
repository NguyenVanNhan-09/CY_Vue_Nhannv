import {createRouter, createWebHistory} from 'vue-router'
import routerLs1 from "./routerLs1.ts";
import routerLs2 from "./routerLs2.ts";
import routerLs3 from "./routerLs3.ts";
import routerLs4 from "./routerLs4.ts";
import routerLs5 from "./routerLs5.ts";
import routerLs7 from "./routerLs7.ts";
import baitaptonghop from "./baitaptonghop.ts";

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
        ...routerLs4,
        ...routerLs5,
        ...routerLs7,
        ...baitaptonghop,
    ],
})

export default router
