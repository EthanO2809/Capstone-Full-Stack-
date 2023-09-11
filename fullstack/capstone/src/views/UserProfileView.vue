<template>
<div class="container">
        <div class="img-container">
            
        </div>
</div>
</template>

<script>
    export default {
        computed:{
            user(){
                return this.$store.state.user;
            }
        }
    }
</script>

<style scoped>
.container{
    height:100vh;
}

h1 {
    padding-top:16rem;
}
</style>