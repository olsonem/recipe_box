<template>
  <div id="app">
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
  
};


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: #DCC7AA;
  
};
#navbar {
  background-color: #f7882f
}

</style>
