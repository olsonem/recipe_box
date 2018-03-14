<template>
  <div id="RecipeDetail" class="container">
    <div id="recipeTitle">
      <h2>{{selected.title}}</h2>
      <hr>
    </div>
    <div class="row">
      <div class="container col-xs-9">
        <h3>Ingredients</h3>
          <b-table striped hover :items="selected.ingredients"></b-table>
      </div>
      <div class="col-xs-6">
        <h3>Description:</h3>
        <p> {{selected.description}}</p>
      </div>
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
  text-align: center;
  font-family: 'Calligraffitti', cursive;
}
</style>
