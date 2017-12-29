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
  name: 'Tourisme et Loisirs',
  data () {
    return {
      msg: '',
      list: [
        {id: '71', source: '../static/assets/projects/Touri/ClubAttijariWafaCos/img00.jpg', link: '/projets/detail/ClubAttijariWafaCos', title: 'ClubAttijariWafaCos', category: 'Touri'},
        {id: '72', source: '../static/assets/projects/Touri/CLUBBPMarrakech/img00.jpg', link: '/projets/detail/CLUBBPMarrakech', title: 'CLUBBPMarrakech', category: 'Touri'},
        {id: '73', source: '../static/assets/projects/Touri/MariottHotelTetouen/img00.jpg', link: '/projets/detail/MariottHotelTetouen', title: 'MariottHotelTetouen', category: 'Touri'},
        {id: '74', source: '../static/assets/projects/Touri/RAMOMNISPORT/img00.jpg', link: '/projets/detail/RAMOMNISPORT', title: 'RAMOMNISPORT', category: 'Touri'},
        {id: '75', source: '../static/assets/projects/Touri/RMACentreestivageMarrakech/img00.jpg', link: '/projets/detail/RMACentreestivageMarrakech', title: 'RMACentreestivageMarrakech', category: 'Touri'},
        {id: '76', source: '../static/assets/projects/Touri/RMAClubCasablanca/img00.jpg', link: '/projets/detail/RMAClubCasablanca', title: 'RMAClubCasablanca', category: 'Touri'}

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
