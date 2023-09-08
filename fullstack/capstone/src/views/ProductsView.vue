<template>
  <div class="prods">
    <div class="container">
      <h2 class="class-display2 products mb-5 text-white">
        Welcome to our cutting-edge tech products page, where innovation meets
        your needs!
      </h2>
      <div
        class="hero"
        @mouseover="hoveredProduct = productItem"
        @mouseleave="hoveredProduct = null"
        v-if="products"
      >
        <div
          v-for="productItem in products"
          :key="productItem.prodID"
          class="product-card"
        >
          <div class="centered">
            <img
              :src="
                hoveredProduct === productItem
                  ? productItem.hoveredProdUrl
                  : productItem.prodUrl
              "
              class="hero-img"
              :alt="productItem.prodName"
            />
            <h2 class="hero-text">{{ productItem.prodName }}</h2>
            <h3 class="hero-text2">{{ productItem.prodDesc }}</h3>
            <h4 class="hero-text3">
              <span>R</span> {{ productItem.Price }} <span>,00</span>
            </h4>
            <button @click="addToCart(productItem)">
              <div class="svg-wrapper-1">
                <div class="svg-wrapper">
                  <svg
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
              <span>Send to Cart</span>
            </button>
          </div>
        </div>
      </div>
      <div v-else class="row">
        <Spinner />
      </div>
    </div>
  </div>
</template>

<script>
import Spinner from "../components/Spinner.vue";

export default {
  components: {
    Spinner,
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  methods: {
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
    };
  },
};

function handleScrollAnimation() {
  const productCards = document.querySelectorAll(".product-card");

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
  height: 100%;
  width: 100%;
  padding-bottom: 24rem;
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

.hero {
  position: relative;
  width: 80vw;
  height: 100%;
  margin-bottom: 4rem;
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
  left: 30%;
  width: 20rem;
  margin-top: 3rem;
}

.hero-content {
  display: flex;
  align-items: center;
}

.hero-text {
  left: 13%;
  position: absolute;
  color: #fff;
  font-size: 2.2rem;
  font-style: italic;
  bottom: 60%;
}
.hero-text2 {
  left: 13%;
  position: absolute;
  color: #fff;
  font-size: 1.2rem;
  font-style: italic;
  text-align: left;
  bottom: 55%;
}
.hero-text3 {
  left: 13%;
  position: absolute;
  color: #fff;
  font-size: 1.8rem;
  font-style: italic;
  text-align: left;
  bottom: 44%;
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
  padding-top: 18rem;
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
button {
  font-family: inherit;
  position: absolute;
  height: 3rem;
  width: 11.6rem;
  bottom: 20%;
  font-size: 20px;
  background: royalblue;
  color: white;
  padding: 0.7em 1em;
  padding-left: 0.9em;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.2s;
}

button span {
  display: block;
  margin-left: 0.3em;
  transition: all 0.3s ease-in-out;
}

button svg {
  display: block;
  transform-origin: center center;
  transition: transform 0.3s ease-in-out;
}

button:hover .svg-wrapper {
  animation: fly-1 0.6s ease-in-out infinite alternate;
}

button:hover svg {
  transform: translateX(3.2em) rotate(45deg) scale(1.1);
}

button:hover span {
  transform: translateX(8em);
}

button:active {
  transform: scale(0.95);
}

@keyframes fly-1 {
  from {
    transform: translateY(0.1em);
  }

  to {
    transform: translateY(-0.2em);
  }
}

@import url("https://fonts.cdnfonts.com/css/sf-mono");
</style>
