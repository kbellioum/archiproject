<template>
  <div class="home">
    <!-- <img src="http://via.placeholder.com/1024x500?text=Agence" alt=""> -->
    <!-- <h1>Menu Projets</h1>
    <hr>
    <router-view/> -->

    <div id="gallery" style="display:none;">

			<img v-for="item in list" alt="Image 1 Title" :src=item.source
				data-image=""
				data-description="Image 1 Description" @click="doit">

		</div>
    <!-- <button type="button" name="button" @click="doit">OK</button> -->
  </div>
</template>

<script>
export default {
  name: 'Amenagement Interieur',
  data () {
    return {
      msg: '',
      list: [
        {id: '1', source: '../src/assets/homeslider/images/big/img-slider-1.jpg'},
        {id: '2', source: '../src/assets/homeslider/images/big/img-slider-2.jpg'},
        {id: '3', source: '../src/assets/homeslider/images/big/img-slider-3.jpg'},
        {id: '4', source: '../src/assets/homeslider/images/big/img-slider-4.jpg'},
        {id: '5', source: '../src/assets/homeslider/images/big/img-slider-5.jpg'},
        {id: '1', source: '../src/assets/homeslider/images/big/img-slider-1.jpg'},
        {id: '2', source: '../src/assets/homeslider/images/big/img-slider-2.jpg'},
        {id: '3', source: '../src/assets/homeslider/images/big/img-slider-3.jpg'},
        {id: '4', source: '../src/assets/homeslider/images/big/img-slider-4.jpg'},
        {id: '5', source: '../src/assets/homeslider/images/big/img-slider-5.jpg'}
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
