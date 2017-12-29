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
        {id: '23', source: '../static/assets/projects/Hospi/Centredesante/img00.jpg', link: '/projets/detail/Centredesante', title: 'Centredesante', category: 'Hospi'},
        {id: '24', source: '../static/assets/projects/Hospi/CliniqueAlHakim/img00.jpg', link: '/projets/detail/CliniqueAlHakim', title: 'CliniqueAlHakim', category: 'Hospi'},
        {id: '25', source: '../static/assets/projects/Hospi/CliniqueAlKindy/img00.jpg', link: '/projets/detail/CliniqueAlKindy', title: 'CliniqueAlKindy', category: 'Hospi'},
        {id: '26', source: '../static/assets/projects/Hospi/CliniqueAlMadina/img00.jpg', link: '/projets/detail/CliniqueAlMadina', title: 'CliniqueAlMadina', category: 'Hospi'},
        {id: '27', source: '../static/assets/projects/Hospi/CliniqueBadr/img00.jpg', link: '/projets/detail/CliniqueBadr', title: 'CliniqueBadr', category: 'Hospi'},
        {id: '28', source: '../static/assets/projects/Hospi/Cliniquebonnesoeuvresducoeur/img00.jpg', link: '/projets/detail/Cliniquebonnesoeuvresducoeur', title: 'Cliniquebonnesoeuvresducoeur', category: 'Hospi'},
        {id: '29', source: '../static/assets/projects/Hospi/CliniqueCardioCalifornie/img00.jpg', link: '/projets/detail/CliniqueCardioCalifornie', title: 'CliniqueCardioCalifornie', category: 'Hospi'},
        {id: '30', source: '../static/assets/projects/Hospi/CliniqueDentaire/img00.jpg', link: '/projets/detail/CliniqueDentaire', title: 'CliniqueDentaire', category: 'Hospi'},
        {id: '31', source: '../static/assets/projects/Hospi/CliniqueGhandi/img00.jpg', link: '/projets/detail/CliniqueGhandi', title: 'CliniqueGhandi', category: 'Hospi'},
        {id: '32', source: '../static/assets/projects/Hospi/CliniqueGuess/img00.jpg', link: '/projets/detail/CliniqueGuess', title: 'CliniqueGuess', category: 'Hospi'},
        {id: '33', source: '../static/assets/projects/Hospi/CliniqueLelittoral/img00.jpg', link: '/projets/detail/CliniqueLelittoral', title: 'CliniqueLelittoral', category: 'Hospi'},
        {id: '34', source: '../static/assets/projects/Hospi/CliniqueMaarif/img00.jpg', link: '/projets/detail/CliniqueMaarif', title: 'CliniqueMaarif', category: 'Hospi'},
        {id: '35', source: '../static/assets/projects/Hospi/CliniqueYasmine/img00.jpg', link: '/projets/detail/CliniqueYasmine', title: 'CliniqueYasmine', category: 'Hospi'}

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
