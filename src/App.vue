<template>
  <div id="app">
    <header class="header">
      <a class="navbar-brand" href="/">
        <img src="./assets/images/logo_archidesign.png" width="60" height="60" alt="">
      </a>
      <div class="deco"></div>
    </header>
    <nav class="main">
      <div class="col-1">
        <a class="link" href="/agence/">AGENCE</a>
        <div class="megamenu">
              <div class="col-1">
                <a class="bigmenulink" href="/agence/pres">PRESENTATION</a>
              </div>
              <div class="col-2">
                <a class="bigmenulink" href="/agence/archi">ARCHITECTURE</a>
              </div>
              <div class="col-3">
                <a class="bigmenulink" href="/agence/design">DESIGN INTERIEUR</a>
              </div>
              <div class="col-4">
                <a class="bigmenulink" href="/agence/urba">URBANISME</a>
              </div>
              <div class="col-5">
                <a class="bigmenulink" href="/agence/gestpro">GESTION DE PROJET</a>
              </div>
              <div class="col-6">
                <a class="bigmenulink" href="/agence/sculpt">SCULPTURE & ART</a>
              </div>
        </div>
      </div>

      <div class="col-2">
        <a class="link" href="/projets">PROJETS</a>
        <div class="megamenu">
              <div class="col-1">
                <a class="bigmenulink" href="/projets/institu">INSTITUTIONNEL</a>
              </div>
              <div class="col-2">
                <a class="bigmenulink" href="/projets/centrecom">CENTRE COMMERCIAUX</a>
              </div>
              <div class="col-3">
                <a class="bigmenulink" href="/projets/hospi">HOSPITALIER</a>
              </div>
              <div class="col-4">
                <a class="bigmenulink" href="/projets/educ">EDUCATION</a>
              </div>
              <div class="col-5">
                <a class="bigmenulink" href="/projets/restau">RESTAURATION</a>
              </div>
              <div class="col-6">
                <a class="bigmenulink" href="/projets/touri">TOURISME ET LOISIRS</a>
              </div>
              <div class="col-2-r2">
                <a class="bigmenulink" href="/projets/resid">RESIDENTIEL</a>
              </div>
              <div class="col-3-r2">
                <a class="bigmenulink" href="/projets/urbapro">URBANISME</a>
              </div>
              <div class="col-4-r2">
                <a class="bigmenulink" href="/projets/amenag">AMENAGEMENT</a>
              </div>
              <div class="col-5-r2">
                <a class="bigmenulink" href="/projets/conco">CONCOURS</a>
              </div>
        </div>
      </div>
      <div class="col-3">
        <a class="link" href="/pub">PUBLICATIONS</a>
      </div>
      <div class="col-4">
        <a class="link" href="/carriere">CARRIERE</a>
      </div>
      <div class="col-5">
        <a class="link" href="/contact">CONTACT</a>
      </div>
      <div class="col-6">
        <a class="link" href="/nouveau">NOUVEAUTES</a>
      </div>
    </nav>
    <div class="core">
        <router-view/>
    </div>
    <footer>
      <div class="news">
          <div class="blackpart">
            <div class="newsarrow">
              <span class="newsalign">News</span>
            </div>
            <div class="newsinfo">
              <span class="infoalign">Info</span>
            </div>
            <div class="youtube">
              <a href="#"><i class="fa fa-youtube" aria-hidden="true"></i></a>

            </div>
            <div class="facebook">
              <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>

            </div>
            <div class="twitter">
              <a href="#"><i class="fa fa-tumblr" aria-hidden="true"></i></a>

            </div>
            <div class="linkedin">
              <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
            </div>
            <div class="location">
              <a href="/contact"><i class="fa fa-map-marker" aria-hidden="true"></i></a>
            </div>
          </div>


          <!-- <img src="./assets/images/image2.png" alt=""> -->

      </div>
      <div class="deco"></div>
      <div class="blackblad"></div>
    </footer>

  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    // toAgence () {
    //   this.$router.push('/agence')
    // }
  }
}
</script>

<style scoped>

/*nav {
  position: fixed;
  top: 65px;
  width: 100%;
}*/
.newsalign {
  margin-left: 24px;
}
.infoalign {
  margin-left: 10px;
  font-weight: 200;
  text-align: left;
}


.blackpart div a:link {
    text-decoration: none;
    color: black;
}

.blackpart div a:visited {
    text-decoration: none;
    color: black;
}

.blackpart div a:hover {
    text-decoration: none;
    color: black;
}

.blackpart div a:active {
    text-decoration: none;
    color: black;
}
</style>
