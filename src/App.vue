<template>
  <div id="app">
    <header class="header">
      <a class="navbar-brand" href="/">
        <img src="/static/assets/images/logo_archidesign.png" width="45" height="45" alt="">
      </a>


      <div class="espace-client">
        <div v-if="userIsAuthenticated" @click="onLogout" class="text">
          <span>Log</span>out
        </div>
        <div v-else class="text"><span>Espace</span> client</div>
        <a v-if="userIsAuthenticated" @click="onLogout">
          <img src="/static/assets/images/user-1.png" width="45" height="45" alt="">
        </a>
        <a v-else href="/login">
          <img src="/static/assets/images/user-1.png" width="45" height="45" alt="">
        </a>
      </div>

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
              <marquee class="infoalign" scrollamount="5" behavior="scroll" direction="left" width="400px">{{ news.txt }}</marquee>
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
      <div class="blackblad">
        <div style="background:black; text-align:center; margin:0px; padding:10px;">
            <p style="color:grey; font-family:raleway; text-decoration: none;">©2017 Coded By <a style="color: #c7cfdb;" href="https://www.itknowledge.ma">IT Knowledge Maroc</a></p>
        </div>
      </div>
    </footer>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'app',
  data () {
    return {
      news: {
        txt: '',
        link: ''
      },
      infos: '',
      rss_title: []
    }
  },
  computed: {
    userIsAuthenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    }
  },
  methods: {
    onLogout () {
      this.$router.push('/')
      this.$store.dispatch('logout')
    }
    // toAgence () {
    //   this.$router.push('/agence')
    // }
  },
  created () {
    axios({
      url: 'https://api.rss2json.com/v1/api.json',
      method: 'GET',
      dataType: 'json',
      params: {
        // https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fwww.archimedia.ma%2Findex.php%3Fformat%3Dfeed%26type%3Drss&api_key=wl6vfhwive3beojsb3arqjxlmtg8fkevdnlmfjui
        rss_url: 'http://www.archimedia.ma/index.php?format=feed&type=rss',
        api_key: 'wl6vfhwive3beojsb3arqjxlmtg8fkevdnlmfjui',
        count: 5
      }
    })
    .then(response => {
      // console.log('response satus', response.status)
      // console.log('response data', response.data.items)
      // console.log('====== ' + response.feed.title + ' ======')
      this.rss_title = response.data.items
      // response.data.items[Math.floor(Math.random() * response.data.items.length)].title
      // this.infos = response.data.feed.description
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  mounted () {
    setInterval(() => {
      let ar = this.rss_title[Math.floor(Math.random() * this.rss_title.length)]
      // this.infos = this.rss_title[Math.floor(Math.random() * this.rss_title.length)].title
      this.news.txt = ar.title
      this.news.link = ar.link
      // console.log(this.news)
    }, 20000)
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Raleway');
/*nav {
  position: fixed;
  top: 65px;
  width: 100%;
}*/
.newsalign {
  margin-left: 10px;
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

.newsinfo marquee a {
  text-decoration: none;
  color: white !important;
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

.espace-client {
  float: right;
}

.espace-client span {
  text-transform: uppercase;
  color: white;
  font-style: italic;
  padding-top: -100px;
}

.text {
  position: relative;
  float: left;
  text-transform: uppercase;
  color: white;
  font-style: italic;
  padding-top: 16px;
  padding-right: 10px;
}

.text span {
  font-weight: 100;
}
</style>
