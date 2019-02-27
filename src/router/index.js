import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const HelloWorld = () => import( "@/components/HelloWorld.vue");
const Page1 = () => import( "@/components/PAGE1.vue");
const Page2 = () => import("@/components/PAGE2.vue");
const Page3 = () => import("@/components/PAGE3.vue");
const Page4 = () => import("@/components/PAGE4.vue");
const Page5 = () => import("@/components/PAGE5.vue");

export default new Router({
  routes: [
    {
      path: '/',
      component: HelloWorld
    }, {
      path: '/page1',
      component: Page1
    }, {
      path: '/page2',
      component: Page2
    }, {
      path: '/page3',
      component: Page3
    }, {
      path: '/page4',
      component: Page4
    }, {
      path: '/page5',
      component: Page5
    }
  ]
})
