<template>
  <div class="home">
    <center>
      <h2 class="h-02">Shop Our Categories</h2>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 justify-content-center gap-6">
        <div class="col">
        <div class="card">
<div class="card-img"><img src="https://i.postimg.cc/cCMB2yz5/Screenshot-2023-08-30-110650.png" alt="" class="img-01"></div>
  <div class="card-info">
    <div class="card-text">
      <p class="text-title">PC & Monitor</p>
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
  height: 100vh;
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
  margin-top: 3rem;
  width: 210px;
  height: 274px;
  position: relative;
  border-radius: 16px;
  background: #f5f5f500;
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
  height: 17.1rem;
}

.card-info {
  position: absolute;
  width: 100%;
  bottom: 0;
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
  box-shadow: 0 10px 20px 4px rgba(35, 35, 35, 0.1);
}

.card:hover .card-icon {
  opacity: 1;
  transform: translateX(20%);
}
</style>
