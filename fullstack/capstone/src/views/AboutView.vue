<template>
<div>
  <div class="about">
    <div class="container-fluid">
      <div class="heading">
    <h1 class="h-01">AboutUs</h1>
    </div>
    <div class="hero">
      <img src="https://i.postimg.cc/MGcKZGDZ/Screenshot-2023-09-08-121228-removebg-preview.png" alt="" class="hero-img">
    <h2 class="hero-text">PC Wizard is your trusted destination for all things tech. We specialize in providing top-quality PCs, laptops, and cutting-edge accessories to meet your computing needs. With a commitment to excellence, we offer a wide range of products, from high-performance gaming rigs to sleek and powerful laptops, along with an array of accessories to enhance your tech experience. Backed by our expertise and exceptional customer service, PC Wizard ensures you stay at the forefront of technology. Discover the wizardry of innovation with us.</h2>
    </div>
    <div class="card-cont">
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
  </div>
  <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue"
export default {
  components: {
    Footer,
  }
  
}
</script>

<style scoped>

.about {
  height: 90vh;
}

.card {
  width: 18%;
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

@media (max-width: 300px) {

  .about {
    height: 100%!important;;
    text-align: center!important;;
  }
  .hero-text {
    position: relative!important;;
    padding: 0!important;;
    margin: 0!important;;
    text-align: center!important;;
  }
  .hero-img {
    width: 30%!important;;
    height: 4rem!important;;
    right: 0!important;;
    bottom: 31.4rem!important;;
    position: absolute fixed!important;;
  }
  .hero-text {
    left: 0!important;;
    top: 0!important;;
    width: 90%!important;;
    font-size: .8rem!important;;
    line-height: 1rem!important;;
    text-align: center!important;;
  }
  .h-01 {
  position: absolute!important;;
  right: 66%!important;;
  font-size: 1rem!important;;
  bottom: 78%!important;;
  color: white!important;;
}

  .card-cont {
    position: relative!important;;
    top: 50%!important;;
  }
  .card {
    width: 40%!important;
    height: 26vh!important;;
    right: 0!important;;
    top: 0!important;;
    margin: 2rem auto!important;;
  }
  .card .img {
    width: 60px!important;;
    height: 60px!important;;
    margin: auto!important;;
    margin-top: 10px!important;;
  }
  .card span {
    font-size: 1rem!important;;
    padding-top: 5px!important;;
  }
  .card .job {
    font-size: 0.8rem!important;;
    padding-top: 3px!important;;
    padding-bottom: 1rem!important;;
  }
  .container-fluid {
    padding-top: 10rem!important;;
  }
  .hero {
    position: relative!important;;
    left: 4%!important;;
    padding: 0!important;;
    margin: 0!important;;
    text-align: center!important;
  }
}
@media (width < 710px) {

  .about {
    height: 100%!important;;
    text-align: center!important;;
  }
  .hero-text {
    position: relative!important;;
    padding: 0!important;;
    margin: 0!important;;
    text-align: center!important;;
  }
  .hero-img {
    width: 10%!important;;
    height: 4rem!important;;
    right: 0!important;;
    bottom: 34rem!important;;
    position: absolute fixed!important;;
  }
  .hero-text {
    left: 0!important;
    top: 0!important;
    width: 90%!important;
    font-size: .8rem!important;
    line-height: 1rem!important;
    text-align: center!important;
  }
  .h-01 {
  position: absolute!important;
  right: 66%!important;
  font-size: 1rem!important;
  bottom: 78%!important;
  color: white!important;
}

  .card-cont {
    position: relative!important;
    top: 50%!important;
  }
  .card {
    width: 24%!important;
    height: 26vh!important;
    right: 0!important;
    top: 0!important;
    margin: 2rem auto!important;
  }
  .card .img {
    width: 60px!important;
    height: 60px!important;
    margin: auto!important;
    margin-top: 10px!important;
  }
  .card span {
    font-size: 1rem!important;
    padding-top: 5px!important;
  }
  .card .job {
    font-size: 0.8rem!important;
    padding-top: 3px!important;
    padding-bottom: 1rem!important;
  }
  .container-fluid {
    padding-top: 10rem!important;
  }
  .hero {
    position: relative!important;
    left: 0%!important;
    padding: 0!important;
    margin: 0!important;
    text-align: center!important;
  }
}
</style>