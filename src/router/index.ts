import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import randomTopicView from "../views/randomTopicView.vue"
import allTopicView from "../views/allTopicView.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },{
    path:"/random",
    name:"random",
    component:randomTopicView
  },{
    path:"/all",
    name:"all",
    component:allTopicView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
