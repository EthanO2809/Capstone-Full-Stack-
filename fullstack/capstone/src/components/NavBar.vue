<template>
  <nav class="navbar navbar-expand-lg fixed-top">
  <div class="container-fluid navbarr ">
    <a class="navbar-brand text-white" href="#"><img src="https://i.postimg.cc/nrZ260G3/14-removebg-preview.png" alt="" class="img-01"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 flex">
        <li class="nav-item">
          <router-link to="/Register">Register</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Login">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about">AboutUs</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact">ContactUs</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/admin">Admin</router-link>
        </li>
      </ul>
    </div>
        <a class="nav-link text-white" href="/products">ShopUs</a>
        <router-link to="/cart"><img src="https://i.postimg.cc/T16mtZ7N/pngwing-com-29.png" alt="" class="img-02"></router-link>
      </div>
</nav>
</template>

<script>
export default {
  
};
</script>

<style scoped>

.img-01 {
  width: 7.4rem;
  height: 7rem;
}

a {
  text-decoration: none !important;
  color: white !important;
}

.navbarr {
  backdrop-filter: blur(8px);
  background: rgba(255, 255, 255, 0);
  position: relative;
  font-size: 1.6rem;
  margin-top: 0px;
  padding-top: 0px;
  font-weight: 700;
  width: 100%;
  opacity: 100% !important;
  box-shadow: none !important;
}

.flex{
  display: flex;
  justify-content: flex-end;
  width: 65%;
}

li{
  padding: 1.5rem;
}

.img-02{
  width: 3rem;
  height: 3.4rem;
}

.dd{
  margin-right: 2rem;
}

.nav-item {
  color: #e1e1e1;
  font-family: inherit;
  font-size: 1.4rem;
  font-weight: 600;
  cursor: pointer;
  position: relative;
  border: none;
  background: none;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 400ms;
  transition-property: color;
}

.nav-item:focus,
.nav-item:hover {
  color: #fff;
}

.nav-item:focus:after,
.nav-item:hover:after {
  width: 100%;
  left: 0%;
}

.nav-item:after {
  content: "";
  pointer-events: none;
  bottom: 18px;
  left: 50%;
  position: absolute;
  width: 0%;
  height: 2px;
  background-color: #fff;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 400ms;
  transition-property: width, left;
}

.nav-link {
  position: relative;
  right: 10%;
  margin-right: 2rem;
}

@import url("https://fonts.cdnfonts.com/css/khula");
</style>