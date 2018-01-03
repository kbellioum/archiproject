<template>
  <div class="home">
    <!-- <img src="http://via.placeholder.com/1024x500?text=Agence" alt=""> -->
    <!-- <h1>Menu Projets</h1>
    <hr>
    <router-view/> -->
<!--
    <div class="" v-for="project in projects" :key="project.id">
      <span>{{elements}}</span>
    </div>

    <button type="button" name="button" @click="doit">OK</button>
    <button type="button" name="button" @click="reset">reset</button> -->

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
  name: 'ProjectsDetail',
  props: [
    'id'
  ],
  data () {
    return {
      msg: '',
      list: [
        {id: '16', source: '../static/assets/projects/Educ/CrecheThenestacademy/img00.jpg', link: '/projets/detail/CrecheThenestacademy', title: 'CrecheThenestacademy', category: 'Educ'},
        {id: '17', source: '../static/assets/projects/Educ/EcoleFranceville/img00.jpg', link: '/projets/detail/EcoleFranceville', title: 'EcoleFranceville', category: 'Educ'},
        {id: '18', source: '../static/assets/projects/Educ/EcoleGARAN/img00.jpg', link: '/projets/detail/EcoleGARAN', title: 'EcoleGARAN', category: 'Educ'},
        {id: '19', source: '../static/assets/projects/Educ/EcoleMontessori/img00.jpg', link: '/projets/detail/EcoleMontessori', title: 'EcoleMontessori', category: 'Educ'},
        {id: '20', source: '../static/assets/projects/Educ/LeCedre/img00.jpg', link: '/projets/detail/LeCedre', title: 'LeCedre', category: 'Educ'},
        {id: '21', source: '../static/assets/projects/Educ/Massalik/img00.jpg', link: '/projets/detail/Massalik', title: 'Massalik', category: 'Educ'},
        {id: '22', source: '../static/assets/projects/Educ/Mundiapolis/img00.jpg', link: '/projets/detail/Mundiapolis', title: 'Mundiapolis', category: 'Educ'}

      ]
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
    elements () {
      return this.$store.getters.getelementsInvalides
    },
    projects () {
      return this.$store.getters.getProjectByCategory(this.id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
