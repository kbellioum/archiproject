<template>
  <div class="home">

    <!-- <h1>Menu Publication</h1> -->
    <!-- <hr> -->
    <!-- <img src="http://via.placeholder.com/1024x500?text=Publication" alt=""> -->
    <!-- <div class="" id="gallery">
      <div class="view">
        <a href="../static/assets/publications/alaakar.pdf">
        <pdf src="../static/assets/publications/alaakar.pdf"></pdf>
        </a>
      </div>
      <div class="view">
        <a href="../static/assets/publications/architecturemaroc.pdf">
        <pdf src="../static/assets/publications/architecturemaroc.pdf"></pdf>
        </a>
      </div>
    </div> -->

    <div id="gallery" style="display:none;">
      <a v-for="item in list" :href="item.link">
        <img  alt="Image 1 Title" :src=item.source>
      </a>
    </div>


  </div>
</template>

<script>
import pdf from 'vue-pdf'
export default {
  name: 'Publication',
  data () {
    return {
      msg: '',
      list: [
        {id: '1', source: '../static/assets/publications/architecturemaroc.png', link: '../static/assets/publications/architecturemaroc.pdf'},
        {id: '2', source: '../static/assets/publications/alaakar.png', link: '../static/assets/publications/alaakar.pdf'},
        {id: '3', source: '../static/assets/publications/installmaroc.png', link: '../static/assets/publications/installmaroc.pdf'},
        {id: '3', source: '../static/assets/publications/maison_du_maroc.png', link: '../static/assets/publications/maison_du_maroc.pdf'},
        {id: '3', source: '../static/assets/publications/premium.png', link: '../static/assets/publications/premium.pdf'},
        {id: '3', source: '../static/assets/publications/prestige.png', link: '../static/assets/publications/prestige.pdf'},
        {id: '3', source: '../static/assets/publications/deco_actual.png', link: '../static/assets/publications/deco_actual.pdf'},
        {id: '3', source: '../static/assets/publications/brandup.png', link: '../static/assets/publications/brandup.pdf'}

      ]
    }
  },
  components: {
    pdf
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .view {
  display: inline-block;
  width: 400px;
} */
body {
  overflow: visible !important;
}
</style>
