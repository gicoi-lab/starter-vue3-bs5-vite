import {createRouter, createWebHistory} from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import HelloWorld2 from '../components/HelloWorld2.vue'

const defaultRoutePath = '/'

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld2
  },
  {
    path: '/hello2',
    name: 'HelloWorld2',
    component: HelloWorld2
  },
  {
    path: '/hello',
    name: 'HelloWorld1',
    component: HelloWorld
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    redirect: defaultRoutePath
  }
]

export default function () {
  return createRouter({
    history: createWebHistory('/sub-folder'),
    routes
  })
}