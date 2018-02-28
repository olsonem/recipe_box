import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Recipes from '@/components/Recipes'
import Recipebox from '@/components/Recipebox'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Recipebox',
      component: Recipebox
    }

  ]
})
