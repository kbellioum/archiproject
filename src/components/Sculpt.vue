<template>
  <div class="home">
    <div class="text">
        <h1>Sculpture & Art</h1>
        <!-- <p>
          Toujours dans l'esprit artistique et conceptuel, Archidesign a voulu dévolopper ses attout dans la réalisation de plusieurs sculptures qui s'inscrivent dans des thématiques différentes tout en faisant référence à l'activité lié au bâtiments, à l'urbanisme et à l'aménagement.
        </p> -->
        <p>
          Toujours dans l'esprit artistique et conceptuel, Archi Design a voulu développer ses atout dans la réalisation de sculptures s'inscrivant dans de différentes thématiques, tout en faisant référence à l'activité de l'agence.
        </p>
        <p>
          Etant une expression réalisée par des créations humaines , l'art rejoins l'architecture dans le sens de leur définition. Tout deux réalisés par l'homme dans une optique d'organisation spatiale. En effet, l'architecture est un art fonctionnel et nécessaire aux activités humaines.
        </p>
        <p>
          L'art et l'architecture se rejoignent dans le fait de conceptualiser, d'innover, de réaliser et de mettre en valeur un objet spécifique.
        </p>
        <p>
          La pratique de cet art à trois dimensions consiste à concevoir des corps palpables à base de différents matériaux: bois, fer, résine.. dans le but de donner une identité au lieu d'exposition de ces sculptures.
        </p>
    </div>
      <!-- <img src="http://via.placeholder.com/1024x500?text=Architecture" alt=""> -->
      <div class="slid">
        <div id="slider">
          <slider animation="normal" :height="windowHeight-135 + 'px'" :control-btn="false" indicators="right">
            <p style="line-height: 280px; font-size: 5rem; text-align: center;" v-if="!list.length">Loading...</p>
            <slider-item v-for="(i, index) in list" :key="index" :on-click="test">
              <div :style="i">
                <!-- <img :src="i.src" alt="" style="height: 100vh; width: 100%;"> -->
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
        { backgroundColor: '#f44336', width: '100%', height: '100%', src: 'https://res.cloudinary.com/kbellioum/image/upload/v1515141854/Adrchiproject/Scuplture_01.jpg', background: 'url(\'https://res.cloudinary.com/kbellioum/image/upload/v1515141854/Adrchiproject/Scuplture_01.jpg\') no-repeat center center', backgroundSize: 'cover', title: '' },
        { backgroundColor: '#f44336', width: '100%', height: '100%', src: 'https://res.cloudinary.com/kbellioum/image/upload/v1515141854/Adrchiproject/Scuplture_02.jpg', background: 'url(\'https://res.cloudinary.com/kbellioum/image/upload/v1515141854/Adrchiproject/Scuplture_02.jpg\') no-repeat center center', backgroundSize: 'cover', title: '' },
        { backgroundColor: '#f44336', width: '100%', height: '100%', src: 'https://res.cloudinary.com/kbellioum/image/upload/v1515141853/Adrchiproject/Scuplture_03.jpg', background: 'url(\'https://res.cloudinary.com/kbellioum/image/upload/v1515141853/Adrchiproject/Scuplture_03.jpg\') no-repeat center center', backgroundSize: 'cover', title: '' },
        { backgroundColor: '#f44336', width: '100%', height: '100%', src: 'https://res.cloudinary.com/kbellioum/image/upload/v1515141854/Adrchiproject/Scuplture_04.jpg', background: 'url(\'https://res.cloudinary.com/kbellioum/image/upload/v1515141854/Adrchiproject/Scuplture_04.jpg\') no-repeat center center', backgroundSize: 'cover', title: '' }
        // { backgroundColor: '#f44336', width: '100%', height: '100%', background: 'url(\'../static/assets/images/drafts/5.jpg\') no-repeat center center', backgroundSize: '100% 100%', title: 'Projet Zenith Parc' },
        // { backgroundColor: '#f44336', width: '100%', height: '100%', background: 'url(\'../static/assets/images/drafts/6.jpg\') no-repeat center center', backgroundSize: '100% 100%', title: 'Projet Zenith Parc' },
        // { backgroundColor: '#f44336', width: '100%', height: '100%', background: 'url(\'../static/assets/images/drafts/7.jpg\') no-repeat center center', backgroundSize: '100% 100%', title: 'Projet Zenith Parc' },
        // { backgroundColor: '#f44336', width: '100%', height: '100%', background: 'url(\'../static/assets/images/drafts/8.jpg\') no-repeat center center', backgroundSize: '100% 100%', title: 'Projet Zenith Parc' },
        // { backgroundColor: '#f44336', width: '100%', height: '100%', background: 'url(\'../static/assets/images/drafts/9.jpg\') no-repeat center center', backgroundSize: '100% 100%', title: 'Projet Zenith Parc' },
        // { backgroundColor: '#f44336', width: '100%', height: '100%', background: 'url(\'../static/assets/images/drafts/10.jpg\') no-repeat center center', backgroundSize: '100% 100%', title: 'Projet Zenith Parc' },
        // { backgroundColor: '#f44336', width: '100%', height: '100%', background: 'url(\'../static/assets/images/drafts/11.jpg\') no-repeat center center', backgroundSize: '100% 100%', title: 'Projet Zenith Parc' },
        // { backgroundColor: '#f44336', width: '100%', height: '100%', background: 'url(\'../static/assets/images/drafts/12.jpg\') no-repeat center center', backgroundSize: '100% 100%', title: 'Projet Zenith Parc' },
        // { backgroundColor: '#f44336', width: '100%', height: '100%', background: 'url(\'../static/assets/images/drafts/13.jpg\') no-repeat center center', backgroundSize: '100% 100%', title: 'Projet Zenith Parc' },
        // { backgroundColor: '#f44336', width: '100%', height: '100%', background: 'url(\'../static/assets/images/drafts/14.jpg\') no-repeat center center', backgroundSize: '100% 100%', title: 'Projet Zenith Parc' },
        // { backgroundColor: '#f44336', width: '100%', height: '100%', background: 'url(\'../static/assets/images/drafts/15.jpg\') no-repeat center center', backgroundSize: '100% 100%', title: 'Projet Zenith Parc' },
        // { backgroundColor: '#f44336', width: '100%', height: '100%', background: 'url(\'../static/assets/images/drafts/16.jpg\') no-repeat center center', backgroundSize: '100% 100%', title: 'Projet Zenith Parc' }
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
