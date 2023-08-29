<template>
  <div>
    <NavBar/>
    <router-view/>
    <Footer/>
 </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
export default {
  components: {
    NavBar,
    Footer
  }
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
}

.login{
  margin-right: -29rem;
}

.footer{
  background-color: black;
}
</style>
