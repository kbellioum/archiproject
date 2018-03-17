<template>
  <div class="home">
    <!-- <img src="http://via.placeholder.com/1024x500?text=Agence" alt=""> -->
    <!-- <h1>Menu Projets</h1>
    <hr>
    <router-view/> -->

    <div id="gallery" style="display:none;">
      <a v-for="item in projects" :href="item.link">
        <img  :alt="item.title" :src=item.source>
      </a>
		</div>
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
  methods: {
    doit () {
      console.log('OK OK')
    }
  },
  computed: {
    projects () {
      return this.$store.getters.getProjects.slice(0, 5)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body {
  overflow: visible !important;
}
.foot {
  height: 65px;
}
</style>
