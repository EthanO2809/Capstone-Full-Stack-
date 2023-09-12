<template>
<div>
<div class="container">
        <h1 class="text-center text-white">
            User Profile
        </h1>
        <div class="img-container">
            <img
              :src="user.UserUrl"
              class="img-fluid"
              :alt="user.UserName"
            />
        </div>
        <div class="content">
            <h1>User Name: {{ user.UserName }}</h1>
            <p>User Age: {{ user.UserAge }}</p>
            <p>User Role: {{ user.UserRole }}</p>
            <hr class="hr-02">
        </div>
</div>
<Footer />
</div>
</template>

<script>
import Footer from "../components/Footer.vue"
    export default {
        components: {
            Footer,
        },
        computed:{
            user(){
                return this.$store.state.user;
            }
        }
    }
</script>

<style scoped>
.container{
    height: 90vh;
}

h1 {
    padding-top:9rem;
}
.img-fluid {
    width: 14rem;
    position: absolute;
    padding-top: 8rem;
    right: 70%;
    bottom: 36%;
    border-radius: 0px 0px 10px 10px;
}

.content {
    color: white !important;
    position: relative;
    bottom: 10%;
    text-align: left;
    left: 30%;
    font-size: 2.2rem;
    width: 70%;
    height: 50%;
}

.hr-02 {
    width: 40%;
    border: solid 2px white;
}
</style>