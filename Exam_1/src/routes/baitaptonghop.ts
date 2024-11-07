export default [
    {
        path: '/exAll/chatgpt',
        name: 'chatgpt',
        component: () => import('../view/ExAll/Part_2/chatGpt.vue' ),
    },
    {
        path: '/exAll/sentence1',
        name: 'exAllsentence1',
        component: () => import('../view/ExAll/Part_2/Sentence_1.vue' ),
    },
    {
        path: '/exAll/sentence2',
        name: 'exAllsentence2',
        component: () => import('../view/ExAll/Part_2/Sentence_2.vue' ),
    },
    {
        path: '/exAll/sentence3',
        name: 'exAllsentence3',
        component: () => import('../view/ExAll/Part_2/Sentence_3.vue' ),
    },
    {
        path: '/exAll/sentence4',
        name: 'exAllsentence4',
        component: () => import('../view/ExAll/Part_2/Sentence_4.vue' ),
    },
    {
        path: '/exAll/sentence5',
        name: 'exAllsentence5',
        component: () => import('../view/ExAll/Part_2/Sentence_5.vue' ),
    },
    {
        path: '/exAll/sentence6',
        name: 'Blogs',
        component: () => import('../view/ExAll/Part_2/Sentence_6/Sentence_6.vue' ),
    },
    {
        path: '/exAll/sentence6/:id',
        name: 'Blog',
        component: () => import('../view/ExAll/Part_2/Sentence_6/Blog.vue' ),
    },
    {
        path: '/exAll/sentence7',
        name: 'ls4part2sentence7',
        component: () => import('../view/ExAll/Part_2/Sentence_7.vue' ),
    },
    {
        path: '/exAll/sentence8',
        name: 'ls4part2sentence8',
        component: () => import('../view/ExAll/Part_2/Sentence_8/Sentence_8.vue' ),
    },
    // {
    //     path: '/exAll/sentence10',
    //     name: 'ls4part2sentence10',
    //     component: () => import('../view/Lession_4/Part_2/Sentence_10.vue' ),
    // },
]