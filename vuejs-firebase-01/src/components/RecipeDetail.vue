<template>
  <div id="RecipeDetail" class="container">
      <h1>Recipe Detail</h1> 
        <p>Title:{{selected.title}}</p>
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
#recipes {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
