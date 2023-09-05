class Cart {
    constructor() {
      this.items = [];
    }
  
    // Add an item to the cart
    addItem(item) {
      this.items.push(item);
    }
  
    // Remove an item from the cart by its unique identifier (e.g., product ID)
    removeItem(itemId) {
      this.items = this.items.filter((item) => item.prodID !== itemId);
    }
  
    // Get the list of items in the cart
    getItems() {
      return this.items;
    }
  
    // Calculate the total cost of items in the cart
    calculateTotal() {
      return this.items.reduce((total, item) => total + item.Price, 0);
    }
  
    // Clear the cart (remove all items)
    clearCart() {
      this.items = [];
    }
  }
  
  module.exports = Cart;
  