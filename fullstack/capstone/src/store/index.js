import { createStore } from "vuex";
import axios from "axios";
const miniURL = "https://capstone-ethanlo.onrender.com/";

export default createStore({
  state: {
    Users: null,
    user: null,
    products: null,
    product: null,
    spinner: null,
    token: null,
    msg: null,
    chosenProduct: null
  },
  getters: {},
  mutations: {
    setUsers(state, Users) {
      state.Users = Users;
    },
    setSingleProduct(state, product){
      state.chosenProduct = product
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
    async fetchUsers(context) {
      try {
        const { data } = await axios.get(`${miniURL}Users`);
        context.commit("setUsers", data.results);
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
        console.log(payload)
      try {
        console.log("payload: ", payload)
        const { res } = await axios.post(`${miniURL}register`, payload);
        console.log(res.data)
        const { results, err } = await res.data;
        console.log(results, err) 
        if (results) {
          console.log("User registered successfully:", results[0]); 
          console.log(results)
          console.log(results[0])
          context.commit("setUser", results[0]);
          context.commit("setSpinner", false);
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
          const res = await axios.post(`${api}login`, payload);
          console.log("Res: ", res.data);
          const { msg, err, token, userData } = res.data;
          console.log(userData);
          if (msg === "You are providing the wrong email or password") {
            context.commit("setError", msg);
            context.commit("setLogStatus", "Not logged in");
            return { success: false, error: msg };
          }
          if (msg) {
            context.commit("setUser", userData);
            context.commit("setToken", token);
            context.commit("setUserData", userData);
            context.commit("setLogStatus", "Logged in!");
            Cookies.set("userToken", token, {
              expires: 1,
            });
            return { success: true, token };
          } else if (err) {
            context.commit("setError", err);
            return { success: false, error: err };
          } else {
            context.commit("setError", "Unknown error during login");
            context.commit("setLogStatus", "not logged in");
            return { success: false, error: "Unknown error" };
          }
        } catch (err) {
          if (err.resp) {
            console.error(
              "Server gave an error: ",
              err.resp.status,
              err.resp.data
            );
          } else if (err.req) {
            console.error(
              "No response from the server. Check your internet connection"
            );
          } else {
            console.log("An error occured: ", err);
          }
          context.commit("setError", "An error occured while trying to log in");
          context.commit("setLogStatus", "Not logged in");
          return { success: false, error: "Network error" };
        }
      },
    },
    
    async updateUser(context, payload) {
      try {
        const { res } = await axios.patch(`${miniURL}user/${payload.UserID}`, payload);
        const {msg, err} = res.data
        if(msg){
          context.commit("setUser", msg)
        }
        if(err){
          context.commit("setMsg", err)
        }
      } catch (e) {
        context.commit("setMsg", "an error occured");
      }
    },
    async deleteUser(context, UserID) {
      try {
        const res = await axios.delete(`${miniURL}user/${UserID}`);
        if(res.status === 200){
          context.commit('setUser', res.data.msg)
        } else{
          context.commit('setMsg', "an error occured, please try again")
        }
      } catch (e) {
        console.error('Error while deleting user: ', e)
        context.commit("setMsg", "an error occured");
      }
    },
    async addProduct(context, payload) {
      console.log("REACHED");
      try {
        const { res } = await axios.post(`${miniURL}product`, payload);
        const { results, err } = await res.data;
        if (results) {
          context.commit("setProduct", results[0]);
          context.commit("setSpinner", false);
        } else {
          context.commit("setMsg", msg);
        }
      } catch (e) {
        context.commit("setMsg", "an error occured");
      }
    },
    async updateProduct(context, payload) {
      try {
        const res = await axios.patch(`${miniURL}product/${payload.prodID}`, payload);
        const { msg, err } = res.data
        if(msg){
          context.commit("setProduct", msg)
        }
        if(err){
          context.commit("setMsg", err)
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
  modules: {},
});