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
  name: 'Restauration',
  data () {
    return {
      msg: '',
      list: [
        {id: '59', source: '../static/assets/projects/Restau/aufourabois/img00.jpg', link: '/projets/detail/aufourabois', title: 'aufourabois', category: 'Restau'},
        {id: '60', source: '../static/assets/projects/Restau/briochedoree/img00.jpg', link: '/projets/detail/briochedoree', title: 'briochedoree', category: 'Restau'},
        {id: '61', source: '../static/assets/projects/Restau/Club20-1/img00.jpg', link: '/projets/detail/Club20-1', title: 'Club20-1', category: 'Restau'},
        {id: '62', source: '../static/assets/projects/Restau/Lagrillardiere/img00.jpg', link: '/projets/detail/Lagrillardiere', title: 'Lagrillardiere', category: 'Restau'},
        {id: '63', source: '../static/assets/projects/Restau/LELIERRE/img00.jpg', link: '/projets/detail/LELIERRE', title: 'LELIERRE', category: 'Restau'},
        {id: '64', source: '../static/assets/projects/Restau/Lugano/img00.jpg', link: '/projets/detail/Lugano', title: 'Lugano', category: 'Restau'},
        {id: '65', source: '../static/assets/projects/Restau/Othali/img00.jpg', link: '/projets/detail/Othali', title: 'Othali', category: 'Restau'},
        {id: '66', source: '../static/assets/projects/Restau/Pizzahut/img00.jpg', link: '/projets/detail/Pizzahut', title: 'Pizzahut', category: 'Restau'},
        {id: '67', source: '../static/assets/projects/Restau/SEGAFREDOAnfa/img00.jpg', link: '/projets/detail/SEGAFREDOAnfa', title: 'SEGAFREDOAnfa', category: 'Restau'},
        {id: '68', source: '../static/assets/projects/Restau/SegafredoCIL/img00.jpg', link: '/projets/detail/SegafredoCIL', title: 'SegafredoCIL', category: 'Restau'},
        {id: '69', source: '../static/assets/projects/Restau/Thaigarden/img00.jpg', link: '/projets/detail/Thaigarden', title: 'Thaigarden', category: 'Restau'},
        {id: '70', source: '../static/assets/projects/Restau/Wong/img00.jpg', link: '/projets/detail/Wong', title: 'Wong', category: 'Restau'}

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
      return this.$store.getters.getProjectByCategory('Restau')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
