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
  name: 'Hospitalier',
  data () {
    return {
      msg: '',
      list: [
        {id: '1', source: '../static/assets/homeslider/images/big/img-slider-1.jpg', link: '/projets/detail/hospi-projet1'},
        {id: '2', source: '../static/assets/homeslider/images/big/img-slider-2.jpg', link: '/projets/detail/hospi-projet2'},
        {id: '3', source: '../static/assets/homeslider/images/big/img-slider-3.jpg', link: '/projets/detail/hospi-projet3'},
        {id: '4', source: '../static/assets/homeslider/images/big/img-slider-4.jpg', link: '/projets/detail/hospi-projet4'},
        {id: '5', source: '../static/assets/homeslider/images/big/img-slider-5.jpg', link: '/projets/detail/hospi-projet5'}
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
