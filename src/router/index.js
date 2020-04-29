import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: "Home",
        component: () =>
            import ("../views/home/index.vue")
    }, {
        path: '/search',
        name: 'Search',
        component: () =>
            import ('../views/search/index.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ('../views/login/index.vue')
    },
    {
        path: '/location',
        name: 'Location',
        component: () =>
            import ('../views/location/index.vue')
    },
    {
        path: '/detail',
        name: 'Detail',
        component: () =>
            import ('../views/detail/index.vue')
    },
    {
        path: '/purchase',
        name: 'Purchase',
        component: () =>
            import ('../views/purchase/index.vue')
    },
    {
        path: '/food',
        name: 'Food',
        component: () =>
            import ('../views/food/index.vue')
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router