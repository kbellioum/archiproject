static<template>
  <div class="home">
    <div class="text">
        <h1>Architecture</h1>
        <p>
          Connu par son activité de concevoir des espaces et de bâtir des édifices, dans le respect des critères  économique, techniques, sociales, environnementales et urbanistique. Archi Design a su à travers son expérience, faire preuve de son savoir faire par la réalisation d'une panoplie de projets architecturaux.
        </p>
        <p>
          Cet art de concevoir des espaces par des techniques appropriées est maitrisé par l'équipe professionnel d'Archi Design qui, réussit à constituer des volumes protecteurs de l'homme dans les divers situations de son parcours vital.
        </p>
        <p>
          La prise en considération de plusieurs facteurs d'ordres  physiques, psychologiques, sociologiques, historiques, culturels, économiques, écologiques... fait partie des visions et de la sensibilité de l'équipe, dans le but de concevoir des espaces de dimensions adéquates et convenable à un besoins bien précis.
        </p>
        <p>
          La fonctionnalité, l'esthétique et le bien-être des futures utilisateurs sont les principaux enjeux de conception des  bâtiments réalisé par l'agence. Dans les différents domaines d'activité à savoir: l'institutionnel, l'hospitalier, l'éducatif, la restauration, le résidentiel..., l'approche est la même: Une conception idéale pour un prix concurrentiel, dans un délai de réalisation convenable.
        </p>
        <!-- <p>
          A travers son expérience, Archidesign a fait ses preuves dans la réalisation d'une panoplie de projets architecturaux de différents domaines d'activités à savoir:<br>
          <br>
          - L'institutionnel, <br>
          - L'hospitalier, <br>
          - L'éducatif, <br>
          - La restauration, <br>
          - Le résidentiel...
        </p> -->
    </div>
      <!-- <img src="http://via.placeholder.com/1024x500?text=Architecture" alt=""> -->
      <div class="slid">
        <div id="slider">
          <slider animation="fade" :height="windowHeight-135 + 'px'" :control-btn="false" indicators="right">
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
  name: 'Architecture',
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
        { backgroundColor: '#f44336', width: '100%', height: '100%', background: 'url(\'https://res.cloudinary.com/kbellioum/image/upload/v1515143718/Adrchiproject/croquis-1.png\') no-repeat center center', backgroundSize: '100% 100%', title: '' },
        { backgroundColor: '#f44336', width: '100%', height: '100%', background: 'url(\'https://res.cloudinary.com/kbellioum/image/upload/v1515143720/Adrchiproject/croquis-2.png\') no-repeat center center', backgroundSize: '100% 100%', title: '' },
        { backgroundColor: '#f44336', width: '100%', height: '100%', background: 'url(\'https://res.cloudinary.com/kbellioum/image/upload/v1515143716/Adrchiproject/croquis-3.png\') no-repeat center center', backgroundSize: '100% 100%', title: '' },
        { backgroundColor: '#f44336', width: '100%', height: '100%', background: 'url(\'https://res.cloudinary.com/kbellioum/image/upload/v1515143721/Adrchiproject/croquis-4.png\') no-repeat center center', backgroundSize: '100% 100%', title: '' }
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
  background: white;

}
.slid div {
  background-color: white;
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
  /* grid-column: 2;
  margin: 10px;
  box-shadow: 2px 2px 5px gray; */
  grid-column: 2;
  width: 100%;
}

</style>
