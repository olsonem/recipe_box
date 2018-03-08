<template>
    <div id="new-recipe">
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
                            <input type="submit" class="btn btn-primary" :disabled="newRecipe.title.length ==0 || newRecipe.description.length ==0" value="Save Recipe">
                    </form>
                    <div>
                        <input type="button" class="btn btn-primary" v-on:click="addIngredient" value="Add Ingredient">
                    </div>  
                    <div>
                        <ul class="added-ingredients">
                            <li v-for="(ingredient,index) in newRecipe.ingredients" v-bind:key="index">
                                <span>Item: {{ingredient.item}}</span>
                                <span>Quantity: {{ingredient.quantity}}</span>
                                <span>Measure: {{ingredient.measure}}</span>
                            </li>
                        </ul>
                    </div>
                            <!-- form for ingredients -->
                    <div v-if="addIngredientFlag">    
                        <form id="addIngredient" class="form-inline" v-on:submit.prevent="saveIngredient">
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
                            <div>
                                <input type="submit" class="btn btn-primary" :disabled="newIngredient.item.length ==0 || newIngredient.quantity.length ==0 || newIngredient.measure.length ==0" value="save">
                                <input type="button" class="btn btn-primary" v-on:click="cancelIngredient" value="cancel">
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
      newIngredient:{
          item: "",
          quantity: "",
          measure: ""
      },
      addIngredientFlag:false 
    };
  },
  
   methods: {
      addRecipe: function () {
        firebase.recipesRef.push(this.newRecipe);
        this.newRecipe.title = '';
        this.newRecipe.ingredients = [];
        this.newRecipe.description = '';
      },
      addIngredient: function () {
        this.addIngredientFlag = true;
      },
    //   removeBook: function (recipe) {
    //     // firebase.recipesRef.child(recipe['.key']).remove()
    //     toastr.success('Recipe removed successfully')
    //   }
     cancelIngredient: function() {
         this.newIngredient.item = "";
         this.newIngredient.measure = "";
         this.newIngredient.quantity = "";
         this.addIngredientFlag = false;
     },
     saveIngredient: function() {
        
         let newIng = {
             item: this.newIngredient.item,
             quantity: this.newIngredient.quantity,
             measure: this.newIngredient.measure
         };
        this.newRecipe.ingredients.push(newIng);

        this.newIngredient.item = "",
        this.newIngredient.measure = "",
        this.newIngredient.quantity = "",
        this.addIngredientFlag = false;
        }
    }
};
</script>

<style>
.added-ingredients {
    list-style-type: none;
}
#new-recipe {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
