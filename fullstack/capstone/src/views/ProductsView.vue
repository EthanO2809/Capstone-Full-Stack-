<template>
  <div class="prods">
<div class="back">
</div>
    
    <div class="container">
      <h2 class="class-display2 products fs-1 mb-5 text-white">Products</h2>
      <div v-if="products">
        <div v-for="productItem in products" :key="productItem.prodID">
          <center>
            <div
              class="hero"
              @mouseover="hoveredProduct = productItem"
              @mouseleave="hoveredProduct = null"
            >
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
            </div>
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
</script>

<style scoped>



.form-control {
  width: 16rem;
}

.hero {
  position: relative;
  width: 80vw;
  height: 60vh;
  margin-bottom: 4rem;
  opacity: 0;
  transform: translateX(-50px);
  animation: fadeInFromLeft 1s ease-in-out forwards;
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
</style>
