<template>
  <div class="parallax">

    <section>
      <canvas id='beerCanvas'></canvas>
      <div class="coming_content">
        <h1>En Construction</h1>
        <div class="separator_container">
          <div class="separator line_separator">
            <span>
              <!-- <svg xmlns="http://www.w3.org/2000/svg" width="320.864" height="320.864" viewBox="0 0 320.864 320.864">
                <path fill="#fff" d="M184.04 81.83c-1.89-5.1-3.46-28.63-3.926-55.05-.003-.1.107-.37.514-.37 2.092-.125 3.248-1.79 3.248-3.91V4c0-2.2-1.8-4-4-4H140.99c-2.2 0-4 1.8-4 4v18.5c0 2.123 1.06 3.77 3.152 3.89.673 0 .613.478.61.673-.463 26.677-2.035 49.67-3.925 54.77-11.12 29.993-35.884 27.39-35.884 63.393V273.96c0 49.536 24.92 47.044 59.49 46.82 34.57.224 59.49 2.716 59.49-46.82V145.226c0-36.002-24.764-33.4-35.883-63.394zm12.89 127.953c-5.845 8.89-31.005 30.02-36.458 30.02-5.338 0-30.727-21.21-36.532-30.02-2.907-4.41-4.97-9.277-4.627-15.678.605-11.325 9.866-20.678 21.208-20.678 11.66 0 18.45 12.44 19.915 12.44 1.675 0 8.755-12.44 19.914-12.44 11.34 0 20.6 9.353 21.206 20.678.342 6.4-1.713 11.247-4.627 15.678z"/>
              </svg> -->
              <i class="fa fa-building-o" aria-hidden="true"></i>
            </span>
          </div>
        </div>
        <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
      </div>
    </section>



<!-- Articles from here -->


    <!-- <div class="ce" v-for="article in articles">
      <div class="row">
        <div class="image">
          <img width="250px" height="200px" :src="article.image" alt="article.title">
        </div>
        <div class="txt">
          <h1>{{article.title}}</h1><br>
          <p>
            {{article.txt}}
          </p>
        </div>
        <div class="more">
          <p>
            <a :href="article.link">Lire la suite</a>
          </p>
        </div>
      </div>

    </div>

    <div class="foot">
    </div> -->

  </div>
</template>

<script>
export default {
  name: 'Nouveautes',
  data () {
    return {
      msg: ''
    }
  },
  computed: {
    articles () {
      return this.$store.getters.getNouveautes
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  overflow: visible !important;
}
.row {
  display: grid;
  grid-template: "im1 txt1 txt1 txt1"
                 "im1 f1 f2 f3";
  /* grid-auto-rows: 50px; */
  grid-gap: 10px;
  border: 1px solid rgba(200, 200, 200, 0.5);
  background-color: rgba(100, 100, 100, 0.5);
}

.enconstruction {
  position: absolute;
  margin-left: 35%;
  margin-right: 35%;
  text-align: center;
  margin-top: 35%;
  margin-bottom: 35%;
}

.ce {
  padding: 20px;
}

.image {
  grid-area: im1;
  padding: 5px;
}
.image img {
  box-shadow: 2px 2px 5px black;
}
.txt {
  grid-area: txt1;
  padding: 3px;
  color: white;
}

.txt p {
  padding: 10px;
  text-align: justify;
}

.txt h1 {
  font-weight: 200;
  font-size: 25px;
  padding-left: 10px;
  padding-top: 5px;
}

.more {
  grid-area: f3;
  justify-self: center;
}

.more a {
  text-decoration: none;
  padding-right: 10px;
  color: white;
  cursor: pointer;
}

.more a:hove {
  color: gray;
}
.parallax {
    /* The image used */
    /* background-image: url("https://res.cloudinary.com/kbellioum/image/upload/v1514542698/Adrchiproject/Stade_exte%CC%81rieur_vu_depuis_le_parvis_haut.jpg"); */
    /* background-image: url("https://res.cloudinary.com/kbellioum/image/upload/v1516299593/258341_background_image_tyx0t4.jpg"); */
    background-image: url("https://res.cloudinary.com/kbellioum/image/upload/v1516302763/cubes_abstract-wide_oh0g40.jpg");


    /* https://res.cloudinary.com/kbellioum/image/upload/v1516299593/258341_background_image_tyx0t4.jpg */
    /* Set a specific height */
    min-height: 665px;
    /* min-height: 500px; */
    /* height: 100vh; */

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.foot {
  height: 100px;
}


/* Coming soon page CSS */

@import url(https://fonts.googleapis.com/css?family=Montserrat);
@font-face {
  font-family: 'bebas_neueregular';
  src: url("https://dl.dropboxusercontent.com/u/81135676/bebasneue_regular-webfont.eot");
  src: url("https://dl.dropboxusercontent.com/u/81135676/bebasneue_regular-webfont.woff2") format("woff2"), url("https://dl.dropboxusercontent.com/u/81135676/bebasneue_regular-webfont.woff") format("woff"), url("https://dl.dropboxusercontent.com/u/81135676/bebasneue_regular-webfont.ttf") format("truetype"), url("https://dl.dropboxusercontent.com/u/81135676/bebasneue_regular-webfont.svg#bebas_neueregular") format("svg");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'bebas_neuebold';
  src: url("https://dl.dropboxusercontent.com/u/81135676/bebasneue_bold-webfont.eot");
  src: url("https://dl.dropboxusercontent.com/u/81135676/bebasneue_bold-webfont.woff2") format("woff2"), url("https://dl.dropboxusercontent.com/u/81135676/bebasneue_bold-webfont.woff") format("woff"), url("https://dl.dropboxusercontent.com/u/81135676/bebasneue_bold-webfont.ttf") format("truetype"), url("https://dl.dropboxusercontent.com/u/81135676/bebasneue_bold-webfont.svg#bebas_neuebold") format("svg");
  font-weight: normal;
  font-style: normal;
}
body, html {
  display: block;
  padding: 0;
  margin: 0;
  width: 100%;
  position: relative;
  height: 100%;
}

body {
  font-family: "bebas_neuebold", "Arial", sans-serif;
}

section {
  position: relative;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, #FBB600, #DA5900);
}

#beerCanvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
}

.coming_content {
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  width: 70%;
  margin: 0 auto;
  color: white;
  text-align: center;
  z-index: 101;
}
.coming_content h1 {
  font-size: 5.625em;
  margin: 0;
  letter-spacing: 2px;
  text-align: center;
  color: white;
}
.coming_content .separator_container {
  width: 100%;
  display: block;
  text-align: center;
  position: relative;
  margin: 12px 0;
}
.coming_content .separator_container:before, .coming_content .separator_container:after {
  display: table;
  content: "";
}
.coming_content .separator_container:after {
  clear: both;
}
.coming_content .separator {
  color: white;
  margin: 0 auto 1em;
  width: 11em;
}
.coming_content .line_separator svg {
  width: 30px;
  height: 20px;
}
.coming_content .line_separator:before, .coming_content .line_separator:after {
  display: block;
  width: 40%;
  content: " ";
  margin-top: 14px;
  border: 1px solid white;
}
.coming_content .line_separator:before {
  float: left;
}
.coming_content .line_separator:after {
  float: right;
}
.coming_content h3 {
  font-family: "Montserrat", sans-serif;
  letter-spacing: 2px;
  line-height: 2;
  font-size: 1em;
  font-weight: 400;
  text-align: center;
  margin: 0;
}
.coming_content h3 a {
  text-decoration: underline;
}


</style>
