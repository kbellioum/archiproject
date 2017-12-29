<template>
  <div class="home">
    <!-- <img src="http://via.placeholder.com/1024x500?text=Agence" alt=""> -->
    <!-- <h1>Menu Projets</h1>
    <hr>
    <router-view/> -->

    <div id="gallery" style="display:none;">
      <a v-for="item in list" :href="item.link">
        <img  :alt="item.title" :src=item.source>
      </a>
		</div>
    <!-- <button type="button" name="button" @click="doit">OK</button> -->
  </div>
</template>

<script>
export default {
  name: 'HomeProjet',
  data () {
    return {
      msg: '',
      list: [
        {id: '1', source: 'https://res.cloudinary.com/kbellioum/image/upload/v1514542955/Adrchiproject/morocco-mall_02.jpg', link: '/projets/detail/Morocco_Mall', title: 'Morocco_Mall', category: 'CentreCom'},
        // Amenag
        {id: '2', source: 'https://res.cloudinary.com/kbellioum/image/upload/v1514543287/Adrchiproject/31y.jpg', link: '/projets/detail/Mundiapolis', title: 'Mundiapolis', category: 'Amenag'},
        {id: '3', source: 'https://res.cloudinary.com/kbellioum/image/upload/v1514543937/Adrchiproject/2.jpg', link: '/projets/detail/Region_de_dakhla', title: 'Siège de la région de dakhla', category: 'Amenag'},
        {id: '4', source: 'https://res.cloudinary.com/kbellioum/image/upload/v1514542916/Adrchiproject/07.jpg', link: '/projets/detail/Marjane', title: 'Marjane', category: 'Amenag'},
        {id: '5', source: 'https://res.cloudinary.com/kbellioum/image/upload/v1514542954/Adrchiproject/03m.jpg', link: '/projets/detail/The_nest_academy', title: 'The nest academy', category: 'Amenag'},
        {id: '6', source: '../static/assets/projects/Amenag/cih/img00.jpg', link: '/projets/detail/cih', title: 'CIH', category: 'Amenag'},
        {id: '7', source: '../static/assets/projects/Amenag/cih6/img00.jpg', link: '/projets/detail/cih6', title: 'CIH 6', category: 'Amenag'},
        {id: '8', source: '../static/assets/projects/Amenag/ShowroomNespresso/img00.jpg', link: '/projets/detail/ShowroomNespresso', title: 'Showroom Nespresso', category: 'Amenag'},
        // CentreCom
        {id: '9', source: '../static/assets/projects/CentreCom/KiteaGeant/img00.jpg', link: '/projets/detail/KiteaGeant', title: 'Kitea Geant', category: 'CentreCom'},
        {id: '10', source: '../static/assets/projects/CentreCom/MarjaneMarina/img00.jpg', link: '/projets/detail/MarjaneMarina', title: 'Marjane Marina', category: 'CentreCom'},
        {id: '11', source: '../static/assets/projects/CentreCom/MarjaneTachfine/img00.jpg', link: '/projets/detail/MarjaneTachfine', title: 'Marjane Tachfine', category: 'CentreCom'},
        // Conco
        {id: '12', source: '../static/assets/projects/Conco/Calairis/img00.jpg', link: '/projets/detail/Calairis', title: 'Calairis', category: 'Conco'},
        {id: '13', source: '../static/assets/projects/Conco/DarAlMakhzene/img00.jpg', link: '/projets/detail/DarAlMakhzene', title: 'DarAlMakhzene', category: 'Conco'},
        {id: '14', source: '../static/assets/projects/Conco/GrandstadedeCasablanca/img00.jpg', link: '/projets/detail/GrandstadedeCasablanca', title: 'GrandstadedeCasablanca', category: 'Conco'},
        {id: '15', source: '../static/assets/projects/Conco/Siegedelaregiondedakhla/img00.jpg', link: '/projets/detail/Siegedelaregiondedakhla', title: 'Siegedelaregiondedakhla', category: 'Conco'},
        // Educ
        {id: '16', source: '../static/assets/projects/Educ/CrecheThenestacademy/img00.jpg', link: '/projets/detail/CrecheThenestacademy', title: 'CrecheThenestacademy', category: 'Educ'},
        {id: '17', source: '../static/assets/projects/Educ/EcoleFranceville/img00.jpg', link: '/projets/detail/EcoleFranceville', title: 'EcoleFranceville', category: 'Educ'},
        {id: '18', source: '../static/assets/projects/Educ/EcoleGARAN/img00.jpg', link: '/projets/detail/EcoleGARAN', title: 'EcoleGARAN', category: 'Educ'},
        {id: '19', source: '../static/assets/projects/Educ/EcoleMontessori/img00.jpg', link: '/projets/detail/EcoleMontessori', title: 'EcoleMontessori', category: 'Educ'},
        {id: '20', source: '../static/assets/projects/Educ/LeCedre/img00.jpg', link: '/projets/detail/LeCedre', title: 'LeCedre', category: 'Educ'},
        {id: '21', source: '../static/assets/projects/Educ/Massalik/img00.jpg', link: '/projets/detail/Massalik', title: 'Massalik', category: 'Educ'},
        {id: '22', source: '../static/assets/projects/Educ/Mundiapolis/img00.jpg', link: '/projets/detail/Mundiapolis', title: 'Mundiapolis', category: 'Educ'},
        // Hospi
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
        {id: '35', source: '../static/assets/projects/Hospi/CliniqueYasmine/img00.jpg', link: '/projets/detail/CliniqueYasmine', title: 'CliniqueYasmine', category: 'Hospi'},
        // Institu
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
        {id: '58', source: '../static/assets/projects/Institu/Zevaco/img00.jpg', link: '/projets/detail/Zevaco', title: 'Zevaco', category: 'Institu'},
        // Resid
        {id: '58', source: '../static/assets/projects/Resid/BouskouraGolfcity/img00.jpg', link: '/projets/detail/BouskouraGolfcity', title: 'BouskouraGolfcity', category: 'Resid'},
        {id: '58', source: '../static/assets/projects/Resid/CaliforniaGolfRessort/img00.jpg', link: '/projets/detail/CaliforniaGolfRessort', title: 'CaliforniaGolfRessort', category: 'Resid'}

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
<style>
body {
  overflow: visible !important;
}
</style>
