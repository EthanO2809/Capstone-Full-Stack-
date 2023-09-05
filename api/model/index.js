const { Users } = require('./Users')
const { Cart } = require('./cart')
const { Products } = require('./Products')

module.exports = {
    users: new Users(),
    products: new Products(),
    cart: new Cart(),
};