import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Recipes from '@/components/Recipes'
import Recipebox from '@/components/Recipebox'
import RecipeDetail from '@/components/RecipeDetail'
import RecipeEntry from '@/components/RecipeEntry'
import About from '@/components/about'
import BootstrapVue from 'bootstrap-vue'

Vue.use(Router)
Vue.use(BootstrapVue)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Recipebox',
      component: Recipebox
    },
    {
      path: '/new',
      name: 'RecipeEntry',
      component: RecipeEntry
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }

  ]
})
