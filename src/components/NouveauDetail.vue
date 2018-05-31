<template>
  <div class="home">
    <div class="image">
      <img :src="article.image" alt="">
    </div>
    <div class="titre">
      <h1>{{ article.title }}</h1>
    </div>
    <div class="article">
        <p v-for="para in article.txt" class="justify" style="margin-bottom: 10px;">
          <!-- {{ article.txt }} -->
          {{ para }}
        </p>
    </div>
    <hr>
    <div class="comments">
      <vue-disqus shortname="archidesign-1"></vue-disqus>
    </div>
    <div class="foot">
      <!-- Some space for the scrolling -->
    </div>
  </div>

</template>

<script>
import VueDisqus from 'vue-disqus/VueDisqus.vue'

export default {
  name: 'Home',
  props: [
    'id'
  ],
  components: {
    VueDisqus
  },
  data () {
    return {
      msg: '',
      list: [],
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
  computed: {
    article () {
      console.log(this.$store.getters.getArticle(this.id))
      return this.$store.getters.getArticle(this.id)
      // return this.$store.getters.getArticles
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
  grid-template: "im1 im1 im1 im1"
                 "h1 h1 h1 h1"
                 "txt1 txt1 txt1 txt1"
                 "dsq dsq dsq dsq";
   width: 100%;
   margin-right: auto;
   margin-left: auto;
}

.image {
  grid-area: im1;
}

.image img {
  width: 100%;
}
.titre {
  grid-area: h1;
  /* padding-left: 10px; */
  text-align: center;
}
.article {
  grid-area: txt1;
  padding: 10px;
  text-align: justify;
}
.foot {
  height: 100px;
}

.comments {
  grid-area: dsq;
  padding: 30px;
}

.titre h1 {
  font-weight: 200;
  font-size: 25px;
}

.titre h1::first-letter {
  font-size: 130%;
  text-transform: uppercase;
}

</style>
