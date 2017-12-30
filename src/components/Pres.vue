<template>
  <div class="home" :height="(windowHeight-175-78) + 'px'">
    <!-- <div class="text"> -->
      <!-- <h1>Présentation de l'agence</h1> -->
        <div class="row-1">
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
          Architecture <br>
          Aménagement<br>
          Urbanisme  <br>
          <br>
            <p>
              Plusieurs services complémentaires ont été développé par le groupe afin d’offrir les réponses les mieux adaptées :<br>
            </p>
          <br>
            Choix du foncier <br>
          Etude de faisabilité et de rentabilité <br>
          Conception architecturale <br>
          Détail technique <br>

        </div>
        <div class="col-2-pres">
          Design intérieur <br>
          Aménagement paysager  <br>
          Coordination étude et chantier  <br>
          Maitrise d'ouvrage délégué <br>
          <br>
          <p>
            Archidesign offre un pack de services afin d'accompagner ses clients dans toute les démarches de construction dans le seul but de satisfaire sa clientèle à travers la performance des trois terme qui constitue sa devise:
          </p>
          <br>
          <h3 class="pills">&nbsp;Qualité:</h3>
          <p>
            La qualité de nos conceptions ne se limite pas à leur esthétique ou leur design.
            C’est aussi une architecture pragmatique où prime  fonctionnalité et de l’ergonomie.
          </p>
          <br>
          <h3 class="pills" >&nbsp;Coût:</h3>
          <p>
            Nous assurons une analyse financière rigoureuse et une démarche de contrôle du coût à toute étape du projet.  
          </p>
          <br>
          <h3 class="pills">&nbsp;Délais:</h3>
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
  grid-template: "h h h h"
                 "c1 c1 c2 c2"
                 "i i i i";
  grid-template-rows: 25% 25% 25%;
  grid-gap: 10px;
  height:auto;
  min-height:50px;
  height:auto !important;
  height:50px;
}

.text {

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
  border-left: 5px solid #ffe400;
  margin-bottom: 5px;
}

h3::first-letter {
  color: #ffe501;
  font-size: 130%;
}

</style>
