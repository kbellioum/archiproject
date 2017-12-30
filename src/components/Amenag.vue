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
  name: 'AmenagementInterieur',
  data () {
    return {
      msg: '',
      list: [
        // {id: '2', source: 'https://res.cloudinary.com/kbellioum/image/upload/v1514543287/Adrchiproject/31y.jpg', link: '/projets/detail/Mundiapolis', title: 'Mundiapolis', category: 'Amenag'},
        // {id: '3', source: 'https://res.cloudinary.com/kbellioum/image/upload/v1514543937/Adrchiproject/2.jpg', link: '/projets/detail/Region_de_dakhla', title: 'Siège de la région de dakhla', category: 'Amenag'},
        // {id: '4', source: 'https://res.cloudinary.com/kbellioum/image/upload/v1514542916/Adrchiproject/07.jpg', link: '/projets/detail/Marjane', title: 'Marjane', category: 'Amenag'},
        // {id: '5', source: 'https://res.cloudinary.com/kbellioum/image/upload/v1514542954/Adrchiproject/03m.jpg', link: '/projets/detail/The_nest_academy', title: 'The nest academy', category: 'Amenag'},
        {id: '5', source: '../static/assets/projects/Amenag/GalerySoArt/img00.jpg', link: '/projets/detail/GalerySoArt', title: 'GalerySoArt', category: 'Amenag'},
        {id: '6', source: '../static/assets/projects/Amenag/cih/img00.jpg', link: '/projets/detail/cih', title: 'CIH', category: 'Amenag'},
        {id: '7', source: '../static/assets/projects/Amenag/cih6/img00.jpg', link: '/projets/detail/cih6', title: 'CIH 6', category: 'Amenag'},
        {id: '8', source: '../static/assets/projects/Amenag/ShowroomNespresso/img00.jpg', link: '/projets/detail/ShowroomNespresso', title: 'Showroom Nespresso', category: 'Amenag'}
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
