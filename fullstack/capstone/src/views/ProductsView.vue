<template>
  <div class="prods">
    <div class="row mb-2">
      <form class="d-flex mb-5 mt-4 search" role="search">
        <input
          class="form-control"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn search" type="submit">Search</button>
      </form>
    </div>
    <div class="container">
      <h2 class="class-display2 products fs-1 mb-5 text-white">Products</h2>
      <div
        class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 justify-content-center gap-6"
        v-if="products"
      >
        <div
          class="col"
          v-for="productItem in products"
          :key="productItem.prodID"
        >
        <center>
<!-- <div class="card"
@mouseover="hoveredProduct = productItem"
            @mouseleave="hoveredProduct = null">
  <div class="card__image"><img
              :src="hoveredProduct === productItem ? productItem.hoveredProdUrl : productItem.prodUrl"
              class="card__image"
              :alt="productItem.prodName"
            /></div>
  <div class="card__content">
    <span class="title">{{ productItem.prodName }}</span>
    <p>{{ productItem.prodDesc }}</p>
    <p><span>Price: R </span>{{ productItem.Price }}<span>,00 </span></p>
  </div>
</div> -->
<div class="hero">
      <img src="https://i.postimg.cc/pVDbrSFG/Screenshot-2023-08-31-084124.png" alt="" class="heroimg">
      <h2 class="hero-text">Your Ultimate Destination for <br> Cutting-Edge Tech Solutions

      </h2>
    </div>
      <button class="cta">
    <router-link to="/products" class="text-decoration-none"><span class="hover-underline-animation"> Shop now </span></router-link>
    <svg viewBox="0 0 46 16" height="20" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
        <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
    </svg>
</button>
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

.prods{
  background-color: #312e81;
}

.form-control {
  width: 16rem;
}

.hero {
  position: relative;
}

.cta {
  position: absolute;
  top: 80%;
  left: 14%;
  transform: translate(-50%, -50%);
  border: none;
  background: none;
}

.cta span {
  padding-bottom: 7px;
  letter-spacing: 4px;
  font-size: 2rem;
  padding-right: 15px;
  text-transform: uppercase;
}

.cta svg {
  transform: translateX(-8px);
  transition: all 0.3s ease;
}

.cta:hover svg {
  transform: translateX(0);
}

.cta:active svg {
  transform: scale(0.9);
}

.hover-underline-animation {
  position: relative;
  color: rgb(255, 255, 255);
  padding-bottom: 20px;
}

.hover-underline-animation:after {
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #ffffff;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.cta:hover .hover-underline-animation:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

#arrow-horizontal {
  width: 3rem;
  margin-bottom: 1rem;
  fill: white;
}

.heroimg {
  position: relative;
  border-radius: 1rem;
  right: 30%;
  object-fit: cover;
  clip-path: polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%);
}

.hero-content {
  display: flex;
  align-items: center;
}

.hero-text {
  left: 32%;
  position: absolute;
  color: #fff;
  font-size: 1rem; 
  bottom: 50%;
}

.search {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
