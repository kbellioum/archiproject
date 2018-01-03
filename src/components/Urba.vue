<template>
  <div class="home" height="100vh">
    <div class="text">
      <h1>Titre</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
        <p>Garan 12</p>
        </a> </div>
    </li>
    <li>
      <div> <a href="#">
        <h2>Victoria City</h2>
        <p>Lorem ipsum dolor sit amet</p>
        </a> </div>
    </li>
    <li>
      <div> <a href="#">
        <h2>Les Jardins de l'Ocean</h2>
        <p>Perspective d'ensemble</p>
        </a> </div>
    </li>
    <li>
      <div> <a href="#">
        <h2>Golf City</h2>
        <p>Bouskoura</p>
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
  height: 640px;
  /* height: 100%; */
}

.accordion ul li div a {
  display: block;
  height: 640px;
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
  top: 540px;
}

.accordion ul li div a p {
  top: 540px;
  font-size: 13.5px;
}

.accordion ul li:nth-child(1) { background: url("https://res.cloudinary.com/kbellioum/image/upload/c_scale,h_250,w_650/v1513766083/Victoria_city_xtinla.jpg") no-repeat center center; background-size: cover;}

.accordion ul li:nth-child(2) { background: url("https://res.cloudinary.com/kbellioum/image/upload/c_scale,h_250,w_650/v1513766081/garan12_yhwiof.jpg") no-repeat center center; background-size: cover; }

.accordion ul li:nth-child(3) { background: url("https://res.cloudinary.com/kbellioum/image/upload/c_scale,h_250,w_650/v1513766074/Perspective_d_ensemble_jdo_copie_jyfy4n.jpg") no-repeat center center; background-size: cover; }

.accordion ul li:nth-child(4) { background: url("https://res.cloudinary.com/kbellioum/image/upload/c_scale,h_250,w_650/v1513766060/plan_bgc_fu8rkw.jpg") no-repeat center center; background-size: cover; }

/* .accordion ul li:nth-child(5) { background-image: url("https://unsplash.it/650/250?image=657"); }

.accordion ul li:nth-child(6) { background-image: url("https://unsplash.it/650/250?image=661"); } */

.accordion ul:hover li { width: 8%; }

.accordion ul:hover li:hover { width: 44%; }

.accordion ul:hover li:hover a { background: rgba(0, 0, 0, 0.4); }

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
    height: 630px;
    /* height: 100%; */
  }

  .accordion ul li div a {
    display: block;
    height: 630px;
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
