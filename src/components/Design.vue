<template>
  <div class="home">
    <div class="text">
      <h1>Design d'interieur</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>

        <div class="image1">
          <lightbox src="https://res.cloudinary.com/kbellioum/image/upload/v1513811573/image03_itnqzg.jpg" caption="image1">
            <img src="https://res.cloudinary.com/kbellioum/image/upload/c_scale,h_400,w_400/v1513811573/image03_itnqzg.jpg" alt="">
          </lightbox>
        </div>
        <div class="image2">
          <lightbox src="https://res.cloudinary.com/kbellioum/image/upload/v1513811554/image02_c3hh3z.jpg" caption="image2">
            <img src="https://res.cloudinary.com/kbellioum/image/upload/c_scale,h_400,w_400/v1513811554/image02_c3hh3z.jpg" alt="">
          </lightbox>
        </div>
        <div class="image3">
          <lightbox src="https://res.cloudinary.com/kbellioum/image/upload/v1513811577/image01_bx3chv.jpg" caption="image3">
            <img src="https://res.cloudinary.com/kbellioum/image/upload/c_scale,h_400,w_400/v1513811577/image01_bx3chv.jpg" alt="">
          </lightbox>
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
                 "im1 im2 im3";
  grid-gap: 20px;
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

.home div img {
  width: 100%;
  box-shadow: 2px 2px 5px gray;
}

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


</style>
