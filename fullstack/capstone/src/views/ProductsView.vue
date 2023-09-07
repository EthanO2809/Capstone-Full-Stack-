<template>
  <div class="prods">
    <div class="container">
      <h2 class="class-display2 products mb-5 text-white">
        Welcome to our cutting-edge tech products page, where innovation meets your needs!
      </h2>
      <div
        class="hero"
        @mouseover="hoveredProduct = productItem"
        @mouseleave="hoveredProduct = null"
        v-if="products"
      >
        <div v-for="productItem in products" :key="productItem.prodID" class="product-card">
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
            <h2 class="hero-text">{{ productItem.prodName }}</h2>
            <h3 class="hero-text2">{{ productItem.prodDesc }}</h3>
            <h4 class="hero-text3">
              <span>R</span> {{ productItem.Price }} <span>,00</span>
            </h4>
            <!-- Add to Cart button -->
            <button @click="addToCart(productItem.prodID)" class="cart-btn">Add to Cart</button>
          </center>
        </div>
      </div>
      <div v-else class="row">
        <Spinner />
      </div>
       <div class="modal" v-if="showCartModal">
      <div class="modal-content">
        <span class="close" @click="closeCartModal">&times;</span>
        <h2>Your Cart</h2>
        <ul>
          <li v-for="item in cartItems" :key="item.productId">
            {{ item.productName }} - Quantity: {{ item.quantity }}
          </li>
        </ul>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import Spinner from "../components/Spinner.vue";
import CartModal from "../components/CartModal.vue";

export default {
  components: {
    Spinner,
    CartModal,
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
    addToCart(productItem) {
      
      this.cartItems.push({
        productId: productItem.prodID,
        productName: productItem.prodName,
        quantity: 1, 
      });

      // Show the cart modal when an item is added to the cart
      this.showCartModal = true;
    },
    addToCart(productId, quantity) {
      
      fetch('/api/add_to_cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ product_id: productId, quantity }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.status === 200) {
            
          } else {
            
            console.error('Error adding item to cart:', data.error);
          }
        })
        .catch((error) => {
          console.error('Error adding item to cart:', error);
        });
    },
    removeFromCart(productId) {
      
      fetch(`/api/remove_from_cart/${productId}`, {
        method: 'DELETE',
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.status === 200) {
            
          } else {
            
            console.error('Error removing item from cart:', data.error);
          }
        })
        .catch((error) => {
          console.error('Error removing item from cart:', error);
        });
    },
    
    viewCart() {
      
      fetch('/api/view_cart')
        .then((response) => response.json())
        .then((data) => {
          
          console.log('Cart Contents:', data.cart);
        })
        .catch((error) => {
          console.error('Error fetching cart contents:', error);
        });
    },
    addToCart(productId, quantity) {
      
      this.cartItems.push({ productId, productName: "Product Name", quantity });

      
      this.showCartModal = true;
    },

    closeCartModal() {
      
      this.showCartModal = false;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
  },
  data() {
    return {
      hoveredProduct: null,
      showCartModal: false, // To control the visibility of the cart modal
      cartItems: [], // To store cart items
    }
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
  padding-bottom: 24rem;
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
.modal {
  backdrop-filter: blur(8px);
  background: rgba(255, 255, 255, 0);
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
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

.cart-btn {
  position: absolute;
  bottom: 30%;
  right: 40%;
  border-radius: 6px;
  width: 6.8rem;
  height: 2.6rem;
  font-weight: 700;
}
@import url('https://fonts.cdnfonts.com/css/sf-mono');
</style>
