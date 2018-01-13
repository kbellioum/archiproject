<template>
  <div class="home" height="100vh">
    <div class="text">
      <h1>URBANISME</h1>
      <p>
        Esquisses projeArchidesign intervient également dans la planification urbaine et la réalisation du plan d'aménagement de plusieurs ville nouvelle:
      </p>
        <br>
      <p>
        - Victoria city de Garan qui, à travers sa vocation de mixité urbaine l'agence a réussit à conceptualiser un plan d'aménagement ou toutes les catégories sociales pourront cohabiter ensemble. Plusieurs équipements ont été positionnés de façon à rendre cette ville attractive et éviter la contrainte de "ville fantôme" que connait actuellement toute ville nouvelle.
      </p>
        <br>
      <p>
        - Bouskoura Golf city avec le groupe Prestigia, située à quelques mètres de la forêt de Bouskoura et profitant dune verdure imprenable, Archidesign a su développer les atouts à travers la conception d'un plan d'aménagement adéquat faisant profiter toute les constructions de persés visuels sur le site naturel mitoyen. C'est en effet une ville composés de villa et résidence de haut standing et également d'un certain nombre d'équipements
      </p>
        <br>
      <p>
        - California Golf Ressort avec le groupe Palmeraie, également mitoyen à la forêt Bouskoura a été réfléchit de telle sorte à profiter du paysage naturel offert par le site. Proposant une offre  résidentielle de haut standing composé de villas et immeubles conceptualisés d'une façon moderne et raffiné.
      </p>

    </div>
    <!-- <div class="image1">
      <img src="../assets/images/urbanisme/image01.png" alt="">
    </div>
    <div class="image2">
      <img src="../assets/images/urbanisme/image02.png" alt="">
    </div>
    <div class="image3">
      <img src="../assets/images/urbanisme/image03.png" alt="">
    </div> -->

    <!-- :height="windowHeight-160 + 'px'" -->
    <div class="accordion images" height="100vh">
  <ul>
    <li>
      <div> <a href="#">
        <h2>Victoria City</h2>
        <p>Garan</p>
        </a> </div>
    </li>
    <li>
      <div> <a href="#">
        <h2>LES PINS DE BOUSKOURA</h2>
        <p>Société les pins</p>
        </a> </div>
    </li>
    <li>
      <div> <a href="#">
        <h2>California golf resort</h2>
        <p>Palmeraie développement</p>
        </a> </div>
    </li>
    <li>
      <div> <a href="#">
        <h2>Bouskoura Golf City</h2>
        <p>Prestigia</p>
        </a> </div>
    </li>
    <!-- <li>
      <div> <a href="#">
        <h2>Title 5</h2>
        <p>Description 5</p>
        </a> </div>
    </li>
    <li>
      <div> <a href="#">
        <h2>Title 6</h2>
        <p>Description 6</p>
        </a> </div>
    </li> -->
  </ul>
</div>
  </div>
</template>

<script>
export default {
  name: 'Urbanisme',
  data () {
    return {
      msg: '',
      height: '800px',
      windowWidth: 0,
      windowHeight: 0
    }
  },
  mounted () {
    this.$nextTick(() => {
      window.addEventListener('resize', this.getWindowWidth)
      window.addEventListener('resize', this.getWindowHeight)

      this.getWindowWidth()
      this.getWindowHeight()
    })
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
  grid-template: "t im im im";
  grid-gap: 0px;
}

.text {
  grid-area: t;
}

.images {
  grid-area: im;
}


.text h1 {
  font-weight: 200;
  font-size: 25px;
  padding-left: 10px;
  padding-top: 10px;
}

.text p {
  padding: 10px;
  text-align: justify;
}
/* .image1 {
  grid-area: im1;
  height: auto;
}
.image2 {
  grid-area: im2;
  height: auto;
}
.image3 {
  grid-area: im3;
  height: auto;
}


.home div img {
  height: 100%;
} */

.accordion {
  width: 100%;
  max-width: 1080px;
  /* height: 250px; */
  /* height: 100%; */
  overflow: hidden;
  /* margin: 50px auto; */
}

.accordion ul {
  width: 100%;
  /* height: auto; */
  display: table;
  table-layout: fixed;
  margin: 0;
  padding: 0;
}

.accordion ul li {
  display: table-cell;
  vertical-align: bottom;
  position: relative;
  width: 16.666%;
  /* height: 100%; */
  background-repeat: no-repeat;
  background-position: center center;
  transition: all 500ms ease;
}

.accordion ul li div {
  display: block;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  /* height: 100%; */
}

.accordion ul li div a {
  display: block;
  height: 100vh;
  /* height: 100%; */
  width: 100%;
  position: relative;
  z-index: 3;
  vertical-align: bottom;
  padding: 15px 20px;
  box-sizing: border-box;
  color: #fff;
  text-decoration: none;
  font-family: Open Sans, sans-serif;
  transition: all 200ms ease;
}

.accordion ul li div a * {
  opacity: 0;
  margin: 0;
  width: 100%;
  text-overflow: ellipsis;
  position: relative;
  z-index: 5;
  white-space: nowrap;
  overflow: hidden;
  -webkit-transform: translateX(-20px);
  transform: translateX(-20px);
  -webkit-transition: all 400ms ease;
  transition: all 400ms ease;
}

.accordion ul li div a h2 {
  font-family: Montserrat, sans-serif;
  text-overflow: clip;
  font-size: 24px;
  text-transform: uppercase;
  margin-bottom: 2px;
  top: 570px;
}

.accordion ul li div a p {
  top: 570px;
  font-size: 13.5px;
}

.accordion ul li:nth-child(1) { background: url("https://res.cloudinary.com/kbellioum/image/upload/v1515081794/Adrchiproject/VICTORIACITY.jpg") no-repeat center center; background-size: cover;}

.accordion ul li:nth-child(2) { background: url("https://res.cloudinary.com/kbellioum/image/upload/v1515081794/Adrchiproject/LESPINSDEBOUSKOURA.jpg") no-repeat center center; background-size: cover; }

.accordion ul li:nth-child(3) { background: url("https://res.cloudinary.com/kbellioum/image/upload/v1515081794/Adrchiproject/CLIFORNIAGOLFRESORT.jpg") no-repeat center center; background-size: cover; }

.accordion ul li:nth-child(4) { background: url("https://res.cloudinary.com/kbellioum/image/upload/v1515081795/Adrchiproject/BOUSKOURAGOLFCITY.jpg") no-repeat center center; background-size: cover; }

/* .accordion ul li:nth-child(5) { background-image: url("https://unsplash.it/650/250?image=657"); }

.accordion ul li:nth-child(6) { background-image: url("https://unsplash.it/650/250?image=661"); } */

.accordion ul:hover li { width: 8%; }

.accordion ul:hover li:hover { width: 44%; }

.accordion ul:hover li:hover a { background: rgba(0, 0, 0, 0.0); }

.accordion ul:hover li:hover a * {
  opacity: 1;
  -webkit-transform: translateX(0);
  transform: translateX(0);
}
@media screen and (min-height:200px) and (max-height:730px) {
  .accordion ul li div {
    display: block;
    overflow: hidden;
    width: 100%;
    height: 100vh;
    /* height: 100%; */
  }

  .accordion ul li div a {
    display: block;
    height: 100vh;
    /* height: 100%; */
    width: 100%;
    position: relative;
    z-index: 3;
    vertical-align: bottom;
    padding: 15px 20px;
    box-sizing: border-box;
    color: #fff;
    text-decoration: none;
    font-family: Open Sans, sans-serif;
    transition: all 200ms ease;
  }
}

 @media screen and (max-width: 600px) {

.accordion { height: auto; }

.accordion ul li,
.accordion ul li:hover,
.accordion ul:hover li,
.accordion ul:hover li:hover {
  position: relative;
  display: table;
  table-layout: fixed;
  width: 100%;
  -webkit-transition: none;
  transition: none;
}
}


</style>
