export default [
    {
        path: '/ls7/login',
        name: 'ls7Login',
        component: () => import('../view/Lession_7/Login.vue' ),
    },
    {
        path: '/ls7/profile',
        name: 'ls7profile',
        component: () => import('../view/Lession_7/Profile.vue' ),
    },
]