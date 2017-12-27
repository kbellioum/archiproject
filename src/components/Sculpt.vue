<template>
  <div class="home">
    <div class="text">
        <h1>Sculpture & Art</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          <br>
          <br>
          - L'institutionnel, <br>
          - L'hospitalier, <br>
          - L'éducatif, <br>
          - La restauration, <br>
          - Le résidentiel...
        </p>
    </div>
      <!-- <img src="http://via.placeholder.com/1024x500?text=Architecture" alt=""> -->
      <div class="slid">
        <div id="slider">
          <slider animation="normal" :height="windowHeight-175 + 'px'" :control-btn="false" indicators="right">
            <p style="line-height: 280px; font-size: 5rem; text-align: center;" v-if="!list.length">Loading...</p>
            <slider-item v-for="(i, index) in list" :key="index" :on-click="test">
              <div :style="i">
                <!-- <img :src="i.src" alt="" style="height: 100%; width: 100%;"> -->
                <!-- <p class="pills">{{ i.title }}</p> -->
              </div>
            </slider-item>
          </slider>
        </div>
      </div>
  </div>
</template>

<script>
import { Slider, SliderItem } from 'vue-easy-slider'
export default {
  name: 'Sculpture & Art',
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
        { backgroundColor: '#f44336', width: '100%', height: '100%', background: 'url(\'../src/assets/images/drafts/1.jpg\') no-repeat center center', backgroundSize: '100% 100%', title: 'Projet Siège HDID' },
        { backgroundColor: '#f44336', width: '100%', height: '100%', background: 'url(\'../src/assets/images/drafts/2.jpg\') no-repeat center center', backgroundSize: '100% 100%', title: 'Projet Morocco Mall' },
        { backgroundColor: '#f44336', width: '100%', height: '100%', background: 'url(\'../src/assets/images/drafts/3.jpg\') no-repeat center center', backgroundSize: '100% 100%', title: 'Projet CIH' },
        { backgroundColor: '#f44336', width: '100%', height: '100%', background: 'url(\'../src/assets/images/drafts/4.jpg\') no-repeat center center', backgroundSize: '100% 100%', title: 'Projet Bouskoura Golf City' },
        { backgroundColor: '#f44336', width: '100%', height: '100%', background: 'url(\'../src/assets/images/drafts/5.jpg\') no-repeat center center', backgroundSize: '100% 100%', title: 'Projet Zenith Parc' },
        { backgroundColor: '#f44336', width: '100%', height: '100%', background: 'url(\'../src/assets/images/drafts/6.jpg\') no-repeat center center', backgroundSize: '100% 100%', title: 'Projet Zenith Parc' },
        { backgroundColor: '#f44336', width: '100%', height: '100%', background: 'url(\'../src/assets/images/drafts/7.jpg\') no-repeat center center', backgroundSize: '100% 100%', title: 'Projet Zenith Parc' },
        { backgroundColor: '#f44336', width: '100%', height: '100%', background: 'url(\'../src/assets/images/drafts/8.jpg\') no-repeat center center', backgroundSize: '100% 100%', title: 'Projet Zenith Parc' },
        { backgroundColor: '#f44336', width: '100%', height: '100%', background: 'url(\'../src/assets/images/drafts/9.jpg\') no-repeat center center', backgroundSize: '100% 100%', title: 'Projet Zenith Parc' },
        { backgroundColor: '#f44336', width: '100%', height: '100%', background: 'url(\'../src/assets/images/drafts/10.jpg\') no-repeat center center', backgroundSize: '100% 100%', title: 'Projet Zenith Parc' },
        { backgroundColor: '#f44336', width: '100%', height: '100%', background: 'url(\'../src/assets/images/drafts/11.jpg\') no-repeat center center', backgroundSize: '100% 100%', title: 'Projet Zenith Parc' },
        { backgroundColor: '#f44336', width: '100%', height: '100%', background: 'url(\'../src/assets/images/drafts/12.jpg\') no-repeat center center', backgroundSize: '100% 100%', title: 'Projet Zenith Parc' },
        { backgroundColor: '#f44336', width: '100%', height: '100%', background: 'url(\'../src/assets/images/drafts/13.jpg\') no-repeat center center', backgroundSize: '100% 100%', title: 'Projet Zenith Parc' },
        { backgroundColor: '#f44336', width: '100%', height: '100%', background: 'url(\'../src/assets/images/drafts/14.jpg\') no-repeat center center', backgroundSize: '100% 100%', title: 'Projet Zenith Parc' },
        { backgroundColor: '#f44336', width: '100%', height: '100%', background: 'url(\'../src/assets/images/drafts/15.jpg\') no-repeat center center', backgroundSize: '100% 100%', title: 'Projet Zenith Parc' },
        { backgroundColor: '#f44336', width: '100%', height: '100%', background: 'url(\'../src/assets/images/drafts/16.jpg\') no-repeat center center', backgroundSize: '100% 100%', title: 'Projet Zenith Parc' }
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

.home {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 1px;
  grid-auto-rows: minmax(50px, auto);
}

.text {
  grid-colum: 1;

}

.text p {
  padding: 10px;
  text-align: justify;
}

.text h1 {
  font-weight: 200;
  font-size: 25px;
  padding-left: 10px;
  padding-top: 10px;
}

.slid {
  grid-column: 2;
  width: 100%;
  /*margin: 10px;*/
  /*box-shadow: 2px 2px 5px gray;*/
}

</style>
