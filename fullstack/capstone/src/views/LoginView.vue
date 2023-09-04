<template>
  <div class="login">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <label>Email:</label>
      <input v-model="email" type="email" class="emailinp" required>
      <label>Password:</label>
      <input v-model="password" type="password" class="passinp" required>
      <button type="submit">Login</button>
    </form>
    <p>{{ loginMessage }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      loginMessage: "",
    };
  },
  methods: {
    async login() {
      try {
        const response = await this.$axios.post("", {
          email: this.email,
          password: this.password,
        });

        if (response.data.success) {
          // Login successful, update state or perform necessary actions
          this.$store.commit("setUser", response.data.user);
          this.$router.push("/dashboard"); // Redirect to a protected route
        } else {
          // Login failed, display error message
          this.loginMessage = "Invalid credentials. Please try again.";
        }
      } catch (error) {
        // Handle network or server errors
        console.error("Login error:", error);
        this.loginMessage = "An error occurred. Please try again later.";
      }
    },
  },
};
</script>

<style scoped>
.login{
  color: white;
  background: #c31432;
  background: -webkit-linear-gradient(to right, #240b36, #c31432);
  background: linear-gradient(to right, #240b36, #c31432);
}

.emailinp {
  width: 14rem;
  height: 3rem;
  border-radius: 16px;
}

.passinp {
  width: 14rem;
  height: 3rem;
  border-radius: 16px;
}
</style>