<template>
<nav class="navbar bg-black fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src="https://i.postimg.cc/mZ6w69MS/14.jpg" alt="" class="img01"></a>
    <h2>PC Wizard</h2>
    <a href="#" class="login"><p>Register || Log In</p></a>
    <button class="navbar-toggler bgs" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex mt-3" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {

}
</script>

<style scoped>
.bgs{
  background-color: rgb(0, 0, 176);
}

h2{
  color: gold;
  font-family: 'Khula', sans-serif;
  font-weight: bolder;
  font-size: 2.4rem;
}
.login{
  color: white;
  text-align: right;
}

.img01{
  width: 5.8rem;
  height: 5.2rem
}

@import url('https://fonts.cdnfonts.com/css/khula');
</style>