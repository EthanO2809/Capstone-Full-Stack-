<template>
  <div>
   
    <h1 class="usetb text-white">Users Table</h1>
    <AddUser />
    <center>
      <div class="table-responsive">
    <table class="table2 table-bordered text-center" >
      <thead>
        <tr>
          <th class="th-1">ID</th>
          <th class="th-1">Name</th>
          <th class="th-1">Age</th>
          <th class="th-1">Email Address</th>
          <th class="th-1">User Role</th>
          <th class="th-1">Profile Image</th>
        </tr>
      </thead>
      <tbody v-for="user in users" :key="user.UserID">
        <tr v-if="user">
          <td>{{ user.UserID }}</td>
          <td>{{ user.UserName }}</td>
          <td>{{ user.UserAge }}</td>
          <td>{{ user.EmailAdd }}</td>
          <td>{{ user.UserRole }}</td>
          <td>
            <img
              :src="user.UserUrl"
              :alt="user.UserName"
              loading="lazy"
              class="img-fluid image"
            />
          </td>
          <td>
    <UpdateUser :user="user" />
    <button class="del" @click="deleteUser(user.UserID)">delete</button>
  </td>
        </tr>
        <tr v-else>
          user data is undefined
          <Spinner />
        </tr>
      </tbody>
    </table>
  </div>
  </center>
  <br>

   <!--buttons and search -->
   <div id="all_buttons_display">
    <!-- filter -->
    <div class="dropdown">
    <a class="btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Sort</a>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Name</a></li>
      <li><a class="dropdown-item" href="#">Price</a></li>
    </ul>
</div>
  <!-- sort -->
  <div class="sort-dropdown">
    <button class="btn" @click="refresh">Refresh</button>
    <button class="btn1" @click="toggleSortDirection">
      Filter by: {{ sort === "asc" ? "ascending" : "descending " }}
    </button>
  </div>
    <h1 class="text-white">Products Table</h1>
    <AddProducts />
    <center>
      <div class="table-responsive">
      <table class="table1 table-bordered border-black text-center">
      <thead>
        <tr>
          <th class="th-2">ID</th>
          <th class="th-2">Name</th>
          <th class="th-2">quantity</th>
          <th class="th-2">price</th>
          <th class="th-2">category</th>
          <th class="th-2">product image</th>
          <th class="th-2">Action</th>
        </tr>
      </thead>
      <tbody v-for="product in filteredProducts" :key="product.prodID">
        <tr v-if="product">
          <td class="td-2">{{ product.prodID }}</td>
          <td class="td-2">{{ product.prodName }}</td>
          <td class="td-2">{{ product.quantity }}</td>
          <td class="td-2">R {{ product.Price }}</td>
          <td class="td-2">{{ product.Category }}</td>
          <td class="td-2">
            <img
              :src="product.prodUrl"
              :alt="product.prodName"
              class="img-fluid image"
              loading="lazy"
            />
          </td>
          <td>
            <UpdateProducts :product="product"/>
            <button class="del" @click="remveProduct(product.prodID)">
              delete
            </button>
          </td>
        </tr>
        <tr v-else>
          <Spinner />
        </tr>
      </tbody>
    </table>
  </div>
  </center>
  </div>

  </div>
</template>

<script>
import Spinner from "../components/Spinner.vue";
import AddProducts from "../components/AddProducts.vue";
import AddUser from "../components/AddUser.vue";
import UpdateProducts from '../components/UpdateProducts.vue'
import UpdateUser from '../components/UpdateUser.vue'
export default {
  components: {
    Spinner,
    AddProducts,
    AddUser,
    UpdateProducts,
    UpdateUser
  },
  data() {
    return {
      sort: "",
      sortBy: "id",
      sortMode: "prodID",
      user: null,
    };
  },
  computed: {
    users() {
      return this.$store.state.users || [];
    },
    products() {
      return this.$store.state.products || [];
    },
    product() {
      return this.$store.state.product || [];
    },
    user() {
      return this.$store.state.user || [];
    },
    filteredProducts() {
      let filtered = [...this.products];
      if (this.sortBy === "name") {
        filtered = filtered.sort(
          (a, b) =>
            a.prodName.localeCompare(b.prodName) *
            (this.sort === "asc" ? 1 : -1)
        );
      } else if (this.sortBy === "id") {
        filtered = filtered.sort(
          (a, b) => (this.sort === "asc" ? 1 : -1) * (a.prodID - b.prodID)
        );
      }
      return filtered;
    },
  },
  mounted() {
    this.$store.dispatch('fetchProducts');
    this.$store.dispatch('fetchUsers');
  },
  methods: {
    remveProduct(prodID) {
      console.log("deleted...");
      this.$store.dispatch("removeProduct", prodID);
      setTimeout(() => {
        location.reload();
      }, 500);
    },
    refresh() {
      this.sortBy = "id";
    },
    toggleSortDirection() {
      console.log("reached");
      this.sortBy = 'name'
      this.sort = this.sort === "asc" ? "desc" : "asc";
    },
    deleteUser(UserID) {
      if (confirm("Are you sure you want to delete this user?")) {
        this.$store.dispatch("deleteUser", UserID);
        setTimeout(() => {
          location.reload();
        }, 500);
      }
    },
  },
};
</script>

<style scoped>
.image {
  width: 6rem;
  fill: white !important;
}

.th-1{
  font-size: 1.4rem;
}

.th-2{
  font-size: 1.4rem;
}

.usetb {
  padding-top: 10rem;
}

.td-2 {
  font-weight: 600;
  font-style: italic;
  font-size: 1.2rem;
}

img {
  width: 7rem;
}
.del {
  width: 5rem;
  border-radius: 5px;
  background-color: rgb(255, 129, 129);
}

.btn{
  border: 1px solid black;
  margin-bottom: 7px;
}
.btn1{
  float: right;
  border: 1px solid black !important;
  margin-bottom: 7px !important;
  border-radius: 5px;
  height: 2rem;
  margin-top: 1rem;
  background-color: white;
  color: black;
}
.btn:hover{
color: rgb(126, 126, 126);
}
.btn1:hover{
color: rgb(126, 126, 126);
}


.table1 {
  border: 2px solid rgb(255, 255, 255) !important;
  color: white;
  width: 90%;
  backdrop-filter: blur(8px) !important;
  background-color: rgba(255, 255, 255, 0) !important;
}
.table2 {
  border: 2px solid rgb(255, 255, 255) !important;
  color: white;
  width: 90%;
  backdrop-filter: blur(8px) !important;
  background-color: rgba(255, 255, 255, 0) !important;
}

.dropdown{
  float: left;
}
.dropdown1{
  float: right;
}
</style>  