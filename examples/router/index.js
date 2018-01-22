import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    base: '/',
    mode: 'history',
    routes: [
        {
            path: '/button',
            component: require('../pages/button.vue')
        },
        {
            path: '/message',
            component: require('../pages/message.vue')
        }
    ]
})