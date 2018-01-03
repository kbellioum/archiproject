<template>
  <div class="home">
    <div id="slider" class="slider">
      <slider animation="fade" :height="windowHeight-160 + 'px'">
        <p style="line-height: 280px; font-size: 5rem; text-align: center;" v-if="!list.length">Loading...</p>
        <slider-item v-for="(i, index) in list" :key="index" :on-click="test">
          <div :style="i">
            <!-- <img :src="i.src" alt="" style="height: 100%; width: 100%;"> -->
            <!-- <p class="pills">{{ id }}</p> -->
          </div>
        </slider-item>
      </slider>
    </div>
    <!-- <div class="head1">
        <h2>Infos</h2>
    </div>
    <div class="head2">
       <h2>{{ id }}</h2>
    </div> -->
    <!-- <div class="col1">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
    <div class="col2">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div> -->
    <div href="#" id='a' class="detonator animated slideInLeft" >
       <div id="textinfo" class="">{{id}}</div>

       <div id='b' class="cible">
         <h1>Titre</h1>
         <p>
           <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione odit perferendis quidem dolorem, iste consectetur dolore? Rem qui enim modi beatae, itaque neque natus nam minima nisi sit minus inventore?</div>
         </p>
       </div>
     </div>
    <div class="">
      <!-- Some space for the scrolling -->
    </div>
  </div>
</template>

<script>
import { Slider, SliderItem } from 'vue-easy-slider'

export default {
  name: 'Home',
  props: [
    'id'
  ],
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
  computed: {
    getprojet () {
      return this.projet
    }
  },
  mounted () {
    setTimeout(() => {
      this.list = [
        { backgroundColor: '#f44336', width: '100%', height: '100%', background: 'url(\'/static/assets/homeslider/images/big/img-slider-1.jpg\') no-repeat center center', backgroundSize: '100% 100%', title: 'Projet Siège HDID' },
        { backgroundColor: '#f44336', width: '100%', height: '100%', background: 'url(\'/static/assets/homeslider/images/big/img-slider-2.jpg\') no-repeat center center', backgroundSize: '100% 100%', title: 'Projet Morocco Mall' },
        { backgroundColor: '#f44336', width: '100%', height: '100%', background: 'url(\'/static/assets/homeslider/images/big/img-slider-3.jpg\') no-repeat center center', backgroundSize: '100% 100%', title: 'Projet CIH' },
        { backgroundColor: '#f44336', width: '100%', height: '100%', background: 'url(\'/static/assets/homeslider/images/big/img-slider-4.jpg\') no-repeat center center', backgroundSize: '100% 100%', title: 'Projet Bouskoura Golf City' },
        { backgroundColor: '#f44336', width: '100%', height: '100%', background: 'url(\'/static/assets/homeslider/images/big/img-slider-5.jpg\') no-repeat center center', backgroundSize: '100% 100%', title: 'Projet Zenith Parc' }
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
body {
  overflow: visible !important;
}

.home {
  display: grid;
  grid-template: "s  s  s  s"
                 "h1 h1 h2 h2"
                 "c1 c1 c2 c2";
}

.slider {
  grid-area: s;
}

.head1 {
  grid-area: h1;
}

.head2 {
  grid-area: h2;
}

.col1 {
  grid-area: c1;
}

.col2 {
  grid-area: c2;
}

.home div h2 {
  padding: 10px;
  font-weight: 200;
  font-size: 25px;
}

.head2 h2 {
  text-align: right;
  padding-right: 10px;
}

.home div p {
  padding: 10px;
  text-align: justify;
}

.pills {
  position: absolute;
  color: #f2f2f2;
  bottom: 0;
  left: 0;
  background-color: gray;
  opacity: 0.75;
  font-size: 2rem;
  text-align: left;
  border-radius: 0  5px 5px 0;
  margin-left: 65px;
  margin-bottom: 45px;
  padding: 5px;
  border-left: 10px solid #ffe400;
  border-style:ridge;
  box-shadow: 2px 2px 5px #020202;
}
.foot {
  height: 90px;
}

.detonator {
  position: fixed;
  top: 650px;
  left: 75%;
  right: 15%;
  width: 300px;
  bottum: 10px;
  height: 20px;
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid gray;
  -webkit-transition:  height 2s, top 2s;
  transition:  height 2s, top 2s;
  transition-timing-function: ease-in;
  overflow: hidden;
  z-index: 999999999;
  color: white;
}

.cible {
  display: none;

}

.cible h1 {
  margin: 0;
  padding: 7px;
  margin-left: auto;
  margin-right: auto;
  color: white;
}

.cible div {
  text-align: justify;
  padding: 7px;
  color: white;
}

.detonator:hover {
  height: 270px;
  top: 390px;
  /* width: 300px; */
}

#a:hover > #b {
  display: block;
}
#textinfo {
  text-align: center;
  padding: 3px;
  border-bottom: 1px solid gray;
  -vendor-animation-duration: 4s;
  -vendor-animation-delay: 3s;
}

</style>
