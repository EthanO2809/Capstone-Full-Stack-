<template>
  <nav class="navbar navbar-expand-lg navbarr">
  <div class="container-fluid">
    <a class="navbar-brand text-white" href="#"><img src="https://i.postimg.cc/nrZ260G3/14-removebg-preview.png" alt="" class="img-01"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 flex">
        <li class="nav-item">
          <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">AboutUs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">ContactUs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">Admin</a>
        </li>
      </ul>
    </div>
        <a class="nav-link text-white" href="/">ShopUs</a>
        <a class="nav-link text-white" href="/"><img src="https://i.postimg.cc/T16mtZ7N/pngwing-com-29.png" alt="" class="img-02"></a>
      </div>
</nav>
</template>

<script>
export default {};
</script>

<style scoped>
.bgs {
  background-color: rgb(0, 0, 176);
}

.img-01 {
  width: 7.4rem;
  height: 7rem;
}

.navbarr {
  background-color: #312e81 !important;
  position: relative;
  font-size: 1.6rem;
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