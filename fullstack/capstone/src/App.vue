<template>
  <div>
    <NavBar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    NavBar,
    Footer
  },
};
</script>

<style>

/* Your existing styles */
#app{
  text-align: center;
  background-image: url("https://i.postimg.cc/XNwgnv9D/Nirvana-BG-2023-01-08-15-45-1.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  height: 100%;
}

.footer {
  background-color: black;
}
</style>
