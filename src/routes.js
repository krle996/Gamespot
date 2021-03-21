/* eslint-disable */

import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store/store';

import Home from './components/home/Index.vue';
import Signin from './components/signin/Form.vue';
import Dashboard from '././components/dashboard/Dashboard.vue';
import MainDashboard from './components/dashboard/Main.vue';
import AddPosts from './components/dashboard/AddPosts.vue';
import PostsList from './components/dashboard/ListPosts.vue';
import PostView from './components/post/Post.vue';
import NotFound from './components/404/NotFound.vue';

Vue.use(VueRouter);

const authGuard = {
    beforeEnter: (to, from, next) => {

        const redirect = () => {
            if( store.state.admin.token ){
                if(to.path === '/signin') {
                    next('/dashboard')
                } else {
                    next()
                }

            } else {
                if(to.path === '/signin'){
                    next()
                } else {
                    next('/')
                }
        }
    }
    

    if(store.state.admin.refreshLoading){
        store.watch((state, getters) => getters['refreshLoading'], () => {
            redirect();
        })
    } else {
        redirect();
    }
}
}

const routes = [
    { path: '/', component: Home },
    { path: '/signin', component: Signin, ...authGuard },
    { path: '/dashboard', component: Dashboard, children:[
        { path: '/', component: MainDashboard },
        { path: 'add_posts', component: AddPosts },
        { path: 'posts_list', component: PostsList }
    ], ...authGuard },
    { path: '/post/:id', component: PostView },
    { path: '*', component: NotFound }
]

export default new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior(from, to, savedPosition){
        return {
            x:0,
            y:0
        }
    }
})