<template>
  <div>
    <div class="prods">
      <div class="container">
        <h2 class="class-display2 products mb-5 text-white">
          Welcome to our cutting-edge tech products page, where innovation meets
          your needs!
        </h2>
        <div class="filter">
          <label for="category-filter" class="text-white"
            >Filter by Category:
          </label>
          <select
            v-model="selectedCategory"
            class="options text-center"
            id="category-filter"
          >
            <option value="" class="options">All Categories</option>

            <option v-for="category in uniqueCategories" :key="category">
              {{ category }}
            </option>
          </select>
        </div>
        <div class="pb">
          <button class="pps">
            <a href="#productS" class="text-white"
              >Click To View Our Products ⬇️</a
            >
          </button>
        </div>
        <div class="side-kick">
          <div
            class="hero"
            id="productS"
            @mouseover="hoveredProduct = productItem"
            @mouseleave="hoveredProduct = null"
            v-if="filteredProducts"
          >
            <div
              v-for="productItem in filteredProducts"
              :key="productItem.prodID"
              class="dfghjk"
            >
              <div class="centered">
                <div class="text-info">
                  <h2 class="hero-text">{{ productItem.prodName }}</h2>
                  <h3 class="hero-text2">{{ productItem.prodDesc }}</h3>
                  <h3 class="hero-text4">{{ productItem.Category }}</h3>
                  <h4 class="hero-text3">
                    <span>R</span> {{ productItem.Price }} <span>,00</span>
                  </h4>
                  <div class="star-button">
                    <button class="btnn" @click="addToCart(productItem)">
                      Send To Cart
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
                    <button class="btnn" @click="viewProduct(productItem.prodID)">
                      <span>View Product</span>
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
                  </div>
                </div>
                <div class="kick-img">
                  <img
                    :src="
                      hoveredProduct === productItem
                        ? productItem.hoveredProdUrl
                        : productItem.prodUrl
                    "
                    class="hero-img"
                    :alt="productItem.prodName"
                  />
                </div>
              </div>
            </div>
          </div>
          <div v-else class="row">
            <Spinner />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import Spinner from "../components/Spinner.vue";
export default {
  components: {
    Spinner,
    Footer,
  },
  computed: {
    products() {
      return this.$store.state.products || []; // Default to an empty array if products is null or undefined
    },

    uniqueCategories() {
      if (!this.products) {
        return []; // Return an empty array if products is null or undefined
      }

      return [...new Set(this.products.map((product) => product.Category))];
    },

    filteredProducts() {
      if (!this.selectedCategory) {
        return this.products; // No category selected, return all products
      } else {
        // Filter products by selected category
        return this.products.filter(
          (product) => product.Category === this.selectedCategory
        );
      }
    },
  },
  methods: {
     viewProduct(prodID) {
        const chosenProd = this.products.find((product)=>product.prodID === prodID)
        this.$store.commit("setSingleProduct", chosenProd)
      this.$router.push({ name: "ViewMore", params: { prodID: prodID } });
    },
    addToCart(productItem) {
      this.$store.dispatch("addToCart", productItem);
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
  },
  data() {
    return {
      hoveredProduct: null,
      selectedCategory: "",
    };
  },
};

function handleScrollAnimation() {
  const productCards = document.querySelectorAll(".side-kick");

  productCards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;
    const cardBottom = card.getBoundingClientRect().bottom;

    if (cardTop < window.innerHeight && cardBottom >= 0) {
      card.classList.add("in-view");
    } else {
      card.classList.remove("in-view");
    }
  });
}

window.addEventListener("load", handleScrollAnimation);

window.addEventListener("scroll", handleScrollAnimation);
</script>

<style scoped>
.prods {
  min-height: 100%;
  width: 100%;
  padding-bottom: 4rem;
  padding-top: 14rem;
}

.text-info {
  width: 80%;
  height: 23rem;
  padding-top: 4rem;
  display: flex;
  justify-content: start;
  align-items: start;
  padding-left: 6rem;
  flex-direction: column;
}

.star-button{
  width: 60%;
  height: 30%;
  display: flex;
  justify-content: end;
}

.kick-img{
  width: 40%;
  height: 23rem;
  display: flex;
  justify-content: start;
  align-items: start;
}

.side-kick {
  width: 100%;
  height: 100%;
  padding-top: 8rem;
}
.options {
  border-radius: 4px;
  margin-left: 1rem;
  width: 8rem;
}

.centered {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.bck {
  position: absolute;
  right: 0%;
  width: 100%;
  height: 100%;
  position: fixed;
  background-repeat: no-repeat !important;
  background-color: black !important;
}

.form-control {
  width: 16rem;
}

a {
  text-decoration: none;
}

.pb {
  padding-top: 4rem;
  padding-bottom: 2rem;
  justify-content: center;
  align-items: center;
  display: flex;
}

.pps {
  border-radius: 18px;
  font-weight: 700;
  height: 2.6rem;
  width: 24rem;
  color: white !important;
  font-size: 1.4rem;
  border: 0px;
  backdrop-filter: blur(8px);
  background: rgba(255, 255, 255, 0);
}

.hero {
  position: relative;
  width: 80vw;
  height: 100%;
  padding-bottom: 0rem !important;
  padding-top: 0rem !important;
  opacity: 0;
  transform: translateX(-50px);
  animation: fadeInFromLeft 1s ease-in-out forwards;
}

.product-card {
  opacity: 0;
  transform: translateY(400px);
  transition: opacity 1.5s ease-in-out, transform 1.5s ease-in-out;
}

.product-card.in-view {
  opacity: 2;
  transform: translateY(1);
}

@keyframes fadeInFromLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.hero-img {
  position: relative;
  border-radius: 1rem;
  /* left: 30%; */
  width: 20rem;
  margin-top: 3rem;
}

.hero-content {
  display: flex;
  align-items: center;
}

.hero-text {
  /* left: 13%; */
  /* position: absolute; */
  color: #fff;
  font-size: 2rem;
  font-weight: 700;
  font-style: italic;
  /* bottom: 74%; */
}
.hero-text2 {
  /* left: 13%; */
  /* position: absolute; */
  color: #fff;
  font-size: 1.2rem;
  font-style: italic;
  text-align: left;
  /* bottom: 68%; */
}
.hero-text3 {
  /* left: 13%; */
  /* position: absolute; */
  color: #fff;
  font-size: 1.8rem;
  font-style: italic;
  text-align: left;
  /* bottom: 58%; */
}
.hero-text4 {
  /* left: 13%; */
  /* position: absolute; */
  color: #fff;
  font-size: 1.8rem;
  font-style: italic;
  text-align: left;
  /* bottom: 48%; */
}

.search {
  display: flex;
  justify-content: center;
  align-items: center;
}
.row {
  margin-right: 0;
}

.products {
  position: relative;
  /* padding-top: 12rem; */
  left: 9%;
  margin: 0;
  letter-spacing: -0.05em;
  width: 80%;
  font-size: 4.8rem !important;
  font-weight: 500;
  line-height: 95%;
  translate: none;
  rotate: none;
  scale: none;
  opacity: 1;
  transform: translate(0px, 0px);
  font-family: "Nunito Sans", sans-serif;
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

@import url("https://fonts.cdnfonts.com/css/sf-mono");
</style>
