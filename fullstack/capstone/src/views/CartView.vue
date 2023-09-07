<template>
  <div class="cartpg">
    <h2>Your Cart</h2>
    <ul>
      <li v-for="item in cart" :key="item.prodID">
        <p>{{ item.prodName }}</p>
        <p><img :src="item.prodUrl" class="hero-img" :alt="item.prodName" /></p>
         -Price: <p>R{{ item.Price }}</p>
         <button @click="removeFromCart(item.prodID)">Remove</button>
      </li>
    </ul>
    <p class="total">Total Price: R{{ totalCartPrice }}</p>
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
      this.$store.dispatch('removeFromCart', prodID);
    },
  },
};
</script>

<style scoped>
.cartpg {
    height: 100%;
  }
button {
  background-color: red;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}
ul {
    text-decoration: none;
}
.hero-img {
    width: 100px;
    height: 100px;
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
.total{
    padding-bottom: 4rem;
}
</style>