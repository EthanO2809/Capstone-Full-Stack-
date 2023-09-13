<template>
<div>
  <div class="container" v-if="products">
    <h2 class="text-center text-white">
      Single Product
    </h2>
    <div class="product">
    <div class="text-content">
      <h2 class="hero-text">{{ products.prodName }}</h2>
      <h3 class="hero-text2">{{ products.prodDesc }}</h3>
      <h3 class="hero-text4">{{ products.Category }}</h3>
      <h4 class="hero-text3">
      <span>R</span> {{ products.Price }} <span>,00</span>
      </h4>
      <router-link to="/products">
      <button class="btnn">
        <span>Go Back</span>
                      <div class="star-1">
                        <svg
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 784.11 815.53"
                          style="
                            shape-rendering: geometricPrecision;
                            text-rendering: geometricPrecision;
                            image-rendering: optimizeQuality;
                            fill-rule: evenodd;
                            clip-rule: evenodd;
                          "
                          version="1.1"
                          xml:space="preserve"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <defs></defs>
                          <g id="Layer_x0020_1">
                            <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                            <path
                              d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                              class="fil0"
                            ></path>
                          </g>
                        </svg>
                      </div>
                      <div class="star-2">
                        <svg
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 784.11 815.53"
                          style="
                            shape-rendering: geometricPrecision;
                            text-rendering: geometricPrecision;
                            image-rendering: optimizeQuality;
                            fill-rule: evenodd;
                            clip-rule: evenodd;
                          "
                          version="1.1"
                          xml:space="preserve"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <defs></defs>
                          <g id="Layer_x0020_1">
                            <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                            <path
                              d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                              class="fil0"
                            ></path>
                          </g>
                        </svg>
                      </div>
                      <div class="star-3">
                        <svg
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 784.11 815.53"
                          style="
                            shape-rendering: geometricPrecision;
                            text-rendering: geometricPrecision;
                            image-rendering: optimizeQuality;
                            fill-rule: evenodd;
                            clip-rule: evenodd;
                          "
                          version="1.1"
                          xml:space="preserve"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <defs></defs>
                          <g id="Layer_x0020_1">
                            <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                            <path
                              d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                              class="fil0"
                            ></path>
                          </g>
                        </svg>
                      </div>
                      <div class="star-4">
                        <svg
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 784.11 815.53"
                          style="
                            shape-rendering: geometricPrecision;
                            text-rendering: geometricPrecision;
                            image-rendering: optimizeQuality;
                            fill-rule: evenodd;
                            clip-rule: evenodd;
                          "
                          version="1.1"
                          xml:space="preserve"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <defs></defs>
                          <g id="Layer_x0020_1">
                            <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                            <path
                              d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                              class="fil0"
                            ></path>
                          </g>
                        </svg>
                      </div>
                      <div class="star-5">
                        <svg
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 784.11 815.53"
                          style="
                            shape-rendering: geometricPrecision;
                            text-rendering: geometricPrecision;
                            image-rendering: optimizeQuality;
                            fill-rule: evenodd;
                            clip-rule: evenodd;
                          "
                          version="1.1"
                          xml:space="preserve"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <defs></defs>
                          <g id="Layer_x0020_1">
                            <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                            <path
                              d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                              class="fil0"
                            ></path>
                          </g>
                        </svg>
                      </div>
                      <div class="star-6">
                        <svg
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 784.11 815.53"
                          style="
                            shape-rendering: geometricPrecision;
                            text-rendering: geometricPrecision;
                            image-rendering: optimizeQuality;
                            fill-rule: evenodd;
                            clip-rule: evenodd;
                          "
                          version="1.1"
                          xml:space="preserve"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <defs></defs>
                          <g id="Layer_x0020_1">
                            <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                            <path
                              d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                              class="fil0"
                            ></path>
                          </g>
                        </svg>
                      </div>
                    </button>
      </router-link>
    </div>
    <div class="img-content">
      <img :src="products.prodUrl" alt="" class="img-01">
    </div>
    </div>
    <div v-if="loading" class="row">
      <Spinner />
    </div>
  </div>
  <div class="else" v-else>
    <h1>Please Reload The Screen</h1>
    <Spinner/>
  </div>
  <Footer />
  </div>
</template>

<script>
import Spinner from '../components/Spinner.vue'
import Footer from '../components/Footer.vue'
export default {
  components:{
    Spinner,
    Footer,
  },
  computed: {
    products() {
      return this.$store.state.chosenProduct;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
  },
};
</script>

<style scoped>
.container {
  padding-top: 10rem;
  height: 100vh;
}

.ff {
  margin-top: 24rem;
}

.btnn {
  position: relative;
  left: 20%;
  top: 22%;
  height: 4rem;
  padding: 12px 35px;
  background: #000000;
  font-size: 17px;
  font-weight: 500;
  color: #ffffff;
  border: 3px solid #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 0 #fec1958c;
  transition: all 0.3s ease-in-out;
}

.star-1 {
  position: absolute;
  top: 20%;
  left: 20%;
  width: 25px;
  height: auto;
  filter: drop-shadow(0 0 0 #fffdef);
  z-index: -5;
  transition: all 1s cubic-bezier(0.05, 0.83, 0.43, 0.96);
}

.star-2 {
  position: absolute;
  top: 45%;
  left: 45%;
  width: 15px;
  height: auto;
  filter: drop-shadow(0 0 0 #fffdef);
  z-index: -5;
  transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);
}

.star-3 {
  position: absolute;
  top: 40%;
  left: 40%;
  width: 5px;
  height: auto;
  filter: drop-shadow(0 0 0 #fffdef);
  z-index: -5;
  transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);
}

.star-4 {
  position: absolute;
  top: 20%;
  left: 40%;
  width: 8px;
  height: auto;
  filter: drop-shadow(0 0 0 #fffdef);
  z-index: -5;
  transition: all 0.8s cubic-bezier(0, 0.4, 0, 1.01);
}

.star-5 {
  position: absolute;
  top: 25%;
  left: 45%;
  width: 15px;
  height: auto;
  filter: drop-shadow(0 0 0 #fffdef);
  z-index: -5;
  transition: all 0.6s cubic-bezier(0, 0.4, 0, 1.01);
}

.star-6 {
  position: absolute;
  top: 5%;
  left: 50%;
  width: 5px;
  height: auto;
  filter: drop-shadow(0 0 0 #fffdef);
  z-index: -5;
  transition: all 0.8s ease;
}

.btnn:hover {
  background: transparent;
  color: #ffffff;
  box-shadow: 0 0 25px #ffffff;
}

.btnn:hover .star-1 {
  position: absolute;
  top: -80%;
  left: -30%;
  width: 25px;
  height: auto;
  filter: drop-shadow(0 0 10px #ffffff);
  z-index: 2;
}

.btnn:hover .star-2 {
  position: absolute;
  top: -25%;
  left: 10%;
  width: 15px;
  height: auto;
  filter: drop-shadow(0 0 10px #ffffff);
  z-index: 2;
}

.btnn:hover .star-3 {
  position: absolute;
  top: 55%;
  left: 25%;
  width: 5px;
  height: auto;
  filter: drop-shadow(0 0 10px #ffffff);
  z-index: 2;
}

.btnn:hover .star-4 {
  position: absolute;
  top: 30%;
  left: 80%;
  width: 8px;
  height: auto;
  filter: drop-shadow(0 0 10px #ffffff);
  z-index: 2;
}

.btnn:hover .star-5 {
  position: absolute;
  top: 25%;
  left: 115%;
  width: 15px;
  height: auto;
  filter: drop-shadow(0 0 10px #ffffff);
  z-index: 2;
}

.btnn:hover .star-6 {
  position: absolute;
  top: 5%;
  left: 60%;
  width: 5px;
  height: auto;
  filter: drop-shadow(0 0 10px #ffffff);
  z-index: 2;
}

.fil0 {
  fill: #ffffff;
}

.img {
  float: left;
}

.title{
  display: flex;
    justify-content: right;
    align-items: right;   
    text-align: left;
}

.product{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80%;
}

.text-content {
  padding-top: 6rem;
  padding-left: 8rem;
  height: 100%;
  width: 60%;
}

.img-content {
  padding-top: 4rem;
  height: 100%;
  width: 40%;
}

.img-01 {
  width: 80%;
  height: 80%;
}

.hero-text {
  color: #fff;
  font-size: 2rem;
  font-weight: 700;
  font-style: italic;
  text-align: left;
}
.hero-text2 {
  color: #fff;
  font-size: 1.2rem;
  font-style: italic;
  text-align: left;
}
.hero-text3 {
  color: #fff;
  font-size: 1.8rem;
  font-style: italic;
  text-align: left;
}
.hero-text4 {
  color: #fff;
  font-size: 1.8rem;
  font-style: italic;
  text-align: left;
}
</style>