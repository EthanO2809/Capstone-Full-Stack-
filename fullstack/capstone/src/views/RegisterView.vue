<template>
<div>
  <div class="register">
    <div class="hero">
      <h2>Register</h2>
      <form @submit.prevent="registerUser">
        <label class="lblname" for="username">Username</label><br />
        <input
          type="text"
          id="username"
          v-model="userData.UserName"
          required
        /><br />
        <label class="lblage">Age:</label><br />
        <input
          v-model="userData.UserAge"
          type="number"
          class="passinp"
          required
        />
        <br>
        <label class="lblemail">Email:</label><br />
        <input
          v-model="userData.EmailAdd"
          type="email"
          class="emailinp"
          required
        /><br />
        <label class="lblpass">Password:</label><br />
        <input
          v-model="userData.UserPass"
          type="password"
          class="passinp"
          required
        />
        <br />
        <div class="btndiv">
          <button class="btn" type="submit">
            <strong>Register</strong>
            <div id="container-stars">
              <div id="stars"></div>
            </div>

            <div id="glow">
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
          </button>
        </div>
        <br />
      </form>
      <p>{{ registrationError }}</p>
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
      userData: {
        UserName: "",
        EmailAdd: "",
        UserPass: "",
        UserAge:"",
      },
      registrationError: null,
    };
  },
  components: {
    Footer,
  },
  methods: {
    async registerUser() {
      this.registrationError = null;
      console.log(this.userData)
        await this.$store.dispatch("registerUser", this.userData)
        .then(()=>{
          Swal.fire({
            icon:'success',
            title: 'Success',
            text: 'You have successfully registered',
            confirmButtonText: 'Ok'
          }).then(()=>{
            this.$router.push('/Login')
          })
        })
    },
  },
};
</script>

<style scoped>

.lblname {
  padding-top: 1rem;
  font-size: 2vw;
}

.lblemail {
  /* padding-top: 1rem; */
  font-size: 2vw;
}

.lblage {
  /* padding-top: 1rem; */
  font-size: 2vw;
}

.lblpass {
  /* padding-top: 1rem; */
  font-size: 2vw;
}

.img-ast {
  position: relative;
  left: 10%;
  top: 0;
  height: 90vh;
  width: 30vw;
}

.register {
  font-family: "Arya", sans-serif;
  display: flex;
  justify-content: center;
  color: white;
  padding-top: 12rem;
  height: 95vh;
}

.emailinp {
  text-align: center;
  font-weight: 800;
  width: 22vw;
  height: 4.4vh;
  border-radius: 16px;
}

#username {
  text-align: center;
  font-weight: 800;
  width: 22vw;
  height: 4.4vh;
  border-radius: 16px;
}

.passinp {
  text-align: center;
  font-weight: 600;
  width: 22vw;
  height: 4.4vh;
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
 display: flex;
 justify-content: center;
 padding-top: 1vh;
}

.hero {
  padding-top: 1rem;
  border-radius: 34px;
  backdrop-filter: blur(8px);
  background: rgba(255, 255, 255, 0.212);
  width: 32vw;
  height: 62vh;
  margin-left: 10rem;
}

form {
  height: 48vh;
  width: 100%;
}

@media (max-width: 300px) {
  .register {
    padding-top: 8rem;
    flex-direction: column;
    align-items: center; 
    height: 100%;
  }

  .img-ast {
    width: 80%; 
    height: 100%;
  }

  .hero {
    width: 90%; 
    height: 54vh;
    margin: 0 auto; 
  }

  input {
    height: 2rem !important;
    width: 60% !important;
  }

  label {
    font-size: 1rem !important;
  }

  .img-cont {
    height: 60vh;
    width: 100%;
  }

  .btn {
    width: 40%; 
    height: 2rem;
  }
}
</style>