const express = require("express");
const { users, products } = require("../model");
const { verifyAToken } = require("../middleware/AuthenticateUser");
const routes = express.Router();
const bodyParser = require("body-parser");
const { Cart } = require("../model/cart");

const cart = new Cart();

routes.post("/cart/add/:prodID", (req,res) => {
  const productID = req.params.prodID;
})

products.fetchProduct(req, res);
if (product) {
  // If the product exists, add it to the cart
  cart.addItem(product);
  res.json({
    status: res.statusCode,
    msg: "Product added to the cart successfully",
  });
} else {
  res.status(404).json({
    status: 404,
    msg: "Product not found",
  });
}
routes.get("/cart", (req, res) => {
  const cartContents = cart.getItems();
  res.json({
    status: res.statusCode,
    cart: cartContents,
    total: cart.calculateTotal(),
  });
});
routes.delete("/cart/remove/:prodID", (req, res) => {
  const productId = req.params.prodID;
 
  cart.removeItem(productId);
  res.json({
    status: res.statusCode,
    msg: "Product removed from the cart successfully",
  });
});
routes.get("/cart", (req, res) => {
  const cartContents = cart.getItems();
  res.json({
    status: res.statusCode,
    cart: cartContents,
    total: cart.calculateTotal(),
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
// =======
//import all model's objects
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