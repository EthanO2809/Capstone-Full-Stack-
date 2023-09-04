<template>
  <div class="prods">
<!-- <div class="back">
</div> -->
    
    <div class="container">
      <!-- <img src="" alt=""> -->
      <h2 class="class-display2 products mb-5 text-white">
Welcome to our cutting-edge tech products page, where innovation meets your needs!</h2>
      <div class="hero"
              @mouseover="hoveredProduct = productItem"
              @mouseleave="hoveredProduct = null" v-if="products">
        <div v-for="productItem in products" :key="productItem.prodID"  class="product-card">
          <center>
              <img
                :src="
                  hoveredProduct === productItem
                    ? productItem.hoveredProdUrl
                    : productItem.prodUrl
                "
                class="hero-img"
                :alt="productItem.prodName"
              />
              <h2 class="hero-text">
                {{ productItem.prodName }}
              </h2>
              <h3 class="hero-text2">
                {{ productItem.prodDesc }}
              </h3>
              <h4 class="hero-text3">
                <span>R</span> {{ productItem.Price }} <span>,00</span>
              </h4>
          </center>
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
    viewProduct(prodID) {
      const chosenProd = this.products.find(
        (product) => product.prodID === prodID
      );
      this.$store.commit("setSingleProduct", chosenProd);
      this.$router.push({ name: "ViewMore", params: { prodID: prodID } });
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
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        const cardBottom = card.getBoundingClientRect().bottom;

        if (cardTop < window.innerHeight && cardBottom >= 0) {
            card.classList.add('in-view');
        } else {
            card.classList.remove('in-view');
        }
    });
}

window.addEventListener('load', handleScrollAnimation);

window.addEventListener('scroll', handleScrollAnimation);
</script>

<style scoped>
.prods {
  height: 100%;
  width: 100%;
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
.row{
  margin-right:  0;

}

.products {
  position: relative;
  padding-top: 18rem;
  left: 9%;
  margin: 0;
  letter-spacing: -.05em;
  width: 80%;
  font-size: 4.8rem !important;
  font-weight: 500;
  line-height: 95%;
  translate: none;
  rotate: none;
  scale: none;
  opacity: 1;
  transform: translate(0px, 0px);
  font-family: 'Nunito Sans', sans-serif;
}
@import url('https://fonts.cdnfonts.com/css/sf-mono');
</style>
