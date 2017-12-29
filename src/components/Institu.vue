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
  name: 'Institution',
  data () {
    return {
      msg: '',
      list: [
        {id: '36', source: '../static/assets/projects/Institu/AeroportOujdaAngad/img00.jpg', link: '/projets/detail/AeroportOujdaAngad', title: 'AeroportOujdaAngad', category: 'Institu'},
        {id: '37', source: '../static/assets/projects/Institu/AeroportTanger/img00.jpg', link: '/projets/detail/AeroportTanger', title: 'AeroportTanger', category: 'Institu'},
        {id: '38', source: '../static/assets/projects/Institu/AsmaaInvest/img00.jpg', link: '/projets/detail/AsmaaInvest', title: 'AsmaaInvest', category: 'Institu'},
        {id: '39', source: '../static/assets/projects/Institu/BanqueAlMaghribLaayoune/img00.jpg', link: '/projets/detail/BanqueAlMaghribLaayoune', title: 'BanqueAlMaghribLaayoune', category: 'Institu'},
        {id: '40', source: '../static/assets/projects/Institu/BanquePopulaireAindiab/img00.jpg', link: '/projets/detail/BanquePopulaireAindiab', title: 'BanquePopulaireAindiab', category: 'Institu'},
        {id: '41', source: '../static/assets/projects/Institu/BMCIOasis/img00.jpg', link: '/projets/detail/BMCIOasis', title: 'BMCIOasis', category: 'Institu'},
        {id: '42', source: '../static/assets/projects/Institu/Builtec/img00.jpg', link: '/projets/detail/Builtec', title: 'Builtec', category: 'Institu'},
        {id: '43', source: '../static/assets/projects/Institu/Colorado/img00.jpg', link: '/projets/detail/Colorado', title: 'Colorado', category: 'Institu'},
        {id: '44', source: '../static/assets/projects/Institu/CreditduMarocRooswelt/img00.jpg', link: '/projets/detail/CreditduMarocRooswelt', title: 'CreditduMarocRooswelt', category: 'Institu'},
        {id: '45', source: '../static/assets/projects/Institu/Dolidol/img00.jpg', link: '/projets/detail/Dolidol', title: 'Dolidol', category: 'Institu'},
        {id: '46', source: '../static/assets/projects/Institu/GareFes/img00.jpg', link: '/projets/detail/GareFes', title: 'GareFes', category: 'Institu'},
        {id: '47', source: '../static/assets/projects/Institu/GareRABAT/img00.jpg', link: '/projets/detail/GareRABAT', title: 'GareRABAT', category: 'Institu'},
        {id: '48', source: '../static/assets/projects/Institu/ImmeubleBoukiSidimaarouf/img00.jpg', link: '/projets/detail/ImmeubleBoukiSidimaarouf', title: 'ImmeubleBoukiSidimaarouf', category: 'Institu'},
        {id: '49', source: '../static/assets/projects/Institu/ImmeubleBounkitSocrate1/img00.jpg', link: '/projets/detail/ImmeubleBounkitSocrate1', title: 'ImmeubleBounkitSocrate1', category: 'Institu'},
        {id: '59', source: '../static/assets/projects/Institu/ImmeubleBounkitSocrate2/img00.jpg', link: '/projets/detail/ImmeubleBounkitSocrate2', title: 'ImmeubleBounkitSocrate2', category: 'Institu'},
        {id: '51', source: '../static/assets/projects/Institu/Maroclear/img00.jpg', link: '/projets/detail/Maroclear', title: 'Maroclear', category: 'Institu'},
        {id: '52', source: '../static/assets/projects/Institu/Saga/img00.jpg', link: '/projets/detail/Saga', title: 'Saga', category: 'Institu'},
        {id: '53', source: '../static/assets/projects/Institu/Siege2M/img00.jpg', link: '/projets/detail/Siege2M', title: 'Siege2M', category: 'Institu'},
        {id: '54', source: '../static/assets/projects/Institu/SiegeAttijari/img00.jpg', link: '/projets/detail/SiegeAttijari', title: 'SiegeAttijari', category: 'Institu'},
        {id: '55', source: '../static/assets/projects/Institu/SiegeCOCACOLA/img00.jpg', link: '/projets/detail/SiegeCOCACOLA', title: 'SiegeCOCACOLA', category: 'Institu'},
        {id: '56', source: '../static/assets/projects/Institu/SiegeHDID/img00.jpg', link: '/projets/detail/SiegeHDID', title: 'SiegeHDID', category: 'Institu'},
        {id: '57', source: '../static/assets/projects/Institu/SiegeOFPPT/img00.jpg', link: '/projets/detail/SiegeOFPPT', title: 'SiegeOFPPT', category: 'Institu'},
        {id: '58', source: '../static/assets/projects/Institu/Zevaco/img00.jpg', link: '/projets/detail/Zevaco', title: 'Zevaco', category: 'Institu'}

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
