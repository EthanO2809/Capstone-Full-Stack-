const express = require("express");
const { users, products, cart } = require("../model");
const { verifyAToken } = require("../middleware/AuthenticateUser");
const routes = express.Router();
const bodyParser = require("body-parser");

routes.post("/add_to_cart", bodyParser.json(), (req, res) => {
  // Ensure that the user is authenticated before allowing cart actions
  // You can use the 'verifyAToken' middleware for this purpose
  verifyAToken(req, res, () => {
    const { product_id, quantity } = req.body;
    cart.addItem(product_id, quantity);
    res.json({ status: res.statusCode, message: "Item added to cart successfully" });
  });
}); 

routes.delete("/remove_from_cart/:product_id", (req, res) => {
  // Ensure that the user is authenticated before allowing cart actions
  // You can use the 'verifyAToken' middleware for this purpose
  verifyAToken(req, res, () => {
    const { product_id } = req.params;
    cart.removeItem(product_id);
    res.json({ status: res.statusCode, message: "Item removed from cart successfully" });
  });
});

routes.get("/view_cart", (req, res) => {
  // Ensure that the user is authenticated before allowing cart actions
  // You can use the 'verifyAToken' middleware for this purpose
  verifyAToken(req, res, () => {
    const cartItems = cart.getItems(); // Implement a method to retrieve cart items from your 'cart' module
    res.json({ status: res.statusCode, cart: cartItems });
  });
});

routes.get("/Users", (req, res) => {
  users.fetchUsers(req, res)
});
routes.get("/user/:UserID", (req, res) => {
  users.fetchUser(req, res)
});
routes.post("/login", bodyParser.json(), (req, res) => {
  users.login(req, res)
});
routes.post("/register", bodyParser.json(), (req, res) => {
  users.registerUser(req, res)
});
routes.patch("/user/:UserID", bodyParser.json(), (req, res) => {
  users.updateUser(req, res)
});
routes.delete("/user/:UserID", bodyParser.json(), (req, res) => {
  users.removeUser(req, res)
});

routes.get("/products", (req, res) => {
  products.fetchProducts(req, res)
});
routes.get("/product/:prodID", (req, res) => {
  products.fetchProduct(req, res)
});
routes.post("/product", bodyParser.json(), (req, res) => {
  products.addProduct(req, res)
});
routes.patch("/product/:prodID", bodyParser.json(), (req, res) => {
  products.updateProduct(req, res)
});
routes.delete("/product/:prodID", (req, res) => {
  products.removeProduct(req, res)
});

module.exports = {
  express,
  routes,
};