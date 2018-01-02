import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    projects: [
      {id: '1', source: '../static/assets/projects/CentreCom/Moroccomall/img00.jpg', link: '/projets/detail/Morocco_Mall', title: 'Morocco_Mall', category: 'CentreCom'},
      // Amenag
      // {id: '2', source: 'https://res.cloudinary.com/kbellioum/image/upload/v1514543287/Adrchiproject/31y.jpg', link: '/projets/detail/Mundiapolis', title: 'Mundiapolis', category: 'Amenag'},
      // {id: '3', source: 'https://res.cloudinary.com/kbellioum/image/upload/v1514543937/Adrchiproject/2.jpg', link: '/projets/detail/Region_de_dakhla', title: 'Siège de la région de dakhla', category: 'Amenag'},
      // {id: '4', source: 'https://res.cloudinary.com/kbellioum/image/upload/v1514542916/Adrchiproject/07.jpg', link: '/projets/detail/Marjane', title: 'Marjane', category: 'Amenag'},
      // {id: '5', source: 'https://res.cloudinary.com/kbellioum/image/upload/v1514542954/Adrchiproject/03m.jpg', link: '/projets/detail/The_nest_academy', title: 'The nest academy', category: 'Amenag'},
      {id: '5', source: '../static/assets/projects/Amenag/GalerySoArt/img00.jpg', link: '/projets/detail/GalerySoArt', title: 'GalerySoArt', category: 'Amenag'},
      {id: '6', source: '../static/assets/projects/Amenag/cih/img00.jpg', link: '/projets/detail/cih', title: 'CIH Siège', category: 'Amenag'},
      {id: '7', source: '../static/assets/projects/Amenag/cih6/img00.jpg', link: '/projets/detail/cih6', title: 'CIH 6ème Étage', category: 'Amenag'},
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
      {id: '58', source: '../static/assets/projects/Resid/CaliforniaGolfRessort/img00.jpg', link: '/projets/detail/CaliforniaGolfRessort', title: 'CaliforniaGolfRessort', category: 'Resid'},
      // Restau
      {id: '59', source: '../static/assets/projects/Restau/aufourabois/img00.jpg', link: '/projets/detail/aufourabois', title: 'aufourabois', category: 'Restau'},
      {id: '60', source: '../static/assets/projects/Restau/briochedoree/img00.jpg', link: '/projets/detail/briochedoree', title: 'briochedoree', category: 'Restau'},
      {id: '61', source: '../static/assets/projects/Restau/Club20-1/img00.jpg', link: '/projets/detail/Club20-1', title: 'Club20-1', category: 'Restau'},
      {id: '62', source: '../static/assets/projects/Restau/Lagrillardiere/img00.jpg', link: '/projets/detail/Lagrillardiere', title: 'Lagrillardiere', category: 'Restau'},
      {id: '63', source: '../static/assets/projects/Restau/LELIERRE/img00.jpg', link: '/projets/detail/LELIERRE', title: 'LELIERRE', category: 'Restau'},
      {id: '64', source: '../static/assets/projects/Restau/Lugano/img00.jpg', link: '/projets/detail/Lugano', title: 'Lugano', category: 'Restau'},
      {id: '65', source: '../static/assets/projects/Restau/Othali/img00.jpg', link: '/projets/detail/Othali', title: 'Othali', category: 'Restau'},
      {id: '66', source: '../static/assets/projects/Restau/Pizzahut/img00.jpg', link: '/projets/detail/Pizzahut', title: 'Pizzahut', category: 'Restau'},
      {id: '67', source: '../static/assets/projects/Restau/SEGAFREDOAnfa/img00.jpg', link: '/projets/detail/SEGAFREDOAnfa', title: 'SEGAFREDOAnfa', category: 'Restau'},
      {id: '68', source: '../static/assets/projects/Restau/SegafredoCIL/img00.jpg', link: '/projets/detail/SegafredoCIL', title: 'SegafredoCIL', category: 'Restau'},
      {id: '69', source: '../static/assets/projects/Restau/Thaigarden/img00.jpg', link: '/projets/detail/Thaigarden', title: 'Thaigarden', category: 'Restau'},
      {id: '70', source: '../static/assets/projects/Restau/Wong/img00.jpg', link: '/projets/detail/Wong', title: 'Wong', category: 'Restau'},
      // Touri
      {id: '71', source: '../static/assets/projects/Touri/ClubAttijariWafaCos/img00.jpg', link: '/projets/detail/ClubAttijariWafaCos', title: 'ClubAttijariWafaCos', category: 'Touri'},
      {id: '72', source: '../static/assets/projects/Touri/CLUBBPMarrakech/img00.jpg', link: '/projets/detail/CLUBBPMarrakech', title: 'CLUBBPMarrakech', category: 'Touri'},
      {id: '73', source: '../static/assets/projects/Touri/MariottHotelTetouen/img00.jpg', link: '/projets/detail/MariottHotelTetouen', title: 'MariottHotelTetouen', category: 'Touri'},
      {id: '74', source: '../static/assets/projects/Touri/RAMOMNISPORT/img00.jpg', link: '/projets/detail/RAMOMNISPORT', title: 'RAMOMNISPORT', category: 'Touri'},
      {id: '75', source: '../static/assets/projects/Touri/RMACentreestivageMarrakech/img00.jpg', link: '/projets/detail/RMACentreestivageMarrakech', title: 'RMACentreestivageMarrakech', category: 'Touri'},
      {id: '76', source: '../static/assets/projects/Touri/RMAClubCasablanca/img00.jpg', link: '/projets/detail/RMAClubCasablanca', title: 'RMAClubCasablanca', category: 'Touri'},
      // urbapro
      {id: '76', source: '../static/assets/projects/Urbapro/Bouskouragolfcity/img00.jpg', link: '/projets/detail/Bouskouragolfcity', title: 'Bouskouragolfcity', category: 'Urbapro'},
      {id: '77', source: '../static/assets/projects/Urbapro/LesJardinsdelOcean/img00.jpg', link: '/projets/detail/LesJardinsdelOcean', title: 'LesJardinsdelOcean', category: 'Urbapro'},
      {id: '78', source: '../static/assets/projects/Urbapro/VictoriaCity/img00.jpg', link: '/projets/detail/VictoriaCity', title: 'VictoriaCity', category: 'Urbapro'}

    ],
    elementsInvalides: 0,
    articles: [
      {title: 'Titre de l\'article', txt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', image: 'https://res.cloudinary.com/kbellioum/image/upload/v1514543655/Adrchiproject/BNK_94.jpg', link: '/nouveau/detail/article1'},
      {title: 'Titre de l\'article', txt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', image: 'https://res.cloudinary.com/kbellioum/image/upload/v1514543655/Adrchiproject/BNK_94.jpg', link: '/nouveau/detail/article2'},
      {title: 'Titre de l\'article', txt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', image: 'https://res.cloudinary.com/kbellioum/image/upload/v1514543655/Adrchiproject/BNK_94.jpg', link: '/nouveau/detail/article3'},
      {title: 'Titre de l\'article', txt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', image: 'https://res.cloudinary.com/kbellioum/image/upload/v1514543655/Adrchiproject/BNK_94.jpg', link: '/nouveau/detail/article4'}
    ]
  },
  mutations: {
    setelementsInvalides (state, payload) {
      state.elementsInvalides = payload
    },
    incelementsInvalides (state) {
      state.elementsInvalides++
    }
  },
  actions: {
    setelementsInvalides ({commit}) {
      commit('setelementsInvalides', 0)
    },
    incelementsInvalides ({commit}) {
      commit('incelementsInvalides')
    }
  },
  getters: {
    getelementsInvalides (state) {
      return state.elementsInvalides
    },
    getProjects (state) {
      return state.projects
    },
    getProjectByCategory (state) {
      return (category) => {
        return state.projects.find((project) => {
          return project.category === category
        })
      }
    },
    getNouveautes (state) {
      return state.articles
    }
  }
})