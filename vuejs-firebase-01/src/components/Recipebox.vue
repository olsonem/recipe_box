<template>
  <div id="recipebox" class="container">
      <h1>Recipe Box</h1>  
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(recipe, index) in recipes" v-bind:key="index">
              <td>{{recipe.title}}</td>
              <td><span class="glyphicon glyphicon-eye-open" aria-hidden="true" v-on:click="removeRecipe(recipe)"></span></td>
            </tr>
          </tbody>
        </table>
      </div>
</template>
<script>
import firebase from '@/components/firebase-init';

export default {
  name: 'Recipebox',
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
