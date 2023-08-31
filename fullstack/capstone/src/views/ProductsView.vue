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
<div class="card"
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

.prods{
  background-color: #312e81;
}

.form-control {
  width: 16rem;
}

.card {
  width: 300px;
  height: 420px;
  background: #FFC947;
  margin-bottom: 2rem;
  color: #073b4c;
  font-weight: 600;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: left;
  position: relative;
  transition: all .5s ease;
}

.card::before {
  content: "NEW";
  position: absolute;
  width: 75px;
  height: 75px;
  top: 35%;
  right: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #ef476f;
  color: aliceblue;
  font-weight: 800;
  transition: all .5s ease;
}

.card__image {
  width: initial;
  height: 200px;
  width: 270px;
  border-radius: 8px;
  background: rgb(6,214,160);
  background: linear-gradient(163deg, #06d6a0 18%, rgba(17,138,178,1) 79%);
  transition: all .5s ease;
}

.title {
  font-weight: 800;
  font-size: 1.4em;
}

.card__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  gap: 10px;
}

.card:hover {
  border-top-left-radius: 35px;
  box-shadow: 5px 5px 0px 0px #06d6a0, 10px 10px 0px 0px #118ab2, 15px 15px 0px 0px #06d6a0, 5px 5px 15px 5px rgba(0,0,0,0);
}

.card:hover .card__image {
  border-top-left-radius: 25px;
}

.card:hover::before {
  transform: scale(1.3) rotate(-30deg);
}

.view {
  width: 7rem;
  height: 2rem;
  padding: 0.1rem;
}

button {
  border-radius: 5px;
}

button {
  width: 7rem !important;
  text-align: center;
  height: 34px;
  gap: 12px;
  font-size: 0.8rem;
  cursor: pointer;
  border: 3px solid rgb(134, 134, 134);
  background-color: rgb(200, 200, 200);
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.137);
}

.view {
  display: flex;
  align-items: center;
  justify-content: center;
}

.arrow path {
  fill: rgb(19, 19, 19);
}

button:hover .arrow {
  animation: slide-in-left 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.hover-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 18px;
  opacity: 1;
  transition: opacity 0.3s;
}

.card .hover-overlay svg {
  fill: white;
}

@keyframes slide-in-left {
  0% {
    transform: translateX(-8px);
    opacity: 0;
  }

  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}

button:active {
  transform: scale(0.97);
}

.search {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
