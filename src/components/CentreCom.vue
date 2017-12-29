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
  name: 'CentreCommeriaux',
  data () {
    return {
      msg: '',
      list: [
        {id: '1', source: 'https://res.cloudinary.com/kbellioum/image/upload/v1514542955/Adrchiproject/morocco-mall_02.jpg', link: '/projets/detail/Morocco_Mall', title: 'Morocco_Mall', category: 'CentreCom'},
        {id: '9', source: '../static/assets/projects/CentreCom/KiteaGeant/img00.jpg', link: '/projets/detail/KiteaGeant', title: 'Kitea Geant', category: 'CentreCom'},
        {id: '10', source: '../static/assets/projects/CentreCom/MarjaneMarina/img00.jpg', link: '/projets/detail/MarjaneMarina', title: 'Marjane Marina', category: 'CentreCom'},
        {id: '11', source: '../static/assets/projects/CentreCom/MarjaneTachfine/img00.jpg', link: '/projets/detail/MarjaneTachfine', title: 'Marjane Tachfine', category: 'CentreCom'}
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
