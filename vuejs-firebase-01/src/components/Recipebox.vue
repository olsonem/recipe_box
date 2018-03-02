<template>
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
                <!-- <td><router-link :to="{name: 'RecipeDetail', props: {id: 101}}"> -->
                <!-- <span class="glyphicon glyphicon-eye-open" aria-hidden="true"  ></span></router-link></td> -->
              </tr>
            </tbody>
          </table>
        </div>
        <hr>
        <div v-show="selectedRecipe">
          <recipe-detail v-bind:selected= "selectedRecipe"></recipe-detail>
        </div>
      </div>
</template>
<script>
import firebase from '@/components/firebase-init';
import RecipeDetail from '@/components/RecipeDetail'

export default {
  name: 'Recipebox',
  firebase: {
    recipes: firebase.recipesRef
  },
    data () {
    return {
      selectedRecipe:null
    }
  },
  
   methods: {
      addRecipe: function () {
        firebase.recipesRef.push(this.newRecipe);
        this.newRecipe.title = '';
        this.newRecipe.ingredients = [];
        this.newRecipe.description = '';
      },

      showDetail: function (recipe) {
        // firebase.recipesRef.child(recipe['.key']).remove()
       this.selectedRecipe= recipe;
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
