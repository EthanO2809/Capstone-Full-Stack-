<template>
  <div class="home prods">
    <div class="hero">
      <h2 class="categories">Categories</h2>
      <div class="container">
      <h2 class="class-display2 fs-1 mb-5">Products</h2>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 justify-content-center gap-6" v-if="products">
        <div class="col" v-for="productItem in products" :key="productItem.prodID">
        <div
            class="card"
            style="width: 18rem"
            @mouseover="hoveredProduct = productItem"
            @mouseleave="hoveredProduct = null"
          >
            <img
              :src="hoveredProduct === productItem ? productItem.hoveredProdUrl : productItem.prodUrl"
              class="card-img-top"
              :alt="productItem.prodName"
            />
          <div class="card-body">
            <h5 class="card-title">{{ productItem.prodName }} <br/></h5>
            <center>
            <button class="view" @click="viewProduct(productItem.prodID)">
                <span>View More</span>
                <svg class="arrow" viewBox="0 0 448 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg>
            </button>
        </center>
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
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products;
    }
  }, 
  methods: {
    viewProduct(prodID) {
        const chosenProd = this.products.find((product)=>product.prodID === prodID)
        this.$store.commit("setSingleProduct", chosenProd)
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
.home{
  background-image: url("https://i.postimg.cc/ZndZQK6H/enlarge-360-F-611360710-Zqi-CVHVk0-Vu8-WOBeo-YDXkeiy-Ihf-X4-B4-F.jpg");
  background-size: cover;
  height: 100vh;
  background-attachment: fixed;
}
.categories{
  margin-top: 6.5rem;
  color: gold;
}
.card-img-top {
  aspect-ratio: 1/1;
}
.card {
  margin-bottom: 2rem;
  position: relative;
}

.card:hover .hover-overlay {
  opacity: 1;
}
</style>
