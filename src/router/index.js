import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Calculette from '@/components/Calculette'
import Quizz from '@/components/Quizz'

Vue.use(Router)

export default new Router({
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
    }
  ]
})
