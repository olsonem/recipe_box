<template>
<div id="recipes" class="container col-md-10 col-md-offset-1">
  <div id="recipebox" class="container">
    <h1 class="recipebox-title">Recipe Box</h1>  
      <div class="container recipe-list">
        <table class="table table-fixed">
          <thead>
            <tr>
              <th class="col-xs-3">Title</th>
              <th class="col xs-9">View Recipe</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(recipe, index) in recipes" v-bind:key="index">
              <td class="col-xs-9">{{recipe.title}}</td>
              <td class="col-xs-3"><span class="btn btn-secondary" aria-hidden="true" v-on:click="showDetail(recipe)"><icon class="icon" name="eye"></icon></span></td>
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
import 'vue-awesome/icons/eye'
import Icon from 'vue-awesome/components/Icon'


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
      'recipe-detail':RecipeDetail
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


}

.recipe-list{

    height:200px;
    overflow-y:auto;
    border-style: double;
    
}

.recipebox-title{
    font-family: 'Calligraffitti', cursive;
    margin-top: 15px;
  
}

</style>
