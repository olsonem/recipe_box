<template>
  <div id="RecipeDetail" class="col-md-10 col-md-offset-1 container recipe-card">
    <div class="recipeTitle">
      <h2>{{selected.title}}</h2>
      <hr>
    </div>
    <div class="row">
      <div class="col-md-6">
        <h3 class="recipeTitle">Ingredients</h3>
          <b-table striped hover :items="selected.ingredients"></b-table>
      </div>
      <div class="col-md-6">
        <h3 class="recipeTitle">Description:</h3>
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
  border-style: double;
  margin-top: 30px
}
.recipeTitle {
  text-align: center;
  font-family: 'Calligraffitti', cursive;
  padding: 20px;
  
}
</style>
