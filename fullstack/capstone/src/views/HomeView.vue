<template>
  <div class="home">

    <div class="hero">
      <img src="https://i.postimg.cc/pVDbrSFG/Screenshot-2023-08-31-084124.png" alt="" class="heroimg">
      <h2 class="hero-text">Your Ultimate Destination for <br> Cutting-Edge Tech Solutions

      </h2>
    </div>
      <button class="cta">
    <router-link to="/products" class="text-decoration-none"><span class="hover-underline-animation"> Shop now </span></router-link>
    <svg viewBox="0 0 46 16" height="20" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
        <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
    </svg>
</button>

    <center>
      <h2 class="h-02">Shop By Category</h2>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 justify-content-center gap-6">
        <div class="col">
        <div class="card">
<div class="card-img"><img src="https://i.postimg.cc/cCMB2yz5/Screenshot-2023-08-30-110650.png" alt="" class="img-01"></div>
  <div class="card-info">
    <div class="card-text">
      <p class="text-title">PC&Monitor</p>
      <p class="text-subtitle">Category</p>
    </div>
    <div class="card-icon">
      <svg viewBox="0 0 28 25" class="icon">
        <path d="M13.145 2.13l1.94-1.867 12.178 12-12.178 12-1.94-1.867 8.931-8.8H.737V10.93h21.339z"></path>
      </svg>
    </div>
  </div>
</div>
      </div>
        <div class="col">
        <div class="card">
<div class="card-img"><img src="https://i.postimg.cc/9X9vBLW6/Screenshot-2023-08-30-111525.png" alt="" class="img-01"></div>
  <div class="card-info">
    <div class="card-text">
      <p class="text-title1">Laptops</p>
      <p class="text-subtitle">Category</p>
    </div>
    <div class="card-icon">
      <svg viewBox="0 0 28 25" class="icon">
        <path d="M13.145 2.13l1.94-1.867 12.178 12-12.178 12-1.94-1.867 8.931-8.8H.737V10.93h21.339z"></path>
      </svg>
    </div>
  </div>
</div>
      </div>
        <div class="col">
        <div class="card">
<div class="card-img"><img src="https://i.postimg.cc/rs2pngKf/COMPUTER-accessories-1024x576.jpg" alt="" class="img-01"></div>
  <div class="card-info">
    <div class="card-text">
      <p class="text-title">Accessories</p>
      <p class="text-subtitle">Category</p>
    </div>
    <div class="card-icon">
      <svg viewBox="0 0 28 25" class="icon">
        <path d="M13.145 2.13l1.94-1.867 12.178 12-12.178 12-1.94-1.867 8.931-8.8H.737V10.93h21.339z"></path>
      </svg>
    </div>
  </div>
</div>
      </div>

    </div>
    </center>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>

.home {
  background-color: #312e81;
  height: 100%;
  background-attachment: fixed;
}
.categories {
  margin-top: 6.8rem;
  color: gold;
}
.Information {
  margin-top: 2.8rem;
  color: gold;
}

.card {
  margin-bottom: 4rem !important;
  width: 250px;
  height: 294px;
  position: relative;
  border-radius: 16px;
  background: #f5f5f500;
  box-shadow: rgb(35, 35, 35) 0px 2px 16px 8px;
  transition: box-shadow 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
  cursor: pointer;
}

.card-img {
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: #6eee8800;
}

.img-01 {
  width: 19rem;
  height: 19.1rem;
}

.card-info {
  position: absolute;
  width: 100%;
  bottom: 2%;
  left: 2%;
  padding: 1rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}

.card-icon {
  opacity: 0;
  transform: translateX(-20%);
  width: 2em;
  height: 2em;
  transition: all 0.3s ease-in-out;
}

.icon {
  fill: white;
  --size: 20px;
  width: var(--size);
  height: var(--size);
}

/*Text*/
.card-text p {
  line-height: 140%;
  /*Delete this line for multi-line text*/
  white-space: nowrap;
}

.text-title {
  font-weight: 900;
  font-size: 1.2rem;
  color: rgb(255, 255, 255);
}

.text-title1 {
  font-weight: 900;
  font-size: 1.3rem;
  color: rgb(255, 255, 255);
  margin-left: -25px;
}
.text-subtitle {
  color: rgb(255, 255, 255);
  font-weight: 500;
  margin-top: -16px;
  margin-left: -10px;
  font-size: 1.5rem;
}

/*Hover*/
.card:hover {
  box-shadow: rgb(255, 255, 255) 0px 2px 16px 8px;
  transform: scale(1.2);
  transition: ease-in-out 2s;
}

.card:hover .card-icon {
  opacity: 1;
  transform: translateX(20%);
}

.hero {
  position: relative;
}

.cta {
  position: absolute;
  top: 80%;
  left: 14%;
  transform: translate(-50%, -50%);
  border: none;
  background: none;
}

.cta span {
  padding-bottom: 7px;
  letter-spacing: 4px;
  font-size: 2rem;
  padding-right: 15px;
  text-transform: uppercase;
}

.cta svg {
  transform: translateX(-8px);
  transition: all 0.3s ease;
}

.cta:hover svg {
  transform: translateX(0);
}

.cta:active svg {
  transform: scale(0.9);
}

.hover-underline-animation {
  position: relative;
  color: rgb(255, 255, 255);
  padding-bottom: 20px;
}

.hover-underline-animation:after {
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #ffffff;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.cta:hover .hover-underline-animation:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

#arrow-horizontal {
  width: 3rem;
  margin-bottom: 1rem;
  fill: white;
}

.heroimg {
  position: relative;
  border-radius: 1rem;
  right: 30%;
  object-fit: cover;
  clip-path: polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%);
}

.hero-content {
  display: flex;
  align-items: center;
}

.hero-text {
  left: 32%;
  position: absolute;
  color: #fff;
  font-size: 4rem; 
  bottom: 50%;
}
</style>
