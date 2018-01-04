<template>
  <div>
    <div id="slider">
      <slider animation="fade" :height="windowHeight-160 + 'px'">
        <p style="line-height: 280px; font-size: 5rem; text-align: center;" v-if="!list.length">Loading...</p>
        <slider-item v-for="(i, index) in list" :key="index" :on-click="test">
          <div class="image-wrap">
            <img :src="i.src" alt="">
            <p class="pills">{{ i.title }}</p>
          </div>
        </slider-item>
      </slider>
    </div>



  </div>
</template>

<script>
import { Slider, SliderItem } from 'vue-easy-slider'

export default {
  name: 'Home',
  data () {
    return {
      msg: '',
      list: [],
      windowWidth: 0,
      windowHeight: 0
    }
  },
  methods: {
    test () {
      console.log(1)
    },
    getWindowWidth (event) {
      this.windowWidth = document.documentElement.clientWidth
    },
    getWindowHeight (event) {
      this.windowHeight = document.documentElement.clientHeight
    }
  },
  mounted () {
    setTimeout(() => {
      this.list = [
        { backgroundColor: '#f44336', width: '100%', height: '100%', src: '/static/assets/homeslider/images/big/img-slider-1.jpg', background: 'url(\'/static/assets/homeslider/images/big/img-slider-1.jpg\') no-repeat center center', backgroundSize: '100% 100%', title: 'Siège HDID' },
        { backgroundColor: '#f44336', width: '100%', height: '100%', src: '/static/assets/homeslider/images/big/img-slider-2.jpg', background: 'url(\'/static/assets/homeslider/images/big/img-slider-2.jpg\') no-repeat center center', backgroundSize: '100% 100%', title: 'Morocco Mall' },
        { backgroundColor: '#f44336', width: '100%', height: '100%', src: '/static/assets/homeslider/images/big/img-slider-3.jpg', background: 'url(\'/static/assets/homeslider/images/big/img-slider-3.jpg\') no-repeat center center', backgroundSize: '100% 100%', title: 'CIH' },
        { backgroundColor: '#f44336', width: '100%', height: '100%', src: '/static/assets/homeslider/images/big/img-slider-4.jpg', background: 'url(\'/static/assets/homeslider/images/big/img-slider-4.jpg\') no-repeat center center', backgroundSize: '100% 100%', title: 'Bouskoura Golf City' },
        { backgroundColor: '#f44336', width: '100%', height: '100%', src: '/static/assets/homeslider/images/big/img-slider-5.jpg', background: 'url(\'/static/assets/homeslider/images/big/img-slider-5.jpg\') no-repeat center center', backgroundSize: '100% 100%', title: 'Zenith Parc' }
      ]
    }, 1000)
    this.$nextTick(() => {
      window.addEventListener('resize', this.getWindowWidth)
      window.addEventListener('resize', this.getWindowHeight)

      this.getWindowWidth()
      this.getWindowHeight()
    })
  },
  components: {
    Slider,
    SliderItem
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.getWindowWidth)
    window.removeEventListener('resize', this.getWindowHeight)
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.pills {
  position: absolute;
  color: #f2f2f2;
  bottom: 0;
  left: 0;
  /* background-color: gray; */
  /* opacity: 0.75; */
  font-size: 2rem;
  text-align: left;
  /* border-radius: 0  5px 5px 0; */
  margin-left: 65px;
  margin-bottom: 45px;
  padding: 5px;
  /* border-left: 10px solid #ffe400; */
  /* border-style:ridge; */
  /* box-shadow: 2px 2px 5px #020202; */
}


.image-wrap {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
}


.image-wrap img {
  width: 100%;
  animation: move 10s ease;
  /* Add infinite to loop. */

  -ms-animation: move 10s ease;
  -webkit-animation: move 10s ease;
  -0-animation: move 10s ease;
  -moz-animation: move 10s ease;
  position: absolute;
}

@-webkit-keyframes move {
  0% {
    -webkit-transform-origin: center;
    -moz-transform-origin: center;
    -ms-transform-origin: center;
    -o-transform-origin: center;
    transform-origin: center;

    transform: scale(1.2);
    -ms-transform: scale(1.2);
    /* IE 9 */

    -webkit-transform: scale(1.2);
    /* Safari and Chrome */

    -o-transform: scale(1.2);
    /* Opera */

    -moz-transform: scale(1.2);
    /* Firefox */
  }
  100% {
    transform: scale(1);
    -ms-transform: scale(1);
    /* IE 9 */

    -webkit-transform: scale(1);
    /* Safari and Chrome */

    -o-transform: scale(1);
    /* Opera */

    -moz-transform: scale(1);
    /* Firefox */
  }
}

</style>
