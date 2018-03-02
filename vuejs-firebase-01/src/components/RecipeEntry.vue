<template>
  <div id="recipes" class="container">
    <div class="page-header">
      <h1>Recipe Box</h1>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Add New Recipe</h3>
      </div>
      <div class="panel-body">
         <form id="form" class="form-inline" v-on:submit.prevent="addRecipe">
          <div class="form-group">
            <label for="recipeTitle">Title:</label>
            <input type="text" id="recipeTitle" class="form-control" v-model="newRecipe.title">
            </div>
          <div class="form-group">
            <label for="recipeDescription">Description:</label>
            <textarea rows ="5" cols="50" id="recipeDescription" class="form-control" v-model="newRecipe.description"> </textarea>
          </div>
          <div><input type="button" class="btn btn-primary" v-on:click="addIngredient" value="Add Ingredient"></div>
            <div v-show="newRecipe.ingredients.length > 0">
            <ul>
                <li V-for="(ingredient,index) in newRecipe.ingredients" v-bind:key="index">ingredient</li>
            </ul>
          </div>

          <input type="submit" class="btn btn-primary" value="Add Recipe">
        </form>
      </div>
    </div>
  </div>
</template>


<script>
import firebase from '@/components/firebase-init';

export default {
  name: 'Recipes',
  firebase: {
    recipes: firebase.recipesRef
  },
    data () {
    return {
      newRecipe: {
          title: '',
          ingredients: [],
          description: ''
      }
    }
  },
  
   methods: {
      addRecipe: function () {
        firebase.recipesRef.push(this.newRecipe);
        this.newRecipe.title = '';
        this.newRecipe.ingredients = [];
        this.newRecipe.description = '';
      },
      addIngredient: function () {
        this.newRecipe.ingredients.push({item:"", quantity:"", measure:""})
      },
      removeBook: function (recipe) {
        // firebase.recipesRef.child(recipe['.key']).remove()
        toastr.success('Recipe removed successfully')
      }
    },
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
