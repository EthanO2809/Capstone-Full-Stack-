import { createStore } from "vuex";
import axios from "axios";
import Cookies from "js-cookie";
import router from "@/router";
const miniURL = "https://capstone-ethanlo.onrender.com/";

export default createStore({
  state: {
    users: null,
    user: null,
    updates: null,
    products: null,
    product: null,
    cart: [],
    totalPrice: 0,
    spinner: null,
    token: null,
    msg: null,
    chosenProduct: null,
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setUpdates(state, updates) {
      state.updates = updates;
    },
    setSingleProduct(state, product) {
      state.chosenProduct = product;
    },
    setUser(state, user) {
      state.user = user;
    },
    setProducts(state, products) {
      state.products = products;
      console.log(products);
    },
    setProduct(state, product) {
      state.product = product;
    },
    addToCart(state, productItem) {
      const existingProduct = state.cart.find(
        (item) => item.prodID === productItem.prodID
      );
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.cart.push({ ...productItem, quantity: 1 });
      }
    },
    REMOVE_FROM_CART(state, prodID) {
      const itemIndex = state.cart.findIndex((item) => item.prodID === prodID);
      if (itemIndex !== -1) {
        state.cart.splice(itemIndex, 1);
      }
    },
    setSpinner(state, spinner) {
      state.spinner = value;
    },
    setToken(state, token) {
      state.token = token;
    },
    setMsg(state, msg) {
      state.msg = msg;
    },
  },
  actions: {
    addToCart({ commit }, productItem) {
      commit("addToCart", productItem);
    },
    removeFromCart({ commit }, prodID) {
      commit("REMOVE_FROM_CART", prodID);
    },
    async fetchUsers(context) {
      try {
        const res = await axios.get(`${miniURL}Users`);
        const { results, err } = res.data
        if(results.length > 0){
          context.commit("setUsers", results);
        }
        if(err){
          context.commit("setMsg", err);
        }
      } catch (e) {
        context.commit("setMsg", "an error occured");
      }
    },
    async fetchUser(context) {
      try {
        const { data } = await axios.get(`${miniURL}user`);
        context.commit("setUser", data.results);
      } catch (e) {
        context.commit("setMsg", "an error occured");
      }
    },
    async fetchProducts(context) {
      try {
        const { data } = await axios.get(`${miniURL}products`);
        context.commit("setProducts", data.results);
      } catch (e) {
        context.commit("setMsg", "an error occured");
      }
    },
    async fetchProduct(context) {
      try {
        const { data } = await axios.get(`${miniURL}product`);
        context.commit("setProduct", data.results);
      } catch (e) {
        context.commit("setMsg", "an error occured");
      }
    },
    async registerUser(context, payload) {
      console.log("Starting registration process...");
      try {
        const res = await axios.post(`${miniURL}register`, payload);
        console.log(res.data);
        const { msg, err } = await res.data;
        console.log(msg);
        if (msg) {
          context.commit("setUser", msg);
        } else {
          console.log("Registration error:", err);
          context.commit("setMsg", err);
        }
      } catch (e) {
        console.error("An error occurred:", e);
        context.commit("setMsg", "an error occured");
      }
    },
    async login(context, payload) {
      try {
        const res = await axios.post(`${miniURL}login`, payload);
        console.log("Res: ", res.data);
        const { msg, err, token, cresult } = res.data;
        console.log(res.data);
        if (msg === "You are providing the wrong email or password") {
          return { success: false, error: msg };
        }
        if (msg === "Logged in!") {
          context.commit("setUser", cresult);
          localStorage.setItem("data", JSON.stringify(cresult));
          context.commit("setToken", token);
          Cookies.set("userToken", token, {
            expires: 1,
          });
          return { success: true, token, cresult };
        } else if (err) {
          return { success: false, error: err };
        } else {
          return { success: false, error: "Unknown error" };
        }
      } catch (e) {
        console.log("Error: ", e);
        return { success: false, error: "Network error" };
      }
    },
    async updateDetails(context, payload) {
      console.log("reached");
      try {
        const res = await axios.patch(
          `${miniURL}user/${payload.UserID}`,
          payload
        );
        const { msg, err } = await res.data;
        if (msg === "User record was updated successfully") {
          context.dispatch("fetchUsers");
          context.commit("setUpdates", msg);
        }
        if (err) {
          context.commit("setMsg", data.err);
        }
      } catch (e) {
        context.commit("setMsg", "an error occurred");
      }
    },
    async deleteUser(context, UserID) {
      try {
        const res = await axios.delete(`${miniURL}user/${UserID}`);
        if (res.status === 200) {
          context.commit("setUser", res.data.msg);
        } else {
          context.commit("setMsg", "an error occured, please try again");
        }
      } catch (e) {
        console.error("Error while deleting user: ", e);
        context.commit("setMsg", "an error occured");
      }
    },
    async addProduct(context, payload) {
      console.log("REACHED");
      try {
        const { res } = await axios.post(`${miniURL}product`, payload);
        const { msg, err } = await res.data;
        if (msg === "Product inserted successfully") {
          context.commit("setUpdates", msg);
          context.commit("setSpinner", false);
        } else if(err) {
          context.commit("setMsg", msg);
        } else{
          console.log("Other error")
        }
      } catch (e) {
        context.commit("setMsg", "an error occured");
      }
    },
    async updateProduct(context, payload) {
      try {
        const res = await axios.patch(
          `${miniURL}product/${payload.prodID}`,
          payload
        );
        const { msg, err } = res.data;
        if (msg) {
          context.dispatch("fetchUsers")
          context.commit("setProduct", msg);
        }
        if (err) {
          context.commit("setMsg", err);
        }
      } catch (e) {
        context.commit("setMsg", "an error occured");
      }
    },
    async removeProduct(context, prodID) {
      try {
        const { res } = await axios.delete(`${miniURL}product/${prodID}`);
        const { msg, err } = await res.data;
        if (msg) {
          context.commit("setProduct", msg);
        } else {
          context.commit("setMsg", err);
        }
      } catch (e) {
        context.commit("setMsg", "an error occured");
      }
    },
  },

  getters: {
    totalCartPrice(state) {
      return state.cart.reduce(
        (total, item) => total + item.Price * item.quantity,
        0
      );
    },
  },
  modules: {},
});
