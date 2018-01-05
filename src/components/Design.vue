<template>
  <div class="home">
    <div class="text">
      <h1>Design d'interieur</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>

        <!-- <div class="image1">
          <lightbox src="https://res.cloudinary.com/kbellioum/image/upload/v1515145261/Adrchiproject/interieur-3.jpg" caption="image1">
            <img src="https://res.cloudinary.com/kbellioum/image/upload/c_scale,h_400,w_400/v1515145261/Adrchiproject/interieur-3.jpg" alt="">
          </lightbox>
        </div>
        <div class="image2">
          <lightbox src="https://res.cloudinary.com/kbellioum/image/upload/v1515145126/Adrchiproject/interieur-2.jpg" caption="image2">
            <img src="https://res.cloudinary.com/kbellioum/image/upload/c_scale,h_400,w_400/v1515145126/Adrchiproject/interieur-2.jpg" alt="">
          </lightbox>
        </div>
        <div class="image3">
          <lightbox src="http://res.cloudinary.com/kbellioum/image/upload/v1515145104/Adrchiproject/interieur-1.jpg" caption="image3">
            <img src="http://res.cloudinary.com/kbellioum/image/upload/c_scale,h_400,w_400/v1515145104/Adrchiproject/interieur-1.jpg" alt="">
          </lightbox>
        </div> -->

  <div class="container">

    <div class="diagonal1" id="d0">
      <lightbox src="https://res.cloudinary.com/kbellioum/image/upload/v1515145104/Adrchiproject/interieur-1.jpg" caption="image1">
        <img src="http://res.cloudinary.com/kbellioum/image/upload/c_scale,h_450,w_650/v1515145104/Adrchiproject/interieur-1.jpg" alt="">
        <p class="overlay">
        TEST
        </p>
      </lightbox>



    </div>

    <div class="diagonal2" id="d1">
      <lightbox src="https://res.cloudinary.com/kbellioum/image/upload/v1515145261/Adrchiproject/interieur-3.jpg" caption="image3">

      <img src="http://res.cloudinary.com/kbellioum/image/upload/c_scale,h_570,w_770/v1515145261/Adrchiproject/interieur-3.jpg" alt="">

      <p class="overlay">
      TEST
      </p>
      </lightbox>
    </div>

    <div class="diagonal3" id="d2">
      <lightbox src="https://res.cloudinary.com/kbellioum/image/upload/v1515145126/Adrchiproject/interieur-2.jpg" caption="image2">

        <img src="https://res.cloudinary.com/kbellioum/image/upload/c_scale,h_450,w_650/v1515145126/Adrchiproject/interieur-2.jpg" alt="">

        <p class="overlay">
        TEST
        </p>
        </lightbox>
    </div>

</div>





    <!-- <img src="http://via.placeholder.com/1024x500?text=Design+Interieur" alt=""> -->
  </div>
</template>

<script>
import VueLightbox from 'vue-lightbox'

export default {
  name: 'DesignInterieur',
  data () {
    return {
      msg: ''
    }
  },
  components: {
    Lightbox: VueLightbox
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.home {
  display: grid;
  grid-template: "t t t"
                 "im im im";
  grid-gap: 20px;
  /* justify-content: center; */
}

.container {
  grid-area: im;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 2px 2px 5px gray;
}


.text {
  grid-area: t;
}

.image1 {
  grid-area: im1;
}

.image2 {
  grid-area: im2;
}

.image3 {
  grid-area: im3;
}

/* .home div img {
  width: 100%;
  box-shadow: 2px 2px 5px gray;
} */

.text h1 {
  font-weight: 200;
  font-size: 25px;
  padding-left: 10px;
  padding-top: 10px;
}
.text p {
  padding: 10px;
  font-weight: 100;
  text-align: justify;
}

.lightboxOverlay {
  z-index: 9999999 !important;
}

.lightbox {
  z-index: 99999999 !important;
}
/*
** Diagonal Slice Images
*/

.container {
  width: 1400px;
  height: 400px;
  background: white;
  overflow: hidden;
  position: relative;
  // margin-left: 100px;
}
.container .diagonal1 {
  height: 558px;
  width: 500px;
  overflow: hidden;
  -moz-transform: rotate(25deg);
  -ms-transform: rotate(25deg);
  -webkit-transform: rotate(25deg);
  transform: rotate(25deg);
  position: absolute;
  top: -132px;
}
.container .diagonal2 {
  height: 909px;
  width: 500px;
  overflow: hidden;
  -moz-transform: rotate(25deg);
  -ms-transform: rotate(25deg);
  -webkit-transform: rotate(25deg);
  transform: rotate(25deg);
  position: absolute;
  top: -152px;
  margin-left: 343px;
}
.container .diagonal3 {
  height: 909px;
  width: 529px;
  overflow: hidden;
  -moz-transform: rotate(25deg);
  -ms-transform: rotate(25deg);
  -webkit-transform: rotate(25deg);
  transform: rotate(25deg);
  position: absolute;
  top: -152px;
  margin-left: 895px;
}
.container .diagonal1 img {
  -moz-transform: rotate(-25deg);
  -ms-transform: rotate(-25deg);
  -webkit-transform: rotate(-25deg);
  transform: rotate(-25deg);
  margin-top: 85px;
  margin-left: -29px;
}
.container .diagonal2 img {
  -moz-transform: rotate(-25deg);
  -ms-transform: rotate(-25deg);
  -webkit-transform: rotate(-25deg);
  transform: rotate(-25deg);
  margin-top: -25px;
  margin-left: -161px;
}

.container .diagonal3 img {
  -moz-transform: rotate(-25deg);
  -ms-transform: rotate(-25deg);
  -webkit-transform: rotate(-25deg);
  transform: rotate(-25deg);
  margin-top: 163px;
  margin-left: -103px;
}
.container .diagonal1 .overlay {
  -moz-transform: rotate(-25deg);
  -ms-transform: rotate(-25deg);
  -webkit-transform: rotate(-25deg);
  transform: rotate(-25deg);
  height: 1200px;
  width: 800px;
  position: absolute;
  top: -50px;
  left: 0;
  background: black;
  opacity: 0;
  color: white;
  -webkit-transition: opacity .5s;
  vertical-align: middle;
  text-align: center;
}
.container .diagonal2 .overlay {
  -moz-transform: rotate(-25deg);
  -ms-transform: rotate(-25deg);
  -webkit-transform: rotate(-25deg);
  transform: rotate(-25deg);
  height: 1200px;
  width: 800px;
  position: absolute;
  top: -50px;
  left: -1px;
  background: black;
  opacity: 0;
  color: white;
  -webkit-transition: opacity .5s;
  vertical-align: middle;
  text-align: center;
  margin-left: -12px;
}
.container .diagonal3 .overlay {
  -moz-transform: rotate(-25deg);
  -ms-transform: rotate(-25deg);
  -webkit-transform: rotate(-25deg);
  transform: rotate(-25deg);
  height: 1200px;
  width: 800px;
  position: absolute;
  top: -50px;
  left: -1px;
  background: black;
  opacity: 0;
  color: white;
  -webkit-transition: opacity .5s;
  vertical-align: middle;
  text-align: center;
  margin-left: -12px;
}
.container .diagonal1 .overlay:hover {
  opacity: .4;
}
.container .diagonal2 .overlay:hover {
  opacity: .4;
}
.container .diagonal3 .overlay:hover {
  opacity: .4;
}


.container .diagonal1#d0 {
  left: -135px;
}

.container .diagonal2#d1 {
  left: 1px;
}


</style>
