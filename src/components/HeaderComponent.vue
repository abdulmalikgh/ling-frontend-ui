<template>
    <div class="row justify-content-center inner-content-wrapper">
      <div class="col-5 col-md-5 col-lg-5 side-one">
        <div class="row side-one-inner">
          <div class="col-12 col-md-12 col-lg-12">
             <button class="arrow-btn"><i  class="fas fa-long-arrow-alt-left"></i></button>
              <ul class="pt-5">
                <li class="first"><a class="active" href="">Hot</a> <span class="underline"> </span> </li>
                <li><a href="" class="soon">Soon</a></li>
              </ul>
          </div>
        </div>
      </div>
      <div class="col-3 col-md-3 col-lg-3 side-two">
        <p>熱售中</p>
      </div>
      <div class="col-4 col-md-4 col-lg-4 side-three"></div>
    </div>
</template>

<script>

export default {

}
</script>

<style scoped>
.inner-content-wrapper{
  height: 300px
}



/* curved sides */

.side-one{
  background-color: #303137;
}
.side-one-inner{
 background-color:#3a3b41;
 border-top-right-radius: 100px;
 border-bottom-right-radius: 100px;
 height: 300px;
 padding-top: 2em;
}
.side-two{
  padding-top:2em;
  background-color: #303137;
  border-top-right-radius: 200px;
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
button{
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
ul > li:first-of-type{
  padding-right:30px
}
ul li {
  display: inline;
  /* padding: 38px 22px;  */
  position: relative;
}
.soon {
  opacity: 0.5;
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
  font-size: 16px;
}
p{
  color: #FFFFFF;
  font-family: PingFang SC;
  font-weight: medium;
  font-size: 16px;
  line-height: normal;
  letter-spacing: 0px;
  text-align: left;
}
@media screen and (max-width:768px) {

}
@media screen and (max-width:376px) {
  ul > li:first-of-type{
  padding-right:12px
}
}
</style>