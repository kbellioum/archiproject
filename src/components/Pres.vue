<template>
  <div class="home" :height="(windowHeight-175-78) + 'px'">
    <!-- <div class="text"> -->
      <!-- <h1>Présentation de l'agence</h1> -->
        <div class="row-1" data-aos="slide-down">
          <center><h1>Presentation de l'agence</h1></center>
          <br>
        </div>

        <div class="col-1-pres">
            <p>
              Archi Design a été créé en 1985 au Canada et s’est implanté au Maroc au début des années 90.<br>
                La maîtrise du secteur du bâtiment et la passion pour l’architecture contemporaine et internationale  sont les moteurs de la création d’Archi Design.  <br>
              Aujourd’hui Archi Design est composée d'une équipe  de professionnels dans le secteur du bâtiment attirée par la passion et la rigueur indispensables à la réussite de tout projet.<br>
              Archi Design assure la maîtrise d’œuvre de tout projet dans les domaines :
            </p>
          <br>
        </div>

        <div class="col-3-1" data-aos="fade" data-aos-offset="200">
          <div class="">
            <i class="fa fa-building-o size" aria-hidden="true"></i>
          </div>
          <br>
          Architecture <br>
        </div>
        <div class="col-3-2" data-aos="fade" data-aos-offset="200">
          <div class="">
            <i class="fa fa-home size" aria-hidden="true"></i>
          </div>
          <br>
          Aménagement<br>
        </div>
        <div class="col-3-3" data-aos="fade" data-aos-offset="200">
          <div class="">
            <i class="fa fa-university size" aria-hidden="true"></i>
          </div>
          <br>
          Urbanisme  <br>
        </div>

        <div class="col-2-pres">
          <br>
            <p>
              Plusieurs services complémentaires ont été développé par le groupe afin d’offrir les réponses les mieux adaptées :<br>
            </p>
          <br>
          <ul>
            <li>&nbsp;Choix du foncier </li>
            <li>&nbsp;Etude de faisabilité et de rentabilité</li>
            <li>&nbsp;Conception architecturale</li>
            <li>&nbsp;Détail technique</li>
            <li>&nbsp;Design intérieur</li>
            <li>&nbsp;Aménagement paysager</li>
            <li>&nbsp;Coordination étude et chantier</li>
            <li>&nbsp;Maitrise d'ouvrage délégué</li>
          </ul>
          <br>
          <p>
            Archidesign offre un pack de services afin d'accompagner ses clients dans toute les démarches de construction dans le seul but de satisfaire sa clientèle à travers la performance des trois terme qui constitue sa devise:
          </p>

        </div>

        <div class="anim quality" data-aos="slide-right" data-aos-offset="200">
          <div class=""><i class="fa fa-quora size"></i></div>
          <h3 class="pills">&nbsp;Qualité:</h3>
          <br>
          <p>
            La qualité de nos conceptions ne se limite pas à leur esthétique ou leur design.
            C’est aussi une architecture pragmatique où prime  fonctionnalité et de l’ergonomie.
          </p>
        </div>
        <div class="anim cost" data-aos="slide-up" data-aos-offset="200">
          <div class=""><i class="fa fa-usd size"></i></div>
          <h3 class="pills" >&nbsp;Coût:</h3>
          <br>
          <p>
            Nous assurons une analyse financière rigoureuse et une démarche de contrôle du coût à toute étape du projet.  
          </p>
        </div>
        <div class="anim detail" data-aos="slide-left" data-aos-offset="200">
          <div class=""><i class="fa fa-cog size"></i></div>
          <h3 class="pills">&nbsp;Délais:</h3>
          <br>
          <p>
            Pour respecter et minimiser les délais, nos coordinateurs contrôlent tous les projets en temps réel
          </p>
        </div>
    <!-- </div> -->
    <div class="photo">
      <img src="https://res.cloudinary.com/kbellioum/image/upload/v1513604913/Sans_titre-1_mcujyn.jpg" alt="">
    </div>

  </div>
</template>

<script>
export default {
  name: 'Presentation',
  data () {
    return {
      msg: '',
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
    this.$nextTick(() => {
      window.addEventListener('resize', this.getWindowWidth)
      window.addEventListener('resize', this.getWindowHeight)

      this.getWindowWidth()
      this.getWindowHeight()
    })
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
  grid-template: "h h h"
                 "c1 c1 c1"
                 "c31 c32 c33"
                 "c2 c2 c2"
                 "q c d"
                 "i i i";
  grid-template-rows: 25% 25% 25%;
  grid-gap: 10px;
  height:auto;
  min-height:50px;
  height:auto !important;
  height:50px;
}

.home .row-1 {
    margin: 0 40px;
}
.home .col-1-pres {
    margin: 0 40px;
}
.home .col-2-pres {
    margin: 0 40px;
}

.quality {
  grid-area: q;
  padding: 20px 40px;
}

.quality div {
  width: 90px; height: 90px;
  margin: 3em auto;
  background: #fff;
  border: 10px solid #ffe400;
  border-radius: 30px;
  transition: border-radius 2s, border-color 3s;
  text-align: center;
}
.cost div {
  width: 90px; height: 90px;
  margin: 3em auto;
  background: #fff;
  border: 10px solid #ffe400;
  border-radius: 30px;
  transition: border-radius 2s, border-color 3s;
  text-align: center;
}

/* Animation  */
.anim div {
  width: 90px; height: 90px;
  margin: 3em auto;
  background: #fff;
  border: 10px solid #ffe400;
  border-radius: 30px;
  transition: border-radius 2s, border-color 3s;
  text-align: center;
}


.anim div:hover {
	border-color: #333;
	transform: rotate(1080deg);
	border-radius: 50%;
	transition: all 2s;
}

.anim div:after {
	content: "";
	position:relative;
	top: 120px;
	left:-14px;
	font-size: 1.25em;
	font-family: helvetica, arial, sans-serif;
	font-variant: small-caps;
	color:#888;
	opacity:0;
	transition: opacity 2s;
}
.anim div:hover:after {
	opacity: 1;
	transition: opacity 1s 1s;
}


/* Fin Animation */


.size {
  font-size: 50px;
  margin-top: 20px;
  color: #ffe400;
}


.cost {
  grid-area: c;
  padding: 20px 40px;
}

.detail {
  grid-area: d;
  padding: 20px 40px;
}

.detail {
  -vendor-animation-duration: 5s;
  -vendor-animation-delay: 3s;
}
.cost {
  -vendor-animation-duration: 5s;
  -vendor-animation-delay: 3s;
}
.quality {
  -vendor-animation-duration: 5s;
  -vendor-animation-delay: 3s;
}

.row-1 {
  -vendor-animation-duration: 5s;
  -vendor-animation-delay: 3s;
}

.col-1-pres {
  grid-area: c1;
  margin: 5px;
  padding: 5px;
}

.col-2-pres {
  grid-area: c2;
  margin: 5px;
  padding: 5px;
}

.col-3-1 {
  grid-area: c31;
  text-align: center;
  -vendor-animation-duration: 5s;
  -vendor-animation-delay: 3s;
}
.col-3-2 {
  grid-area: c32;
  text-align: center;
  -vendor-animation-duration: 5s;
  -vendor-animation-delay: 3s;
}
.col-3-3 {
  grid-area: c33;
  text-align: center;
  -vendor-animation-duration: 5s;
  -vendor-animation-delay: 3s;
}

.row-1 {
  grid-area: h;
  height: 100%;
}

.photo {
  grid-area: i;
  width: 100%;
  height:auto;
  min-height:50px;
  height:auto !important;
  height:50px;
}

.photo img {
  width: 100%;
  /* height: 100%; */
  object-fit: strech;
  /* height:auto;
  min-height:50px;
  height:auto !important;
  height:50px; */
  /* padding: 0;
  margin: 0; */
}

.text p {
  padding: 10px;
  text-align: justify;
}

.row-1 h1 {
  font-weight: 200;
  font-size: 25px;
  padding-left: 10px;
  padding-top: 15px;
}

.col-2-pres h3 {
  font-weight: 400;
}

.pills {
  border-bottom: 1px solid #ffe501;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: rgb(255, 229, 1);
  border-left: 4px double #ffe400;
  margin-bottom: 5px;
}

h3::first-letter {
  color: #ffe501;
  font-size: 130%;
}
li {
  color: gray;
}

li::before {
  content: "• ";
  color: #ffe400;
  padding-left: 1em;
  margin-left: 1em;
}

</style>
