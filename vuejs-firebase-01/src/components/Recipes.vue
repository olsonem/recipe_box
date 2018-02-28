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
          <input type="submit" class="btn btn-primary" value="Add Recipe">
        </form>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Recipe List</h3>
      </div>
      <div class="panel-body">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Ingredients</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(recipe, index) in recipes" v-bind:key="index">
              <td>{{recipe.title}}</td>
              <td>{{recipe.description}}</td>
              <td><span class="glyphicon glyphicon-trash" aria-hidden="true" v-on:click="removeRecipe(recipe)"></span></td>
            </tr>
          </tbody>
        </table>
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
