const { Users } = require('./Users')
const { Products } = require('./Products')
const Cart = require('./cart');
const axios = require('axios');


module.exports = {
    users: new Users(),
    products: new Products(),
    cart: new Cart(),
};