<template>
  <div class="main-image-card row">

      <div class="card-container">
          <div class="card-image">
              <img src="../assets/矩形备份_@3x.png" height="150" class="my-card-img" alt="">
          </div>
          <div class="card-text">
              <h2 class="title">My Hometown</h2>
                <p class="actors">Actors: a b c d</p>
                <div class="ratings mb-2">
                    <i style="color:#FFCF32;" class="fas fa-star"></i>
                    <i style="color:#FFCF32;" class="fas fa-star"></i>
                    <i style="color:#FFCF32;" class="fas fa-star"></i>
                    <i style="color:#FFCF32;" class="fas fa-star"></i>
                    <i style="color:#FFCF32;" class="far fa-star"></i>
                </div>
                <div class="btns">
                    <button class="action">Action</button>
                    <button class="lovo">Lovo</button>
                    <button class="com">Com</button>
                </div>
          </div>
          <div class="card-buttons">
              <button class="pre">
                Pre
              </button>
              <button class="buy">
                Buy
              </button>
          </div>
      </div>

      <div class="card-container">
          <div class="card-image">
              <img src="../assets/矩形备份_@3x.png" class="my-card-img" height="150" alt="">
          </div>
          <div class="card-text">
              <h2 class="title">My Hometown</h2>
                <p class="actors">Actors: a b c d</p>
                <div class="ratings mb-2">
                    <i style="color:#FFCF32;" class="fas fa-star"></i>
                    <i style="color:#FFCF32;" class="fas fa-star"></i>
                    <i style="color:#FFCF32;" class="fas fa-star"></i>
                    <i style="color:#FFCF32;" class="fas fa-star"></i>
                    <i style="color:#FFCF32;" class="far fa-star"></i>
                </div>
                <div class="btns">
                    <button class="action">Action</button>
                    <button class="lovo">Lovo</button>
                    <button class="com">Com</button>
                </div>
          </div>
          <div class="card-buttons">
                <button class="pre">
                    Pre
                </button>
                <button class="buy">
                    Buy
                </button>
          </div>
      </div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.main-image-card{
    border-radius: 20px 20px 0px 0px;
    background: #FFFFFF;
    display:flex;
    padding:2em 12%;
    justify-content: space-between;
}
.card-container{
    background:#fff;
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    width:45%;
    display: flex;
    margin:0;
    padding-bottom: 1em;
    padding-right: 0;
    padding-left: 0;
}
.card-image{
    width:30%;
    margin:0;
    padding:0;
}
.card-image img {
    /* width:100%;
    height: 100%; */
    background-position: center;
    background-size: cover;
    position:relative;
    margin-left:-10px;
}
/* description container */
.card-text{
    width:50%;
    padding-top:1em;

}
.card-text .title {
    color: #333333;
    font-family: PingFang SC;
    font-weight: medium;
    font-size: 14px;
    line-height: normal;
    letter-spacing: 0px;
}
.card-text .actors {
    color: #8B8B98;
    font-family: PingFang SC;
    font-weight: regular;
    font-size: 12px;
    line-height: normal;
    letter-spacing: 0px;
}
.card-text .ratings i{
    border-radius: 3px;
    color: #FFCF32;
}
.btns button {
    color: #FFFFFF;
    font-family: PingFang SC;
    font-weight: medium;
    font-size: 10px;
    line-height: normal;
    letter-spacing: 0px;
    text-align: left;
    border-radius: 3px;
    background: #808080;
    border:none;
    padding:5px;
    margin-right:5px;
}
/* pre and buy button contents */
.card-buttons{
    width:20%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    align-items: flex-end;
    padding-top:1em;
}
.card-buttons button{
    border:transparent;
    background:transparent;
}
.card-buttons .pre{
    color: #FF5853;
    font-family: PingFang SC;
    font-weight: regular;
    font-size: 12px;
    line-height: normal;
    letter-spacing: 0px;
    padding:5px 22px;
}
.card-buttons .buy{
    border-radius: 10px;
    background: linear-gradient(142.64deg, #FF6D53 0%, #FF5353 100%);
    color: #FFFFFF;
    font-family: PingFang SC;
    font-weight: semibold;
    font-size: 12px;
    line-height: normal;
    letter-spacing: 0px;
    padding:5px 20px;
}
@media screen and (max-width:768px) {
    .main-image-card{
        padding:2em 5%;
        flex-direction: column;
    }
}
</style>

