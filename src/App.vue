<template>
  <div id="app">
    <div>
    <b-navbar id="navbar" toggleable="md" type="dark" variant="info">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="#/">Recipe Box</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#/new">Add a Recipe</b-nav-item>
          <b-nav-item href="#/about">About</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
      </b-navbar>
      </div>
      <div class="page-header">
        <img src="./assets/scroll.png">  
        <h1 class="recipebox-title">Recipe Box</h1>

      </div>
  <router-view/>
  </div>

    
</template>


<script>

export default {
  name: 'app',
  }
   
</script>

<style scoped>

body {
  margin: 0;
  
  
}


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  }

#navbar {
   background-color: #6b7a8f !important;
    font-family: 'Calligraffitti', cursive;
}
.recipebox-title{
    font-family: 'Calligraffitti', cursive;
  
}
img{
  height:70px;
  
}
</style>
