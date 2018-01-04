<template>
  <div id="app">
    <header class="header">
      <a class="navbar-brand" href="/">
        <img src="/static/assets/images/logo_archidesign.png" width="45" height="45" alt="">
      </a>
      <div class="deco"></div>
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
                  <a class="bigmenulink" href="/proj/Institu">INSTITUTIONNEL</a>
                </div>
                <div class="col-2">
                  <a class="bigmenulink" href="/proj/CentreCom">CENTRE COMMERCIAUX</a>
                </div>
                <div class="col-3">
                  <a class="bigmenulink" href="/proj/Hospi">HOSPITALIER</a>
                </div>
                <div class="col-4">
                  <a class="bigmenulink" href="/proj/Educ">EDUCATION</a>
                </div>
                <div class="col-5">
                  <a class="bigmenulink" href="/proj/Restau">RESTAURATION</a>
                </div>
                <div class="col-6">
                  <a class="bigmenulink" href="/proj/Touri">TOURISME ET LOISIRS</a>
                </div>
                <div class="col-2-r2">
                  <a class="bigmenulink" href="/proj/Resid">RESIDENTIEL</a>
                </div>
                <div class="col-3-r2">
                  <a class="bigmenulink" href="/proj/Urbapro">URBANISME</a>
                </div>
                <div class="col-4-r2">
                  <a class="bigmenulink" href="/proj/Amenag">AMENAGEMENT</a>
                </div>
                <div class="col-5-r2">
                  <a class="bigmenulink" href="/proj/Conco">CONCOURS</a>
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
    </header>

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
              <marquee class="infoalign" scrollamount="5" behavior="scroll" direction="right" width="400px">{{ infos }}</marquee>
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
  data () {
    return {
      infos: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  },
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

.newsinfo {
  /* border: 2px solid white; */
  overflow: hidden;
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
