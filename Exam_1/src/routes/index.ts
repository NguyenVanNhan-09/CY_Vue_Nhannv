import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/sentence1',
            name: 'sentence1',
            component: () => import('../view/Sentence_1.vue' ),
        },
        {
            path: '/sentence2',
            name: 'sentence2',
            component: () => import('../view/Sentence_2.vue'),
        },
        {
            path: '/sentence3',
            name: 'sentence3',
            component: () => import('../view/Sentence_3.vue'),
        },
        {
            path: '/sentence4',
            name: 'sentence4',
            component: () => import('../view/Sentence_4.vue'),
        },
        {
            path: '/sentence5',
            name: 'sentence5',
            component: () => import('../view/Sentence_5.vue'),
        },
        {
            path: '/sentence6',
            name: 'sentence6',
            component: () => import('../view/Sentence_6.vue'),
        },
        {
            path: '/sentence7',
            name: 'sentence7',
            component: () => import('../view/Sentence_7.vue'),
        },
    ],
})

export default router
