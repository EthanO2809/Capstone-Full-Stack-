<template>
  <div class="cart-modal" v-show="`cartItems.length > 0`">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <h2 class="text-white">Your Cart</h2>
      <ul>
        <li v-for="item in cartItems" :key="item.productId">
          {{ item.productName }} - Quantity: {{ item.quantity }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cartItems: Array,
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}

.modal-content {
  position: absolute;
 backdrop-filter: blur(8px);
  background: rgba(255, 255, 255, 0);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  box-shadow: 0px 0px 10px 0px #000;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
}
</style>