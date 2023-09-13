<template>
  <div>
    <div class="container-fluid">
      <h2 class="text-center text-white">Payment Information</h2>
      <div class="hero">
        <br />
        <div class="inputs">
          <label for="PayNo">Credit or Debit Card Number</label><br />
          <input type="number" class="inp" /><br />

          <label for="">Name On Card</label><br />
          <input type="text" class="inp" /><br />

          <label for="">Exp Date</label><br />
          <input type="text" class="inp" /><br />

          <label for="">CVV</label><br />
          <input type="number" class="inp" /><br />
        </div>
        <br />
        <div class="final">
          <p><b>Shipping:</b> Free*</p>
          <p><b>Order Total:</b> {{}}</p>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                fill="currentColor"
                d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
              ></path>
            </svg>
            <span>Check Out</span>
          </button>
          <div class="final2">
            <img src="https://i.postimg.cc/25qjHbTZ/Screenshot-2023-09-13-144322-removebg-preview.png" alt="" class="img-01">
            <img src="https://i.postimg.cc/dQnMyQjP/Screenshot-2023-09-13-144403-removebg-preview.png" alt="" class="img-01">
            <img src="https://i.postimg.cc/j22MNTRt/Screenshot-2023-09-13-144440-removebg-preview.png" alt="" class="img-01">
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
export default {
  components: {
    Footer,
  },
};
</script>

<style scoped>
.container-fluid {
  /* border: 2px solid black; */
  height: 100vh;
  width: 100%;
}

.hero {
  /* border: 2px solid red; */
  height: 60%;
  width: 100%;
  position: relative;
  display: flex;
  /* align-items: center;
  justify-content: center; */
  /* left: 29%; */
  top: 0%;
  color: white;
}

h2 {
  padding-top: 10rem;
  padding-bottom: 4rem;
}

.inputs {
  /* border: 2px solid green; */
  font-size: 1.4rem;
  padding-top: 1.8rem;
  padding-left: 6rem;
  width: 50%;
  text-align: left;
}

.final {
  /* border: 2px solid blue; */
  font-size: 1.4rem;
  padding-top: 6rem;
  padding-left: 2rem;
  width: 50%;
  text-align: left;
}

.final2 {
  /* border: 2px solid rgb(255, 0, 195); */
  backdrop-filter: blur(8px);
  background: rgba(255, 255, 255, 0.194);
  font-size: 1.4rem;
  /* padding-right: 15rem; */
  border-radius: 14px;
  padding-bottom: 0rem;
  width: 56%;
  height: 24%;
  text-align: left;
  display: flex;
  justify-content: center;
  align-items: center;
}

.inp {
  padding-bottom: 2rem;
}

input {
  width: 20vw;
  height: 6vh;
  padding-top: 18px;
  padding-left: 8px;
  border-radius: 14px;
}

.img-01 {
    width: 8rem;
}

button {
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  font-family: inherit;
  font-weight: 500;
  font-size: 17px;
  padding: 0.8em 1.3em 0.8em 0.9em;
  color: white;
  background: #ad5389;
  background: linear-gradient(to right, #0f0c29, #302b63, #24243e);
  border: none;
  letter-spacing: 0.05em;
  border-radius: 16px;
}

button svg {
  margin-right: 3px;
  transform: rotate(30deg);
  transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1);
}

button span {
  transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1);
}

button:hover svg {
  transform: translateX(5px) rotate(90deg);
}

button:hover span {
  transform: translateX(7px);
}
</style>
