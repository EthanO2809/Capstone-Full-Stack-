<template>
    <div class="footer">
        <div class="container">
    <div class="row justify-content-center">
        <div class="col-sm-4 col-md-3 item">
            <img src="https://i.postimg.cc/g0RxWngQ/14-removebg-preview.png" loading="lazy" alt="logo" class="logo img-fluid">
        </div>
        <div class="col-sm-4 col-md-3 item">
            <h3>Account</h3>
            <br>
            <ul>
                <li><a class="text-white" href="/products"><p class="text-white">My Account</p></a></li><br>
                <li><a href="./html/test.html"><p class="text-white">My Orders</p></a></li><br>
                <li><a href="/contact"><p class="text-white">Log in || Register</p></a></li>
            </ul>
        </div>
        <div class="col-sm-4 col-md-3 item">
            <h3>What We Offer</h3>
            <br>
            <ul class="text-white">
                <li><a href="/about"><p class="text-white">PC / Monitor Range</p></a></li><br>
                <li><a href="#"><p class="text-white">Laptop Range</p></a></li><br>
                <li><a href="#"><p class="text-white">Accessories Range</p></a></li>
            </ul>
        </div>
        <div class="col-sm-4 col-md-3 item">
            <h3>Contact Us</h3>
            <br>
            <ul class="text-white fw-2">
                <li>PC_Wizard@gmail.com
                </li><br>
                <li>Tel.: 021 656 7495</li><br>
                <li>Address: 4376 Lavender Cresc. <br>
                    Cape Town, 7680</li>
            </ul>
        </div>
        <!-- <div class="conatiner">
            <div class="footer-social-icon">
                <span>Follow us</span>
                <br>
                <a href="https://www.facebook.com/pottersworkCT/" id="media" target="_blank"><img src="https://i.postimg.cc/QMwWNNN2/icons8-facebook-150.png" loading="lazy" alt="facebook" class="facebook"></a>
                <a href="https://www.instagram.com/potterswork/"  id="media" target="_blank"><img src="https://i.postimg.cc/gcRBWnkP/icons8-instagram-150.png" loading="lazy" alt="instagram" class="instagram"></a>
                <a href="https://twitter.com/LaiquahC" target="_blank" id="media"><img src="https://i.postimg.cc/63bF9JwS/icons8-twitter-150.png" loading="lazy" alt="twitter" class="twitter"></a> <br>
            </div>
            <div class="copyright">
                <p class="copyright">Sole Cartel © 2023</p>
            </div>
        </div> -->
    </div>
</div>

    </div>
        
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
li{
  font-weight: 500;
}

.footer {
    padding:10px 0;
    background-color:rgb(0, 0, 0) !important;
    color:black !important;
  }

  .footer-social-icon{
    float: right;
  }
  
  #media{
    margin:5px;
  }

  .footer h3 {
    margin-top:0;
    margin-bottom:12px;
    font-weight:bold;
    font-size:14px;
    color: gold;
  }
  
  .footer ul {
    padding:0;
    list-style:none;
    line-height:1.6;
    font-size:10px;
    margin-bottom:0;
  }
  .logo{
    height: 8rem;
    width: 8rem;
  }

  .item{
    padding: 1rem;
  }
  
  .footer ul a {
    color: black !important;
    text-decoration:none;
    opacity:0.8;
  }
  
  .footer ul a:hover {
    opacity:1;
    color: rgb(255, 255, 255) !important;
  }
  
  /* .copyright {
    color: black !important;
    display: inline-flex !important;
    justify-content: center !important;
    align-items: center !important;
    text-align: center !important;
    float: left;
  } */

 /* .instagram{
    width: 2rem;
    background-color: #fff;
 }

 .facebook{
    width: 2rem;
 }

 .twitter{
  width: 2rem;
 }
   */
</style>