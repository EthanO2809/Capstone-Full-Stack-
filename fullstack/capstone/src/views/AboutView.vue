<template>
  <div class="about">
    <div class="container-fluid">
      <div class="heading">
    <h1 class="h-01">AboutUs</h1>
    </div>
    
    <div class="hero">
      <img src="https://i.postimg.cc/wjFvCrjG/Screenshot-2023-08-31-154203.png" alt="" class="hero-img">
    <h2 class="hero-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum facere ratione veritatis officia eaque quidem necessitatibus ad recusandae nihil tempore, repellat, doloribus, obcaecati rerum similique consectetur exercitationem. Quos, ratione facilis!</h2>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>

.about {
  background-color: #312e81 !important;
  padding-top: 10rem;
  padding-bottom: 4rem;
}

.h-01 {
  position: relative;
  right: 35%;
  color: white;
}

.hero-img{
  position: relative;
  right: 27%;
  object-fit: cover;
  clip-path: polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%);
}

.hero-text {
  left: 42%;
  position: absolute;
  color: #fff;
  font-size: 2rem; 
  bottom: 20%;
}

.hero {
  position: relative;
}

</style>