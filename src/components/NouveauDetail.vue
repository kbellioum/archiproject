<template>
  <div class="home">
    <div class="image">
      <img src="http://unsplash.it/g/600/400" alt="">
    </div>
    <div class="titre">
      {{ id }}
    </div>
    <div class="article">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
    getprojet () {
      return this.projet
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

</style>
