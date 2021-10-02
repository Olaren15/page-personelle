import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'À propos de moi',
        component: () => import("@/views/AboutMe.vue")
    },
    {
        path: '/projects',
        name: "Projets",
        component: () => import('@/views/Projects.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
