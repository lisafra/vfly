import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    base: '/',
    mode: 'history',
    routes: [
        {
            path: '/',
            component: require('../pages/index.vue')
        },
        {
            path: '/button',
            component: require('../pages/button.vue')
        },
        {
            path: '/toast',
            component: require('../pages/toast.vue')
        },
        {
            path: '/icon',
            component: require('../pages/icon.vue')
        }
    ]
})