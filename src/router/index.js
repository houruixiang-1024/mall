import Vue from "vue";
import VueRouter from 'vue-router'

//安装插件
Vue.use(VueRouter)

//创建router
const  routes = [

    {
        path: '',
        redirect : '/major',

    },
    {
        path: '/major',
        component : () => import('../views/major/major')
    },
    {
        path: '/cart',
        component : () => import('../views/cart/cart')
    },
    {
        path: '/category',
        component : () => import('../views/category/category')
    },
    {
        path: '/profile',
        component : () => import('../views/profile/profile')
    }
]
const router = new VueRouter(
    {
        routes,
        mode : 'history'
    }
)

//导出
export default router