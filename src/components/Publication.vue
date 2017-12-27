<template>
  <div class="home">

    <!-- <h1>Menu Publication</h1> -->
    <!-- <hr> -->
    <!-- <img src="http://via.placeholder.com/1024x500?text=Publication" alt=""> -->
    <div class="" id="gallery">
      <div class="view">
        <a href="../src/assets/publications/alaakar.pdf">
        <pdf src="../src/assets/publications/alaakar.pdf"></pdf>
        </a>
      </div>
      <div class="view">
        <a href="../src/assets/publications/architecturemaroc.pdf">
        <pdf src="../src/assets/publications/architecturemaroc.pdf"></pdf>
        </a>
      </div>
    </div>


  </div>
</template>

<script>
import pdf from 'vue-pdf'
export default {
  name: 'Publication',
  data () {
    return {
      msg: ''
    }
  },
  components: {
    pdf
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.view {
  display: inline-block;
  width: 400px;
}
</style>
