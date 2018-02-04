import Vue from 'vue'
import Router from 'vue-router'
import main from "@/components/main"
// import homePage from "@/components/homePage"
import homePage from "@/components/buttonMain"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/home',
      name: 'homePage',
      component: homePage
    },
  ]
})
