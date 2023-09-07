class Cart {
  constructor() {
    this.items = [];
  }
}
// Define a JavaScript object to represent the shopping cart
const cart = {
  items: [],

  // Function to add an item to the cart
  addItem: function (product_id, quantity) {
    // Check if the item already exists in the cart
    const existingItem = this.items.find((item) => item.product_id === product_id);

    if (existingItem) {
      // If the item already exists, update its quantity
      existingItem.quantity += quantity;
    } else {
      // If the item does not exist, add it to the cart
      this.items.push({ product_id, quantity });
    }
  },

  // Function to remove an item from the cart
  removeItem: function (product_id) {
    const itemIndex = this.items.findIndex((item) => item.product_id === product_id);
    if (itemIndex !== -1) {
      this.items.splice(itemIndex, 1);
    }
  },

  // Function to get the total number of items in the cart
  getTotalItems: function () {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  },
};

// Function to add an item to the cart via an API request
function addToCart(productId, quantity) {
  // Make an API POST request to add the item to the cart
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
        // Item added to cart successfully
        cart.addItem(productId, quantity);
        updateCartUI();
      } else {
        // Handle error, e.g., display an error message
        console.error('Error adding item to cart:', data.error);
      }
    })
    .catch((error) => {
      console.error('Error adding item to cart:', error);
    });
}

// Function to remove an item from the cart via an API request
function removeFromCart(productId) {
  // Make an API DELETE request to remove the item from the cart
  fetch(`/api/remove_from_cart/${productId}`, {
    method: 'DELETE',
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === 200) {
        // Item removed from cart successfully
        cart.removeItem(productId);
        updateCartUI();
      } else {
        // Handle error, e.g., display an error message
        console.error('Error removing item from cart:', data.error);
      }
    })
    .catch((error) => {
      console.error('Error removing item from cart:', error);
    });
}

// Function to update the cart UI
function updateCartUI() {
  // Update the cart UI to reflect the current cart contents
  const totalItems = cart.getTotalItems();
  // Update your HTML or user interface to display the total number of items in the cart
  document.getElementById('cart-total').textContent = totalItems;
}

// Example usage:
// Add an item to the cart
addToCart(1, 3); // Add 3 units of product with ID 1 to the cart

// Remove an item from the cart
removeFromCart(1); // Remove product with ID 1 from the cart

module.exports = { 
  Cart 
};