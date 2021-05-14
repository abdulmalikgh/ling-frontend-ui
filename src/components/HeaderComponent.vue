<template>
   <div class="row justify-content-center inner-content-wrapper m-0">
      <div class="col-md-12 navigation">
          <h1> <button class="arrow-btn">
            <i  class="fas fa-long-arrow-alt-left"></i>
          </button> <span>熱售中</span></h1>
      </div>

      <div class="sub_navigation col-md-12">
        <ul>
          <li class=""><a class="active" href="">Hot</a> <span class="underline"> </span> </li>
          <li><a href="">Soon</a></li>
        </ul>
      </div>
    </div>
</template>

<script>

export default {

}
</script>

<style scoped>
.inner-content-wrapper{
  padding: 3rem 12%;
}
.arrow-btn{
  outline: none;
  background: transparent;
  color:#fff;
  border:none;
  float: left;
}
h1{
  color: #FFFFFF;
  font-family: PingFang SC;
  font-weight: medium;
  font-size: 16px;
  line-height: normal;
  letter-spacing: 0px;
  text-align: center;
}
ul {
  font-style: none;
  font-size: 2em;
}
ul li {
  display: inline;
  padding: 38px 22px; 
  position: relative;
}
ul li a {
  color: #FFFFFF;
  font-family: PingFang SC;
  font-weight: semibold;
  font-size: 16px;
  line-height: normal;
  letter-spacing: 0px;
  text-align: left;
  
  text-decoration: none;
 
}
ul li a.active {
  border-bottom: 2px solid #FF5353;
  padding-bottom: 5px;
}
.fa-long-arrow-alt-left{
  font-size: 1.4em;
}
@media screen and (max-width:768px) {
    .inner-content-wrapper{
        padding: 3rem 5%;
    }
}

</style>