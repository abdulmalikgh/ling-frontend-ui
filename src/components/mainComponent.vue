<template>
    <div class="row justify-content-center card-container">

        <div class="col-md-6 my-card">

            <div class="row justify-content-center ">

                <div class="col-4 col-md-4 col-lg-4 image-container">
                    <img src="../assets/矩形备份_@3x.png" class="img-fluid" alt="">
                </div>
                <div class="col-4 col-md-4 col-lg-4 description-container ">
                    <h2 class="title">My Hometown</h2>
                    <p class="actors">Actors: a b c d</p>
                    <p class="ratings"></p>
                    <div class="btns">
                        <button class="action">Action</button>
                        <button class="lovo">Lovo</button>
                        <button class="com">Com</button>
                    </div>
                </div>
                <div class=" col-4 col-md-4 col-lg-4 button-container ">
                    <button>
                        Pre
                    </button>
                    <button>
                        Buy
                    </button>
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
.card-container{
    border-radius: 20px 20px 0px 0px;
    background: #FFFFFF;
    padding:2em 12%;
}
.my-card{
    background:#fff;
    border: 2px solid black;
    box-shadow: rgba(0,0,0,.5);
}
.image-container{
    border-radius: 10px;

}
</style>