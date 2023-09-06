<template>
  <div class="hero" @mouseover="hoveredProduct = productItem" @mouseleave="hoveredProduct = null">
    <div v-for="productItem in filteredProducts" :key="productItem.prodID" class="product-card">
      <center>
        <img
          :src="hoveredProduct === productItem ? productItem.hoveredProdUrl : productItem.prodUrl"
          class="hero-img"
          :alt="productItem.prodName"
        />
        <h2 class="hero-text">{{ productItem.prodName }}</h2>
        <h3 class="hero-text2">{{ productItem.prodDesc }}</h3>
        <h4 class="hero-text3">
          <span>R</span> {{ productItem.Price }} <span>,00</span>
        </h4>
      </center>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hoveredProduct: null,
      products: [ /* Your list of products here */ ],
      filterCriteria: 'PC&Monitor', // Change this to your desired filter criteria
    };
  },
  computed: {
    filteredProducts() {
      // Filter the products based on the filterCriteria
      return this.products.filter(productItem => productItem.category === this.filterCriteria);
    },
  },
};
</script>

<style>
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
</style>
