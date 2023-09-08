<template>
  <div class="about">
    <div class="container-fluid">
      <div class="heading">
    <h1 class="h-01">AboutUs</h1>
    </div>
    <div class="hero">
      <img src="https://i.postimg.cc/MGcKZGDZ/Screenshot-2023-09-08-121228-removebg-preview.png" alt="" class="hero-img">
    <h2 class="hero-text">PC Wizard is your trusted destination for all things tech. We specialize in providing top-quality PCs, laptops, and cutting-edge accessories to meet your computing needs. With a commitment to excellence, we offer a wide range of products, from high-performance gaming rigs to sleek and powerful laptops, along with an array of accessories to enhance your tech experience. Backed by our expertise and exceptional customer service, PC Wizard ensures you stay at the forefront of technology. Discover the wizardry of innovation with us.</h2>
    </div>
    <div class="card">
  <div class="card-border-top">
  </div>
  <div class="img">
    </div>
  <span> Ethan Oliver</span>
  <p class="job"> Founder & Sole Owner</p>
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
  height: 90vh;
}

.card {
  width: 200px;
  height: 264px;
  background-image: linear-gradient(144deg,#8608b4, #492fed 60%,#bd6fda);
  border: none;
  border-radius: 22px;
  padding-top: 10px;
  position: relative;
  right: 30%;
  margin: auto;
  font-family: inherit;
}

.card span {
  font-weight: 600;
  color: white;
  text-align: center;
  display: block;
  padding-top: 10px;
  font-size: 1.3em;
}

.card .job {
  font-weight: 400;
  color: white;
  display: block;
  text-align: center;
  padding-top: 5px;
  font-size: 1em;
  padding-bottom: 3rem;
}

.card .img {
  width: 100px;
  height: 100px;
  background-size: cover;
  background-image: url("https://i.postimg.cc/qR3hcD02/IMG-9863.jpg");
  border-radius: 20px;
  margin: auto;
  margin-top: 20px;
}

.h-01 {
  position: absolute;
  right: 75%;
  bottom: 70%;
  color: white;
}

.hero-img{
  position: fixed;
  width: 10rem;
  right: 65%;
  bottom: 60%;
}

.hero-text {
  left: 40%;
  width: 50%;
  position: absolute;
  color: #fff;
  font-size: 1.4rem;
}

.hero {
  position: relative;
}

.img-01 {
  width: 6.3rem;
  height: 7rem;
  object-fit: cover;
}

.container-fluid {
  padding-top: 18rem;
}
</style>