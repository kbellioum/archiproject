<template>
  <div class="">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Projets',
  data () {
    return {
      msg: '',
      list: [
        {id: '1', source: '../static/assets/homeslider/images/big/img-slider-1.jpg'},
        {id: '2', source: '../static/assets/homeslider/images/big/img-slider-2.jpg'},
        {id: '3', source: '../static/assets/homeslider/images/big/img-slider-3.jpg'},
        {id: '4', source: '../static/assets/homeslider/images/big/img-slider-4.jpg'},
        {id: '5', source: '../static/assets/homeslider/images/big/img-slider-5.jpg'},
        {id: '1', source: '../static/assets/homeslider/images/big/img-slider-1.jpg'},
        {id: '2', source: '../static/assets/homeslider/images/big/img-slider-2.jpg'},
        {id: '3', source: '../static/assets/homeslider/images/big/img-slider-3.jpg'},
        {id: '4', source: '../static/assets/homeslider/images/big/img-slider-4.jpg'},
        {id: '5', source: '../static/assets/homeslider/images/big/img-slider-5.jpg'},
        {id: '1', source: '../static/assets/homeslider/images/big/img-slider-1.jpg'},
        {id: '2', source: '../static/assets/homeslider/images/big/img-slider-2.jpg'},
        {id: '3', source: '../static/assets/homeslider/images/big/img-slider-3.jpg'},
        {id: '4', source: '../static/assets/homeslider/images/big/img-slider-4.jpg'},
        {id: '5', source: '../static/assets/homeslider/images/big/img-slider-5.jpg'},
        {id: '1', source: '../static/assets/homeslider/images/big/img-slider-1.jpg'},
        {id: '2', source: '../static/assets/homeslider/images/big/img-slider-2.jpg'},
        {id: '3', source: '../static/assets/homeslider/images/big/img-slider-3.jpg'},
        {id: '4', source: '../static/assets/homeslider/images/big/img-slider-4.jpg'},
        {id: '5', source: '../static/assets/homeslider/images/big/img-slider-5.jpg'},
        {id: '1', source: '../static/assets/homeslider/images/big/img-slider-1.jpg'},
        {id: '2', source: '../static/assets/homeslider/images/big/img-slider-2.jpg'},
        {id: '3', source: '../static/assets/homeslider/images/big/img-slider-3.jpg'},
        {id: '4', source: '../static/assets/homeslider/images/big/img-slider-4.jpg'},
        {id: '5', source: '../static/assets/homeslider/images/big/img-slider-5.jpg'},
        {id: '1', source: '../static/assets/homeslider/images/big/img-slider-1.jpg'},
        {id: '2', source: '../static/assets/homeslider/images/big/img-slider-2.jpg'},
        {id: '3', source: '../static/assets/homeslider/images/big/img-slider-3.jpg'},
        {id: '4', source: '../static/assets/homeslider/images/big/img-slider-4.jpg'},
        {id: '5', source: '../static/assets/homeslider/images/big/img-slider-5.jpg'}
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
