<template>
<div>
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
    <div class="img-cont">
    <img
      src="https://i.postimg.cc/YqMTskx0/astronaut-aesthetic-fishing-in-space-kc3tppv9wsqb7t48-removebg-preview.png"
      alt=""
      class="img-ast"
    />
    </div>
  </div>
  <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue"
import Swal from 'sweetalert2'
export default {
  data() {
    return {
      email: "",
      password: "",
      loginMessage: "",
    };
  },
  components: {
    Footer,
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
  position: absolute !important;
  left: 60% !important;
  top: 20% !important;
  height: 90vh !important;
  width: 30vw !important;
}

.login {
  font-family: 'Arya', sans-serif;
  position: relative;
  color: white;
  padding-top: 12rem;
  height: 100% !important;
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
  width: 16vw;
  overflow: hidden;
  height: 6vh;
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
  font-size: 100%;
  width: 100%;
  /* letter-spacing: 5px; */
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
  display: flex !important;
 justify-content: center !important;
 padding-top: 6vh !important;
}

.hero {
  
  padding-top: 1rem !important;
  border-radius: 34px !important;
  backdrop-filter: blur(8px) !important;
  background: rgba(255, 255, 255, 0.212) !important;
  width: 32vw !important;
  height: 62vh !important;
  margin-left: 28rem !important;
  margin-bottom: 1rem !important;
}

@media (max-width: 300px) {
  .navbar-collapse {
    text-align: center!important;
  }
  .nav-item {
    padding: 0.5rem 0!important;
  }
  .nav-link {
    font-size: 1.2rem;
  }
  .img-01 {
    width: 6rem!important;
    height: 6rem!important;
  }
  .img-02 {
    margin-top: 1rem!important;
    width: 2.5rem!important;
    height: 2.5rem!important;
  }

  .hero {
    margin-left: 2rem!important;
    margin-bottom: 6rem!important;
    height: 60%!important;
    width: 80%!important;
    /* margin: 0!important; */
  }
  .lblname,
  .lblemail,
  .lblage,
  .lblpass {
    font-size: 1.2rem!important;
    padding-top: 1rem!important;
  }
  .emailinp,
  #username,
  .passinp {
    height: 2rem!important;
    width: 60%!important;
  }
  .btn {
    width: 40%!important;
  }

  .img-ast {
    position: absolute!important;
    top: 92%!important;
    height: 40%!important;
    width: 40%!important;
  }

  .footer h3 {
    font-size: 1rem!important;
  }
  .footer ul {
    font-size: 1rem!important;
  }
  .logo {
    height: 6rem!important;
    width: 6rem!important;
  }
  .item {
    padding: 0.5rem!important;
  }

  .log {
    flex-direction: column!important;
    align-items: center!important;
  }

  .login {
    height: 100%!important;
    width: 100%!important;
    padding-top: 8rem!important;
    /* padding: 0!important; */
  }
}
</style>
