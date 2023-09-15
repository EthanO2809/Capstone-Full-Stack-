<template>
<div>
   <div class="contact">
    <div class="img-cont">
    <img src="https://i.postimg.cc/8Pr62dd3/1649074ecd03634e05639d767e131258.jpg" alt="" class="img-01">
    </div>
    <div class="contactsec">
    <form action="https://formspree.io/f/mgejeopn" method="POST">
        <h3 class="text-center">ContactUs_</h3>
        <div class="row">
            <div class="col-6 ms">
        <label for="FullName_" class="FullName_">FullName_</label><br>
        <input type="text" class="name" placeholder="Enter Your Name"
        oninvalid="this.setCustomValidity('Please enter your name and surname')"
        oninput="this.setCustomValidity('')" required /><br>
        <label for="Phone_" class="Phone_">Phone_</label><br>
        <input type="text" class="name" placeholder="Enter Your CellNo."
        oninvalid="this.setCustomValidity('Please enter your phone number')"
        oninput="this.setCustomValidity('')" required><br>
        <label for="EmailAdd_" class="EmailAdd_">EmailAdd_</label><br>
        <input type="email" class="name" placeholder="Enter Your Email Address"
        oninvalid="this.setCustomValidity('Please enter your email addresss')"
        oninput="this.setCustomValidity('')" required ><br>
        <label for="Msg_" class="Msg_">Leave Us a Message_</label><br>
        <textarea name="message" class="name1" placeholder="Leave Us a Message"
        oninvalid="this.setCustomValidity('Please leave a message')"
        oninput="this.setCustomValidity('')" required></textarea><br>
        <button type="submit" class="button">
        Send
        </button>
        </div>
        <div class="col-6 ma">
            <h4 class="sales text-white text-center">Sales</h4>
            <p class="txt">PC_Wizard</p>
            <p class="txt">+27 21 656 4794</p>
            <p class="txt">373 Hanker Cresc. <br>
            Lansdowne, <br>
            Cape Town, <br>
            4370</p>
        </div>
        </div>
        </form>
    </div>
    </div>
    <Footer />
    </div>
</template>

<script>
import Footer from "../components/Footer.vue"
export default {
    components:{
        Footer,
    },
}
</script>

<style scoped>
.contact {
    height: 120vh;
    width: 100%;
}

.img-01 {
    position: absolute;
    width: 50rem;
    height: 40rem;
    left: 25%;
    top: 20%;
    opacity: 30%;
    border-radius: 23px;
}

.FullName_ {
    color: white;
    padding-right: 6rem;
}

.Phone_ {
    color: white;
    padding-right: 7.4rem;
}
.button {
  position: relative;
  padding: 10px 22px;
  border-radius: 16px;
  border: none;
  color: #fff;
  cursor: pointer;
  background-color: #7d2ae8;
  transition: all 0.2s ease;
}

.button:active {
  transform: scale(0.96);
}

.button:before,
.button:after {
  position: absolute;
  content: "";
  width: 150%;
  left: 50%;
  height: 100%;
  transform: translateX(-50%);
  z-index: -1000;
  background-repeat: no-repeat;
}

.button:hover:before {
  top: -70%;
  background-image: radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, transparent 20%, #7d2ae8 20%, transparent 30%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, transparent 10%, #7d2ae8 15%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%);
  background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%,
    10% 10%, 18% 18%;
  background-position: 50% 120%;
  animation: greentopBubbles 0.6s ease;
}

@keyframes greentopBubbles {
  0% {
    background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%,
      40% 90%, 55% 90%, 70% 90%;
  }

  50% {
    background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%,
      50% 50%, 65% 20%, 90% 30%;
  }

  100% {
    background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%,
      50% 40%, 65% 10%, 90% 20%;
    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
  }
}

.button:hover::after {
  bottom: -70%;
  background-image: radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, transparent 10%, #7d2ae8 15%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%);
  background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 20% 20%, 18% 18%;
  background-position: 50% 0%;
  animation: greenbottomBubbles 0.6s ease;
}

@keyframes greenbottomBubbles {
  0% {
    background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%,
      70% -10%, 70% 0%;
  }

  50% {
    background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%,
      105% 0%;
  }

  100% {
    background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%,
      110% 10%;
    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
  }
}

.EmailAdd_ {
    color: white;
    padding-right: 6rem;
}

.Msg_ {
    color: white;
    padding-right: 1.8rem;
}

.contactsec {
    position: relative;
    top: 24%;
    left: 22%;
    width: 60%;
    margin-right: 0;
    margin-left: 0;
}

h3 {
    color: white;
}

.name {
    width: 12rem;
    height: 3rem;
    border-radius: 1.2rem;
    font-size: .8rem;
    padding-left: .6rem;
    margin-bottom: 1rem;
}

.name1 {
    width: 12rem;
    height: 5rem;
    text-align: start;
    padding-bottom: 3rem;
    padding-left: .6rem;
    border-radius: 1.2rem;
}

.ms {
    padding-top: 30px;
    padding-left: 67px;
    border-right: solid rgba(255, 255, 255, 0.251) 1px;
}

.ma {
    padding-right: 14rem;
}

.sales {
    padding-top: 1rem;
    font-size: 2.2rem;
}

.txt {
    text-align: start;
    padding-top: 1rem;
    font-size: 1.2rem;
    color: white;
    padding-left: 4.8rem;
    font-style: italic;
}

@media (max-width: 300px) {

.contact {
    height: 100vh;
    width: 100%;
}

  .img-01 {
    display: none;
  }

  .contactsec {
    padding-left: 1.5rem;
    top: 10%;
    left: 0%;
    width: 100%;
  }
  h3 {
    font-size: 1.2rem;
    padding-top: 6rem;
  }
  .sales {
    padding-left: 1rem;
  }
  h4 {
    width: 4rem;
  }
  .name,
  .name1 {
    width: 100%;
    font-size: 0.8rem;
  }
  .ms {
    padding-left: 0;
    border-right: none;
    padding: 0;
    margin: 0;
  }
  .ma {
    padding-left: 1rem;
    padding: 0;
    margin: 0;
  }
  .sales {
    font-size: 1.4rem;
  }
  .col-6 {
    width: 50%;
  }

  .row {
    margin: 0;
    padding: 0;
    width: 94%;
  }
  label {
    font-size: 0.8rem;
    text-align: left;
  }
  .txt {
    font-size: .8rem;
    padding-left: 1rem;
    margin: 0;
    width: 100%;
  }
  .img-cont {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  p {
    padding: 0;
    margin: 0;
  }
  input {
    height: 2rem !important;
  }
}

@media (width <701px) {

.contact {
    height: 100vh;
    width: 100%;
}

  .img-01 {
    display: none;
  }

  .contactsec {
    padding-left: 1.5rem;
    top: 10%;
    left: 0%;
    width: 100%;
  }
  h3 {
    font-size: 1.2rem;
    padding-top: 6rem;
  }
  .sales {
    padding-left: 1rem;
  }
  h4 {
    width: 4rem;
  }
  .name,
  .name1 {
    width: 100%;
    font-size: 0.8rem;
  }
  .ms {
    padding-left: 0;
    border-right: none;
    padding: 0;
    margin: 0;
  }
  .ma {
    padding-left: 1rem;
    padding: 0;
    margin: 0;
  }
  .sales {
    font-size: 1.4rem;
  }
  .col-6 {
    width: 50%;
  }

  .row {
    margin: 0;
    padding: 0;
    width: 94%;
  }
  label {
    font-size: 0.8rem;
    text-align: left;
  }
  .txt {
    font-size: .8rem;
    padding-left: 1rem;
    margin: 0;
    width: 100%;
  }
  .img-cont {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  p {
    padding: 0;
    margin: 0;
  }
  input {
    height: 2rem !important;
  }
}
</style>