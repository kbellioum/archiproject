<template>
  <div class="home">
    <div id="gallery" style="display:none;">
      <a v-for="item in projects" :href="item.link">
        <img  :alt="item.title" :src=item.source>
      </a>
		</div>

    <div class="foot">
      <!-- Some space for the scrolling -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsDetail',
  props: [
    'id'
  ],
  data () {
    return {
      msg: '',
      list: []
    }
  },
  methods: {
    reset () {
      this.$store.dispatch('setelementsInvalides')
    },
    doit () {
      console.log('OK OK')
      this.$store.dispatch('incelementsInvalides')
      console.log(this.$store.getters.getelementsInvalides)
    }
  },
  computed: {
    // elements () {
    //   return this.$store.getters.getelementsInvalides
    // },
    projects () {
      console.log(this.id)
      return this.$store.getters.getProjectByCategory(this.id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.foot {
  height: 100px;
}
</style>
