<template>
<div>
  <div class="main">
    <div class="cartpg">
      <h2 class="text-center">Your Cart</h2>
          <div
          class="eachitem" v-for="item in cart" :key="item.prodID">
          <div class="flec">
            <div class="img-cont">
              <img :src="item.prodUrl" class="hero-img" alt="" />
            </div>
            <div class="info">
            <p class="prodname">{{ item.prodName }}</p>
            <p class="proddesc">{{ item.prodDesc }}</p>
            <p class="prodcat">{{ item.Category }}</p>
            <p class="price">Price: R{{ item.Price }}</p>
            <div class="buttons">
            <button @click="removeFromCart(item.prodID)" class="button">
              <svg viewBox="0 0 448 512" class="svgIcon">
                <path
                  d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
                ></path>
              </svg>
            </button>
            <button @click="toCheckout" class="button">
              Proceed to checkout
              <!-- <svg viewBox="0 0 448 512" class="svgIcon">
                <path
                  d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
                ></path>
              </svg> -->
            </button>
            </div>
            </div>
            </div>
          </div>
      <br />
      <br />
      <p class="total">Total Price: R{{ totalCartPrice }}</p>
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
  },
  props: {
    cartItems: Array,
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    totalCartPrice() {
      return this.$store.getters.totalCartPrice;
    },
  },
  methods: {
    removeFromCart(prodID) {
      this.$store.dispatch("removeFromCart", prodID);
    },
    toCheckout(){
      this.$router.push("/checkout")
    }
  },
};
</script>

<style scoped>
.main {
  height: 100%;
  padding-bottom: 5.25rem;
}
.buttons{
  display:flex;
  gap:10px;
}
.flec {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  height: 100%;
  width: 100vw;
  /* border: 2px solid white; */
  padding-top: 4rem;
}

.img-cont {
  /* border: 2px solid green; */
  width: 32%;
  height: 44vh;
  
}

ul {
  list-style: none;
}

button {
  background-color: red;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

.eachitem {
  /* position: relative; */
  text-decoration: none;
  /* padding-top: 4rem; */
}

.info {
  text-align: left;
  font-size: 2.4rem !important;
  font-weight: 750;
  width: 40%;
  /* border: 2px solid red; */
}

.price {
  font-size: 1.4rem !important;
}

.prodname {
  font-size: 1.4rem !important;
  
}

ul {
  text-decoration: none;
}
.hero-img {
  /* position: relative; */
  /* right: 100%; */
  width: 32vw;
  height: 48vh;
}
h2 {
  padding-top: 8rem;
  font-size: 2.4rem;
  color: white;
}

p {
  color: white;
  font-size: 1.4rem !important;
  text-decoration: none;
}
.total {
  padding-top: 12rem;
  /* padding-bottom: 0rem; */
  font-size: 2rem !important;
  font-weight: 750;
}

.button {
  /* position: absolute; */
  /* bottom: 25%; */
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgb(255, 255, 255);
  border: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 20px rgba(43, 0, 255, 0.537);
  cursor: pointer;
  transition-duration: 0.3s;
  overflow: hidden;
}

.svgIcon {
  width: 12px;
  transition-duration: 0.3s;
}

.svgIcon path {
  fill: rgb(34, 0, 255);
}

.button:hover {
  width: 140px;
  border-radius: 50px;
  transition-duration: 0.3s;
  background-color: rgb(255, 255, 255);
  align-items: center;
}

.button:hover .svgIcon {
  width: 50px;
  transition-duration: 0.3s;
  transform: translateY(60%);
}

.button::before {
  position: absolute;
  top: -20px;
  content: "Remove item";
  color: rgb(0, 0, 0);
  font-weight: 700 ;
  transition-duration: 0.3s;
  font-size: 2px;
}

.button:hover::before {
  font-size: 13px;
  opacity: 1;
  transform: translateY(30px);
  transition-duration: 0.3s;
}
</style>
