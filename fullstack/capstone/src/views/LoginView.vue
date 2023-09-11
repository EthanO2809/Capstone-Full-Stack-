<template>
  <div class="login">
    <div class="hero">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <label class="lblemail">Email:</label><br />
      <input v-model="email" type="email" class="emailinp" required /><br />
      <label class="lblpass">Password:</label><br />
      <input
        v-model="password"
        type="password"
        class="passinp"
        required
      /><br />
      <div class="btndiv">
      <button class="btn" type="submit">
        <strong>LOGIN</strong>
        <div id="container-stars">
          <div id="stars"></div>
        </div>

        <div id="glow">
          <div class="circle"></div>
          <div class="circle"></div>
        </div></button
      >
      </div>
      <br />
    </form>
    <p>{{ loginMessage }}</p>
    </div>
    <img
      src="https://i.postimg.cc/YqMTskx0/astronaut-aesthetic-fishing-in-space-kc3tppv9wsqb7t48-removebg-preview.png"
      alt=""
      class="img-ast"
    />
  </div>
</template>

<script>
import Swal from 'sweetalert2'
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
        const response = await this.$store.dispatch("login", {
          EmailAdd: this.email,
          UserPass: this.password,
        });

        if (response.success) {
          // Login successful, update state or perform necessary actions
          Swal.fire({
            icon:'success',
            title: 'Login successful',
            showConfirmButton: false,
            timer: 1500
          })
          this.$router.push("/"); // Redirect to a protected route
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
.lblemail {
  padding-top: 2.4rem;
  font-size: 30px;
}

.lblpass {
  padding-top: 2rem;
  font-size: 30px;
}

.img-ast {
  position: absolute;
  right: 4%;
  top: 16%;
}

.login {
  font-family: 'Arya', sans-serif;
  position: relative;
  color: white;
  padding-top: 12rem;
  height: 90vh;
}

.emailinp {
  text-align: center;
  font-weight: 800;
  width: 24rem;
  height: 3rem;
  border-radius: 16px;
}

.passinp {
  text-align: center;
  font-weight: 600;
  width: 24rem;
  height: 3rem;
  border-radius: 16px;
}

.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 13rem;
  overflow: hidden;
  height: 3rem;
  background-size: 300% 300%;
  backdrop-filter: blur(1rem);
  border-radius: 5rem;
  transition: 0.5s;
  animation: gradient_301 5s ease infinite;
  border: double 4px transparent;
  background-image: linear-gradient(#212121, #212121),
    linear-gradient(
      137.48deg,
      #ffdb3b 10%,
      #fe53bb 45%,
      #8f51ea 67%,
      #0044ff 87%
    );
  background-origin: border-box;
  background-clip: content-box, border-box;
}

#container-stars {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: 0.5s;
  backdrop-filter: blur(1rem);
  border-radius: 5rem;
}

strong {
  z-index: 2;
  font-family: "Avalors Personal Use";
  font-size: 20px;
  letter-spacing: 5px;
  color: #ffffff;
  text-shadow: 0 0 4px white;
}

#glow {
  position: absolute;
  display: flex;
  width: 12rem;
}

.circle {
  width: 100%;
  height: 30px;
  filter: blur(2rem);
  animation: pulse_3011 4s infinite;
  z-index: -1;
}

.circle:nth-of-type(1) {
  background: rgba(254, 83, 186, 0.636);
}

.circle:nth-of-type(2) {
  background: rgba(142, 81, 234, 0.704);
}

.btn:hover #container-stars {
  z-index: 1;
  background-color: #212121;
}

.btn:hover {
  transform: scale(1.1);
}

.btn:active {
  border: double 4px #fe53bb;
  background-origin: border-box;
  background-clip: content-box, border-box;
  animation: none;
}

.btn:active .circle {
  background: #fe53bb;
}

#stars {
  position: relative;
  background: transparent;
  width: 200rem;
  height: 200rem;
}

#stars::after {
  content: "";
  position: absolute;
  top: -10rem;
  left: -100rem;
  width: 100%;
  height: 100%;
  animation: animStarRotate 90s linear infinite;
}

#stars::after {
  background-image: radial-gradient(#ffffff 1px, transparent 1%);
  background-size: 50px 50px;
}

#stars::before {
  content: "";
  position: absolute;
  top: 0;
  left: -50%;
  width: 170%;
  height: 500%;
  animation: animStar 60s linear infinite;
}

#stars::before {
  background-image: radial-gradient(#ffffff 1px, transparent 1%);
  background-size: 50px 50px;
  opacity: 0.5;
}

@keyframes animStar {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(-135rem);
  }
}

@keyframes animStarRotate {
  from {
    transform: rotate(360deg);
  }

  to {
    transform: rotate(0);
  }
}

@keyframes gradient_301 {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

@keyframes pulse_3011 {
  0% {
    transform: scale(0.75);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }

  100% {
    transform: scale(0.75);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
}

.btndiv {
  position: relative;
  left: 30%;
  padding-top: 2.5rem;
}

.hero {
  position: absolute;
  padding-top: 2rem;
  border-radius: 34px;
  backdrop-filter: blur(8px);
  background: rgba(255, 255, 255, 0.212);
  top: 25%;
  left: 30%;
  width: 34%;
  height: 70%;
}
</style>
