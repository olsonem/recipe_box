<template>
  <div id="RecipeDetail" class="container">
    <div id="recipeTitle">
      <h2>{{selected.title}}</h2>
      <hr>
    </div>
    <div class="col-xs-6">
      <h3>Ingredients:</h3>
      <div class="container ingredient-list">
        <table class="table table-fixed">
          <thead>
            <tr>
              <th class="col-xs-3">Item</th>
              <th class="col xs-3">Quantity</th>
              <th class="col xs-6">Measure</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(ingredients, index) in recipes" v-bind:key="index">
              <td class="col-xs-3">{{ingredient.item}}</td>
              <td class="col-xs-3">{{ingredient.quantity}}</td>
              <td class="col-xs-3">{{ingredient.measure}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
     <div class="container col-xs-6">
      <h3>Description:</h3>
      <p> {{selected.description}}</p>
    </div>
  </div> 
</template>
<script>
import firebase from '@/components/firebase-init';

export default {
  name: 'RecipeDetail',
  firebase: {
    recipes: firebase.recipesRef
  },
    data () {
    return {
      }
    },
    props: ['selected']
}
</script>

<style>
#RecipeDetail {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
  border-style: double;
}
#recipeTitle {
  text-align: center
}
</style>
