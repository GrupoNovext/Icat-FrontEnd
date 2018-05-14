'use strict'

import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import DashBoard from '../components/Lawyer/DashBoard'

Vue.use(Router)

const router = new Router({
    base: __dirname,
    linkActiveClass: 'active',
    routes: [
        {
            path: '/',
            component: DashBoard,
            name: 'dashboard'
        },
        {
            path: '/login',
            component: Login,
            name: 'login'
        }
    ]
})
export default router