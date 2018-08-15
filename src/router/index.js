import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Calculette from '@/components/Calculette'
import Quizz from '@/components/Quizz'
import Stickers from '@/components/Stickers'

Vue.use(Router)

export default new Router({
  mode : "history",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/calculette',
      name: 'Calculette',
      component: Calculette
    },
    {
      path: '/quizz',
      name: 'Quizz',
      component: Quizz
    },
    {
      path: '/stickers',
      name: 'Stickers',
      component: Stickers
    }
  ]
})
