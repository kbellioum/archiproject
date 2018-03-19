<template>
  <div class="home">
    <!-- <img src="http://via.placeholder.com/1024x500?text=Agence" alt=""> -->
    <!-- <h1>Menu Projets</h1>
    <hr>
    <router-view/> -->
    <!-- <div class="">
      {{list}}
    </div> -->
<!-- ---------------------- -->


<article class="cf">
  <div v-for="item in projects" :href="item.link" :class="item.obj">
    <a :href="item.link" class="db aspect-ratio aspect-ratio--1x1 dim">
      <span role="img" :aria-label="item.name" :style="{ backgroundImage: 'url(' + item.image + ')' }" class="bg-center cover aspect-ratio--object">
        <header class="tc ph4">
          <h1 class="f3 f2-m f1-l fw2 black-90 mv3">

          </h1>
          <h2 class="f5 f4-m f3-l fw2 black-50 mt0 lh-copy">
            {{item.name}}
          </h2>
        </header>
      </span>
    </a>
  </div>
</article>

<!-- ----------------------- -->

    <!-- <div id="gallery" style="display:none;">
      <a v-for="item in list" :href="item.link">
        <img  :alt="item.title" :src=item.source>
      </a>
		</div> -->
    <div class="foot">
      <!-- Some space for the scrolling -->
    </div>
    <!-- <button type="button" name="button" @click="doit">OK</button> -->
  </div>
</template>

<script>
// import { sendmail } from '../lib/index.js'
// import axios from 'axios'
export default {
  name: 'HomeProjet',
  data () {
    return {
      msg: '',
      list: [],
      count: 1,
      pp: {
        from: 'Excited User <me@samples.mailgun.org>',
        to: 'kbellioum@gmail.com',
        subject: 'Hello',
        text: 'Testing some Mailgun awesomness!'
      }
    }
  },
  created () {
    // axios({
    //   url: 'https://api.mailgun.net/v3/sandbox7fe163bd9a5b494c93fc6bdef403637f.mailgun.org/',
    //   method: 'POST',
    //   dataType: 'json',
    //   auth: {
    //     username: 'api',
    //     password: 'key-0720e90820d91b543d01e5c84989d583'
    //   },
    //   data: {
    //     'from': 'karim@sandbox7fe163bd9a5b494c93fc6bdef403637f.mailgun.org',
    //     'to': 'kbellioum@gmail.com'
    //   },
    //   params: {
    //     // https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fwww.archimedia.ma%2Findex.php%3Fformat%3Dfeed%26type%3Drss&api_key=wl6vfhwive3beojsb3arqjxlmtg8fkevdnlmfjui
    //     // rss_url: 'http://www.archimedia.ma/index.php?format=feed&type=rss',
    //     // api_key: 'wl6vfhwive3beojsb3arqjxlmtg8fkevdnlmfjui',
    //     // count: 5
    //   }
    // })
    // .then(response => {
    //   console.log('response Allo', response)
    //   // console.log('response data', response.data)
    //   // console.log('====== ' + response.feed.title + ' ======')
    //   // this.rss_title = response.data.items
    //   // response.data.items[Math.floor(Math.random() * response.data.items.length)].title
    //   // this.infos = response.data.feed.description
    // })
    // .catch(e => {
    //   this.errors.push(e)
    // })
    // console.log('test')
    // sendmail.terra()
  },
  mounted: function () {
    console.log(this.projects.length)
    // var i = 0
    // var cc = this
    // if (this.projects.length !== this.list.length) {
    // console.log(this.count)
    // setInterval(function () {
    //     this.list.push(1)
      // cc.count++
      // cc.list.push(cc.count)
      // cc.list.push(cc.projects.splice(0, 1)[0])
      // console.log(cc.list)
      // console.log('count: ', cc.count)
    // }, 3000)
    // }
  },
  methods: {
    doit () {
      console.log('OK OK')
    }
  },
  computed: {
    projects () {
      return this.$store.getters.getCatProjects
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body {
  overflow: visible !important;
}
/* ------ */
.aspect-ratio {
    height: 0;
    position: relative;
}

.aspect-ratio--1x1 {
    padding-bottom: 100%;
}

.aspect-ratio--object {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
}

.cover {
    background-size: cover !important;
}

.bg-center {
    background-repeat: no-repeat;
    background-position: center center;
}

.cf:before, .cf:after {
    content: " ";
    display: table;
}

.cf:after {
    clear: both;
}

.cf {
    *zoom: 1;
}

.db {
    display: block;
}

.fl {
    float: left;
    _display: inline;
}

.w-50 {
    width: 50%;
}

.w-100 {
    width: 100%;
}

.dim {
    opacity: 1;
    transition: opacity .15s ease-in;
}

.dim:hover, .dim:focus {
    opacity: .5;
    transition: opacity .15s ease-in;
}

.dim:active {
    opacity: .8;
    transition: opacity .15s ease-out;
}

@media screen and (min-width: 30em) {
    .w-25-ns {
        width: 25%;
    }
}

@media screen and (min-width: 30em) and (max-width: 60em) {
    .w-50-m {
        width: 50%;
    }
}

@media screen and (min-width: 60em) {
    .w-25-l {
        width: 25%;
    }

    .w-50-l {
        width: 50%;
    }
}

.fw2 {
    font-weight: 200;
}

.lh-copy {
    line-height: 1.5;
}

.black-90 {
    color: rgba(0, 0, 0, .9);
}

.black-50 {
    color: rgba(0, 0, 0, .5);
}

.ph4 {
    padding-left: 2rem;
    padding-right: 2rem;
}

.mt0 {
    margin-top: 0;
}

.mv3 {
    margin-top: 1rem;
    margin-bottom: 1rem;
}

.tc {
    text-align: center;
}

.f3 {
    font-size: 1.5rem;
}

.f5 {
    font-size: 1rem;
}

@media screen and (min-width: 30em) and (max-width: 60em) {
    .f2-m {
        font-size: 2.25rem;
    }

    .f4-m {
        font-size: 1.25rem;
    }
}

@media screen and (min-width: 60em) {
    .f1-l {
        font-size: 3rem;
    }

    .f3-l {
        font-size: 1.5rem;
    }
}

/* ------- */
.foot {
  height: 65px;
}
</style>
