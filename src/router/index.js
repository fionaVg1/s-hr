import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import store from '@/store'

Vue.use(Router)

const router = new Router({
  routes: [   
    {
      path:'/403',
      name:'403',
      component: ()=>import('@/views/403'),
      meta:{requiresAuth:false}
    },
    {
      path:'/login',
      name:'Login',
      component:()=>import('@/views/Login')
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta:{requiresAuth:true}
    }
  ]
});
//全局前置守卫
router.beforeEach((to,from,next)=>{
  if(to.matched.some(record=>record.meta.requiresAuth)){
    if(!store.state.user.isLogin){
      next({
        path:'/login',
        query:{redirect:to.fullPath}
      })
    }else{
      next();
    }
  }else{
    next();
  }
});
export default router;


