<template>
  <div class="main-agence">
    <!-- <img src="http://via.placeholder.com/1024x500?text=Agence" alt=""> -->

    <div class="container">
            <div class="head" data-aos="slide-down">
                <h2 class="text-center lead" >A propos de nous </h2>
            </div>
            <div class="txt">
                <p class="center styl" data-aos="fade-right">
                  Archi Design a été créé en 1985 au Canada et s’est implanté au Maroc au début des années 90.
                  La maîtrise du secteur du bâtiment et la passion pour l’architecture contemporaine et internationale sont les moteurs de la création d’Archi Design.Aujourd’hui,
                  Archi Design est composée d’une équipe de professionnels dans le secteur du bâtiment attirée par la passion et la rigueur indispensables à la réussite de tout projet. </p>
            </div>
            <div class="cadre" data-aos="fade-left">
              <img src="https://res.cloudinary.com/kbellioum/image/upload/v1514806290/Adrchiproject/cadre.png" width="208" />
            </div>
            <div class="txt2" data-aos="fade-down">
                <p class="lead" >Années </p>
                <p class="lead" >Expériences </p>
                <p class="lead" >Travail </p>
            </div>



    </div>

    <div class="row2">
      <div class="one" data-aos="slide-up">
        <div class="center">
          <img src="https://res.cloudinary.com/kbellioum/image/upload/co_rgb:ffffff,e_make_transparent:50/v1514806622/Adrchiproject/icon-1.png">
        </div>

        <h3>ARCHITECTURE &amp; URBANISME</h3>
      </div>
      <div class="two" data-aos="slide-up">
        <div class="center">
          <img src="https://res.cloudinary.com/kbellioum/image/upload/co_rgb:ffffff,e_make_transparent:50/v1514806622/Adrchiproject/icon-2.png">
        </div>

        <h3>DECORATION &amp; DESIGN</h3>
      </div>
      <div class="tree" data-aos="slide-up">
        <div class="center">
          <img src="https://res.cloudinary.com/kbellioum/image/upload/co_rgb:ffffff,e_make_transparent:50/v1514806623/Adrchiproject/icon-3.png">
        </div>

        <h3>GESTION DE PROJETS</h3>
      </div>
      <div class="four" data-aos="slide-up">
        <div class="center">
          <img src="https://res.cloudinary.com/kbellioum/image/upload/co_rgb:ffffff,e_make_transparent:50/v1514806623/Adrchiproject/icon-4.png">
        </div>

        <h3>SUIVI &amp; COORDINATION</h3>
      </div>
    </div>

    <div class="said2">
      <h2>L'architecte</h2>
    </div>
    <div class="suite animated infinite slideInDown">
      <h2>
        <i class="fa fa-chevron-down" aria-hidden="true"></i>
      </h2>
    </div>

    <div class="page-agence" height="50%">

      <div class="photo" height="100%" data-aos="fade-right">
        <img src="https://res.cloudinary.com/kbellioum/image/upload/v1513601388/said_wiv5oq.jpg" alt="">
      </div>
      <div class="text" data-aos="fade-left">
        <div class="said">
          Said Lahlou débute sa carrière professionnelle en 1984 en obtenant son diplôme d'Architecte de l'Université
          du Québec, puis deux autres diplômes en 1986 et 1987 de la Faculté de l'Urbanisme de Montréal et de la
          "Royal Architectural Institue of Canada".<br>
          <br>
          Il devient membre de l’ordre des architectes du Québec, enseigne le design à Montréal et participe à la fondation
          de l'agence "Archi Design" spécialisée dans l’architecture, le design et l’urbanisme à Montréal.<br>
          En 1990, après plusieurs années d’expérience Nord-américaine alliant une architecture internationale riche et
          design moderne, Said Lahlou crée l’agence Archi design à Casablanca.<br>
          <br>
          Depuis sa création, Said Lahlou comptabilise plus de 200 projets réalisés tels que la construction du studio
          2M, les sièges sociaux Maroclear, Eqdom, mondial assistance, le siège de Coca-cola, la clinique Al Hakim,
          Morocco Mall, etc…
        </div>

      </div>
    </div>

    <div class="foot">
      <!-- Some space for the scrolling -->
    </div>

  </div>
</template>

<script>
export default {
  name: 'Agence',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body{
  background: url('https://res.cloudinary.com/kbellioum/image/upload/v1515180409/Adrchiproject/6452-1.jpg') no-repeat;
}

.page-agence {
  display: grid;
  grid-template-columns: 500px 1fr;
  grid-gap: 1px;
  grid-auto-rows: minmax(auto, auto);

}

.photo {
  grid-column: 1;
  grid-row: 1;
  display: flex;
  align-items: center;
}

.text {
  grid-column: 2;
  grid-row: 1;
  display: flex;
  align-items: center;
}

.text {
  margin: 5px;
  padding: 19px;
  font-size: 23px;
}

.text h1 {
  font-weight: 200;
  font-size: 25px;
}
.photo {
  padding: 10px;
}

.text div {
  text-align: justify;
}

.photo img {
  width: 100%;
  box-shadow: 2px 2px 7px #020202;
}

.container {
  display: grid;
  grid-template: "h h h h h"
                 "a a b c c";

}

.row2 {
  display: grid;
  grid-template: "d e f g";
  justify-items: center;
  margin: 35px;
  padding-bottom: 45px;
}

.head {
  grid-area: h;
  text-align: center;
  font-weight: 300;
  font-size: 35px;
  margin: 30px;
}

.txt {
  grid-area: a;
}

.cadre {
  grid-area: b;
  padding-top: 14px;
}
.txt2 {
  grid-area: c;
  margin: 20px;
  padding-top: 62px;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
}

.one {
  grid-area: d;
}

.two {
  grid-area: e;
}

.tree {
  grid-area: f;
}

.four {
  grid-area: g;
  justify-items: center;
}

.center img {
  margin-left: auto;
  margin-right: auto;
  display: block;
}

.styl {
  margin: 5px;
  padding: 19px;
  font-size: 23px;
  font-weight: 100;
  text-align: justify;
}

.foot {
  height: 100px;
}

.said {

  text-align: justify;
  font-weight: 200;
  /* font-size: 45px;
  margin: 30px; */
}

.said2 {
  text-align: center;
  font-weight: 300;
  font-size: 45px;
  margin: 30px;
}

.said2 h2::first-letter {
  color: #ffe400;
  font-size: 150%;
}

.suite {
  text-align: center;
  color: gray;
  font-size: 25px;
}
</style>
