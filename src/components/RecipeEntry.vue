<template>
    <div>
        <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand" href="#">Navbar</a>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                <a class="nav-item nav-link" href="#">Features</a>
                <a class="nav-item nav-link" href="#">Pricing</a>
                <a class="nav-item nav-link disabled" href="#">Disabled</a>
                </div>
            </div>
        </nav>
        <div id="recipes" class="container">
            <div class="page-header">
                <h1>Recipe Box</h1>
            </div>
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">Add New Recipe</h3>
                </div>
                <div class="panel-body">
                <!-- form for recipe -->
                    <form id="form" class="form-inline" v-on:submit.prevent="addRecipe">
                        <div class="form-group">
                            <label for="recipeTitle">Title:</label>
                            <input type="text" id="recipeTitle" class="form-control" v-model="newRecipe.title">
                        </div>
                        <div class="form-group">
                            <label for="recipeDescription">Description:</label>
                            <textarea rows ="5" cols="50" id="recipeDescription" class="form-control" v-model="newRecipe.description"> </textarea>
                        </div>
                        <input type="submit" class="btn btn-primary" value="Add Recipe">
                    </form>
                    <div>
                        <input type="button" class="btn btn-primary" v-on:click="addIngredient" value="Add Ingredient">
                    </div>  
                    <div>
                        <ul>
                            <li V-for="(ingredient,index1) in newRecipe.ingredients" v-bind:key="index1">ingredient</li>
                        </ul>
                    </div>
                            <!-- form for ingredients -->
                    <!-- <div v-show-if="addIngredient=true>  -->
                    <div>    
                        <form id="addIngredient" class="form-inline" v-on:submit.prevent="addIngredient">
                            <div class="form-group">
                                <label for="ingredientItem">Item:</label>
                                <input type="text" id="ingredientItem" class="form-control" v-model="newIngredient.item">
                            </div>
                            <div class="form-group">
                                <label for="ingredinetQuantity">Quantity:</label>
                                <input type="text" id="ingredientQuantity" class="form-control" v-model="newIngredient.quantity">
                            </div> 
                            <div class="form-group">
                                <label for="ingredientMeasure">Measure:</label>
                                <input type="text" id="ingredientMeasure" class="form-control" v-model="newIngredient.measure">
                            </div> 
                        </form> 
                    </div> 
                </div>
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
      },
      addIngredientFlag:false 
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
