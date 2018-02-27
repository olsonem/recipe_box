<template>
  <div id="app" class="container">
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
            <tr v-for="recipe in recipes">
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
import Firebase from 'firebase'
let config = {
    apiKey: "AIzaSyC6tc3IppNH21xgta6KSTAd4hmJT0iZ1L8",
    authDomain: "recipe-box-162b0.firebaseapp.com",
    databaseURL: "https://recipe-box-162b0.firebaseio.com",
    projectId: "recipe-box-162b0",
    storageBucket: "recipe-box-162b0.appspot.com",
    messagingSenderId: "423983415012"
  };
  
let app = Firebase.initializeApp(config)
let db = app.database()
let recipesRef = db.ref('recipes')

export default {
  name: 'app',
  firebase: {
    recipes: recipesRef
  },
    data () {
    return {
      newRecipe: {
          title: '',
          ingredients: '',
          description: ''
      }
    }
  },
  
   methods: {
      addBook: function () {
        recipesRef.push(this.newRecipe);
        this.newRecipe.title = '';
        this.newRecipe.ingredients = '';
        this.newRecipe.description = '';
      },
      removeBook: function (recipe) {
        recipesRef.child(recipe['.key']).remove()
        toastr.success('Recipe removed successfully')
      }
    },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
