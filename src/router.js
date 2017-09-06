import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Login from './components/authentication/Login.vue'
import Registration from './components/authentication/Registration.vue'
import User from './components/dashboard/User.vue'
import {store} from './store'
import toastr from 'toastr'
Vue.use(Router)

export const router =  new Router({
    routes:[
        {
            path:'/',
            component: Home
        },
        
        {
            path:'/register',
            component:Registration
        },
        {
            path:'/login',
            component:Login
        },
        {
            path:'/dashboard',
            component:User,
            beforeEnter: (to, from, next)=>{
                if(store.state.isAuthenticated == null || store.state.isAuthenticated == false){
                    router.push('/login')
                    toastr.warning("You should login first to access this page.")
                }else{
                    next()
                }
            }
        }
    ]
})