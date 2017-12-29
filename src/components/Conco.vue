<template>
  <div class="home">
    <!-- <img src="http://via.placeholder.com/1024x500?text=Agence" alt=""> -->
    <!-- <h1>Menu Projets</h1>
    <hr>
    <router-view/> -->

    <div id="gallery" style="display:none;">
      <a v-for="item in list" :href="item.link">
        <img  alt="Image 1 Title" :src=item.source>
      </a>
		</div>
    <!-- <button type="button" name="button" @click="doit">OK</button> -->
  </div>
</template>

<script>
export default {
  name: 'Concours',
  data () {
    return {
      msg: '',
      list: [
        {id: '12', source: '../static/assets/projects/Conco/Calairis/img00.jpg', link: '/projets/detail/Calairis', title: 'Calairis', category: 'Conco'},
        {id: '13', source: '../static/assets/projects/Conco/DarAlMakhzene/img00.jpg', link: '/projets/detail/DarAlMakhzene', title: 'DarAlMakhzene', category: 'Conco'},
        {id: '14', source: '../static/assets/projects/Conco/GrandstadedeCasablanca/img00.jpg', link: '/projets/detail/GrandstadedeCasablanca', title: 'GrandstadedeCasablanca', category: 'Conco'},
        {id: '15', source: '../static/assets/projects/Conco/Siegedelaregiondedakhla/img00.jpg', link: '/projets/detail/Siegedelaregiondedakhla', title: 'Siegedelaregiondedakhla', category: 'Conco'}

      ]
    }
  },
  methods: {
    doit () {
      console.log('OK OK')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
