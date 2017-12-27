<template>
  <div class="main-agence">
    <!-- <img src="http://via.placeholder.com/1024x500?text=Agence" alt=""> -->
    <div class="page-agence" height="50%">

      <div class="photo" height="100%">
        <img src="https://res.cloudinary.com/kbellioum/image/upload/v1513601388/said_wiv5oq.jpg" alt="">
      </div>
      <div class="text">
        <div class="">
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

</style>
