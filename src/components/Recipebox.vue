<template>
<div id="recipes">
<div>
    <b-navbar toggleable type="light" variant="light">
        <b-navbar-toggle target="nav_text_collapse"></b-navbar-toggle>
        <b-navbar-brand>BootstrapVue</b-navbar-brand>
        <b-collapse is-nav id="nav_text_collapse">
            <b-navbar-nav>
                <b-nav-text>Navbar text</b-nav-text>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</div>
  <div id="recipebox" class="container">
    <h1>Recipe Box</h1>  
      <div class="container">
        <table class="table table-fixed">
          <thead>
            <tr>
              <th class="col-xs-3">Title</th>
              <th class="col xs-9">View Recipe</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(recipe, index) in recipes" v-bind:key="index">
              <td class="col-xs-3">{{recipe.title}}</td>
              <td class="col-xs-9"><span class="glyphicon glyphicon-eye-open" aria-hidden="true" v-on:click="showDetail(recipe)"></span></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-if="selected != null">
         <recipe-detail v-bind:selected= "selected"></recipe-detail>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from '@/components/firebase-init';
import RecipeDetail from '@/components/RecipeDetail';


export default {
  name: 'Recipebox',
  firebase: {
    recipes: firebase.recipesRef
  },
    data () {
    return {
      selected:null
    }
  },
  
   methods: {

      showDetail: function (recipe) {
        // firebase.recipesRef.child(recipe['.key']).remove()
       this.selected= recipe;
      }
    },
    components: {
      "recipe-detail":RecipeDetail
    }
}
</script>

<style>
#recipes {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}
</style>
