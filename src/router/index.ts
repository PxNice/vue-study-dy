import { createRouter, createWebHistory } from 'vue-router'
import Video from '@/views/video/index.vue'
import User from '@/views/user.vue'
export default  createRouter({
  history: createWebHistory('/'),
  routes:[
    {path:'/',component:Video},
    {path:'/user/:id',component:User},
  ]
})

