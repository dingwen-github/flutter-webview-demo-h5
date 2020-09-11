import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FlutterJsInteraction from '../components/FlutterJsInteraction'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/flutter',
      name: 'FlutterJsAndInteraction',
      component: FlutterJsInteraction
    }
  ]
})
