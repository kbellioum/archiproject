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
    <!-- <button type="button" name="button" @click="doit">OK</button> -->
  </div>
</template>

<script>
export default {
  name: 'Residentiel',
  data () {
    return {
      msg: '',
      list: [
        {id: '58', source: '../static/assets/projects/Resid/BouskouraGolfcity/img00.jpg', link: '/projets/detail/BouskouraGolfcity', title: 'BouskouraGolfcity', category: 'Resid'},
        {id: '58', source: '../static/assets/projects/Resid/CaliforniaGolfRessort/img00.jpg', link: '/projets/detail/CaliforniaGolfRessort', title: 'CaliforniaGolfRessort', category: 'Resid'}

      ]
    }
  },
  methods: {
    doit () {
      console.log('OK OK')
    }
  },
  computed: {
    projects () {
      return this.$store.getters.getProjectByCategory('Resid')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
