<template>
  <div id="app">
    <b-jumbotron bg-variant="info" text-variant="white" border-variant="dark" style="padding: 4rem 2rem 0rem 2rem;">
      <template #header>DataBase Query</template>
      <template #lead>
        This is a simple mock DataBase page, has mock data not related to the query.
      </template>
    <hr class="my-4">
  </b-jumbotron>
    <Landing-page></Landing-page>
  </div>
</template>

<script>
import LandingPage from '@/components/LandingPage.vue'

export default {
  name: 'App',
  components: {
    LandingPage,
    // NavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
