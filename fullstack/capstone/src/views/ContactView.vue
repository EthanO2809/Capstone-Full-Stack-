<template>
   <div class="contact">
    <img src="https://i.postimg.cc/8Pr62dd3/1649074ecd03634e05639d767e131258.jpg" alt="" class="img-01">
    <div class="contactsec">
        <h3 class="text-center">ContactUs_</h3>
        <div class="row">
            <div class="col-6 ms">
        <label for="FullName_" class="FullName_">FullName_</label><br>
        <input type="text" class="name" placeholder="Enter Your Name"><br>
        <label for="Phone_" class="Phone_">Phone_</label><br>
        <input type="text" class="name" placeholder="Enter Your CellNo."><br>
        <label for="EmailAdd_" class="EmailAdd_">EmailAdd_</label><br>
        <input type="text" class="name" placeholder="Enter Your Email Address"><br>
        <label for="Msg_" class="Msg_">Leave Us a Message_</label><br>
        <input type="text" class="name1" placeholder="Leave Us a Message">
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
    </div>
    </div> 
</template>

<script>
export default {
    
}
</script>

<style scoped>
.contact {
    height: 100vh;
    width: 100%;
}

.img-01 {
    position: absolute;
    width: 45rem;
    height: 30rem;
    left: 28%;
    top: 25%;
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
    top: 26%;
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
</style>