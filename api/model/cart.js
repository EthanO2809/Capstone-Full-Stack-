const axios = require('axios');

class Cart {
  constructor() {
    this.items = [];
  }

  addItem(prodID, quantity) {
    if (typeof window !== 'undefined') {
      
      fetch('/api/add_to_cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ product_id: prodID, quantity }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.status === 200) {
            this.items.push({ prodID, quantity });
            updateCartUI();
          } else {
            console.error('Error adding item to cart:', data.error);
          }
        })
        .catch((error) => {
          console.error('Error adding item to cart:', error);
        });
    }
  }

  removeItem(prodID) {
    if (typeof window !== 'undefined') {
     
      fetch(`/api/remove_from_cart/${prodID}`, {
        method: 'DELETE',
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.status === 200) {
            const itemIndex = this.items.findIndex((item) => item.prodID === prodID);
            if (itemIndex !== -1) {
              this.items.splice(itemIndex, 1);
            }
            updateCartUI();
          } else {
            console.error('Error removing item from cart:', data.error);
          }
        })
        .catch((error) => {
          console.error('Error removing item from cart:', error);
        });
    }
  }

  getItems() {
    return this.items;
  }
}

module.exports = Cart;
