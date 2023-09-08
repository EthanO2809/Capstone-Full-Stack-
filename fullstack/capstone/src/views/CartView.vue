<template>
  <div class="main">
    <div class="cartpg">
      <h2 class="text-center">Your Cart</h2>

      <div class="flec">
       
          <div
          class="eachitem" v-for="item in cart" :key="item.prodID">
            <p class="prodname">{{ item.prodName }}</p>
            <p>
              <img :src="item.prodUrl" class="hero-img" :alt="item.prodName" />
            </p>
            <p class="price">Price: R{{ item.Price }}</p>
            <button @click="removeFromCart(item.prodID)" class="button">
              <svg viewBox="0 0 448 512" class="svgIcon">
                <path
                  d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
                ></path>
              </svg>
            </button>
          </div>
     
      </div>
      <br />
      <br />
      <p class="total">Total Price: R{{ totalCartPrice }}</p>
    </div>
  </div>
</template>

<script>
export default {
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
  },
};
</script>

<style scoped>
.main {
  height: 100%;
}

.flec {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding-top: 4rem;
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
  position: relative;
  text-decoration: none;
  padding-top: 4rem;
}

.price {
  position: absolute;
  bottom: 40%;
  font-size: 1.2rem;
  width: 100%;
}

.prodname {
  font-size: 1rem;
  position: absolute;
  top: 28%;
  width: 100%;
}

ul {
  text-decoration: none;
}
.hero-img {
  position: relative;
  right: 100%;
  width: 200px;
  height: 200px;
}
h2 {
  padding-top: 10rem;
  color: white;
}

p {
  color: white;
  font-size: 1rem;
  text-decoration: none;
}
.total {
  padding-bottom: 4rem;
}

.button {
  position: absolute;
  bottom: 25%;
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
