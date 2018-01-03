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
  name: 'Urbanisme',
  data () {
    return {
      msg: '',
      list: [
        {id: '76', source: '../static/assets/projects/Urbapro/Bouskouragolfcity/img00.jpg', link: '/projets/detail/Bouskouragolfcity', title: 'Bouskouragolfcity', category: 'Urbapro'},
        {id: '77', source: '../static/assets/projects/Urbapro/LesJardinsdelOcean/img00.jpg', link: '/projets/detail/LesJardinsdelOcean', title: 'LesJardinsdelOcean', category: 'Urbapro'},
        {id: '78', source: '../static/assets/projects/Urbapro/VictoriaCity/img00.jpg', link: '/projets/detail/VictoriaCity', title: 'VictoriaCity', category: 'Urbapro'}
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
      return this.$store.getters.getProjectByCategory('Urbapro')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.entry-content ul.gallery li a:after {
display: none;
}
</style>
