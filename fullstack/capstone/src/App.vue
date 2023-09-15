<template>
  <div>
    <NavBar />
    <router-view />
    <!-- <Footer /> -->
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
// import Footer from "./components/Footer.vue";
export default {
  components: {
    NavBar,
    // Footer
  },
  created(){
    const data = JSON.parse(localStorage.getItem("data"))
    if(data){
      // this.$store.dispatch("checkCookie")
      this.$store.commit("setUser", data)
    }
  }
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


.modal{
  z-index:5 !important;
}
.modal-backdrop{
  z-index:-5 !important;
}
.modal-dialog{
    z-index:5 !important;
    margin-top:14rem !important;
}
.modal-content{
    z-index:5 !important;
}
.modal-open{
    z-index:5 !important;

}
/* .show{
    z-index:5 !important;
} */
.footer {
  background-color: black;
}
</style>
