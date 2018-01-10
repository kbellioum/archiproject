import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    projects: [
      // Amenag
      // {id: '2', source: 'https://res.cloudinary.com/kbellioum/image/upload/v1514543287/Adrchiproject/31y.jpg', link: '/projets/detail/Mundiapolis', title: 'Mundiapolis', category: 'Amenag'},
      // {id: '3', source: 'https://res.cloudinary.com/kbellioum/image/upload/v1514543937/Adrchiproject/2.jpg', link: '/projets/detail/Region_de_dakhla', title: 'Siège de la région de dakhla', category: 'Amenag'},
      // {id: '4', source: 'https://res.cloudinary.com/kbellioum/image/upload/v1514542916/Adrchiproject/07.jpg', link: '/projets/detail/Marjane', title: 'Marjane', category: 'Amenag'},
      // {id: '5', source: 'https://res.cloudinary.com/kbellioum/image/upload/v1514542954/Adrchiproject/03m.jpg', link: '/projets/detail/The_nest_academy', title: 'The nest academy', category: 'Amenag'},
      {id: '5', source: '../static/assets/projects/Amenag/GalerySoArt/img00.jpg', link: '/projets/detail/GalerySoArt', title: 'Galery So Art', category: 'Amenag'},
      {id: '6', source: '../static/assets/projects/Amenag/cih/img00.jpg', link: '/projets/detail/cih', title: 'CIH Siège', category: 'Amenag'},
      {id: '7', source: '../static/assets/projects/Amenag/cih6/img00.jpg', link: '/projets/detail/cih6', title: 'CIH 6ème Étage', category: 'Amenag'},
      {id: '8', source: '../static/assets/projects/Amenag/ShowroomNespresso/img00.jpg', link: '/projets/detail/ShowroomNespresso', title: 'Showroom Nespresso', category: 'Amenag'},
      // CentreCom
      {id: '1', source: '../static/assets/projects/CentreCom/Moroccomall/img00.jpg', link: '/projets/detail/MoroccoMall', title: 'Morocco Mall', category: 'CentreCom'},
      {id: '9', source: '../static/assets/projects/CentreCom/KiteaGeant/img00.jpg', link: '/projets/detail/KiteaGeant', title: 'Kitea Geant', category: 'CentreCom'},
      {id: '10', source: '../static/assets/projects/CentreCom/MarjaneMarina/img00.jpg', link: '/projets/detail/MarjaneMarina', title: 'Marjane Marina', category: 'CentreCom'},
      {id: '11', source: '../static/assets/projects/CentreCom/MarjaneTachfine/img00.jpg', link: '/projets/detail/MarjaneTachfine', title: 'Marjane Tachfine', category: 'CentreCom'},
      // Conco
      {id: '12', source: '../static/assets/projects/Conco/Calairis/img00.jpg', link: '/projets/detail/Calairis', title: 'Calairis', category: 'Conco'},
      // {id: '13', source: '../static/assets/projects/Conco/DarAlMakhzene/img00.jpg', link: '/projets/detail/DarAlMakhzene', title: 'Dar Al Makhzene', category: 'Conco'},
      {id: '14', source: '../static/assets/projects/Conco/GrandstadedeCasablanca/img00.jpg', link: '/projets/detail/GrandstadedeCasablanca', title: 'Grand stade de Casablanca', category: 'Conco'},
      {id: '15', source: '../static/assets/projects/Conco/Siegedelaregiondedakhla/img00.jpg', link: '/projets/detail/Siegedelaregiondedakhla', title: 'Siege de laregion de dakhla', category: 'Conco'},
      // Educ
      {id: '16', source: '../static/assets/projects/Educ/CrecheThenestacademy/img00.jpg', link: '/projets/detail/CrecheThenestacademy', title: 'Creche The nest academy', category: 'Educ'},
      // {id: '17', source: '../static/assets/projects/Educ/EcoleFranceville/img00.jpg', link: '/projets/detail/EcoleFranceville', title: 'Ecole France ville', category: 'Educ'},
      // {id: '18', source: '../static/assets/projects/Educ/EcoleGARAN/img00.jpg', link: '/projets/detail/EcoleGARAN', title: 'Ecole GARAN', category: 'Educ'},
      {id: '19', source: '../static/assets/projects/Educ/EcoleMontessori/img00.jpg', link: '/projets/detail/EcoleMontessori', title: 'Ecole Montessori', category: 'Educ'},
      // {id: '20', source: '../static/assets/projects/Educ/LeCedre/img00.jpg', link: '/projets/detail/LeCedre', title: 'Le Cedre', category: 'Educ'},
      // {id: '21', source: '../static/assets/projects/Educ/Massalik/img00.jpg', link: '/projets/detail/Massalik', title: 'Massalik', category: 'Educ'},
      {id: '22', source: '../static/assets/projects/Educ/Mundiapolis/img00.jpg', link: '/projets/detail/Mundiapolis', title: 'Mundiapolis', category: 'Educ'},
      // Hospi
      {id: '23', source: '../static/assets/projects/Hospi/Centredesante/img00.jpg', link: '/projets/detail/Centredesante', title: 'Centre de sante', category: 'Hospi'},
      {id: '24', source: '../static/assets/projects/Hospi/CliniqueAlHakim/img00.jpg', link: '/projets/detail/CliniqueAlHakim', title: 'Clinique AlHakim', category: 'Hospi'},
      // {id: '25', source: '../static/assets/projects/Hospi/CliniqueAlKindy/img00.jpg', link: '/projets/detail/CliniqueAlKindy', title: 'Clinique AlKindy', category: 'Hospi'},
      // {id: '26', source: '../static/assets/projects/Hospi/CliniqueAlMadina/img00.jpg', link: '/projets/detail/CliniqueAlMadina', title: 'Clinique AlMadina', category: 'Hospi'},
      {id: '27', source: '../static/assets/projects/Hospi/CliniqueBadr/img00.jpg', link: '/projets/detail/CliniqueBadr', title: 'CliniqueBadr', category: 'Hospi'},
      // {id: '28', source: '../static/assets/projects/Hospi/Cliniquebonnesoeuvresducoeur/img00.jpg', link: '/projets/detail/Cliniquebonnesoeuvresducoeur', title: 'Clinique bonnes oeuvres du coeur', category: 'Hospi'},
      // {id: '29', source: '../static/assets/projects/Hospi/CliniqueCardioCalifornie/img00.jpg', link: '/projets/detail/CliniqueCardioCalifornie', title: 'Clinique Cardio Californie', category: 'Hospi'},
      {id: '30', source: '../static/assets/projects/Hospi/CliniqueDentaire/img00.jpg', link: '/projets/detail/CliniqueDentaire', title: 'Clinique Dentaire', category: 'Hospi'},
      // {id: '31', source: '../static/assets/projects/Hospi/CliniqueGhandi/img00.jpg', link: '/projets/detail/CliniqueGhandi', title: 'Clinique Ghandi', category: 'Hospi'},
      {id: '32', source: '../static/assets/projects/Hospi/CliniqueGuess/img00.jpg', link: '/projets/detail/CliniqueGuess', title: 'Clinique Guess', category: 'Hospi'},
      {id: '33', source: '../static/assets/projects/Hospi/CliniqueLelittoral/img00.jpg', link: '/projets/detail/CliniqueLelittoral', title: 'Clinique Lelittoral', category: 'Hospi'},
      {id: '34', source: '../static/assets/projects/Hospi/CliniqueMaarif/img00.jpg', link: '/projets/detail/CliniqueMaarif', title: 'Clinique Maarif', category: 'Hospi'},
      // {id: '35', source: '../static/assets/projects/Hospi/CliniqueYasmine/img00.jpg', link: '/projets/detail/CliniqueYasmine', title: 'Clinique Yasmine', category: 'Hospi'},
      // Institu
      {id: '36', source: '../static/assets/projects/Institu/AeroportOujdaAngad/img00.jpg', link: '/projets/detail/AeroportOujdaAngad', title: 'Aeroport Oujda Angad', category: 'Institu'},
      {id: '37', source: '../static/assets/projects/Institu/AeroportTanger/img00.jpg', link: '/projets/detail/AeroportTanger', title: 'Aeroport Tanger', category: 'Institu'},
      {id: '38', source: '../static/assets/projects/Institu/AsmaaInvest/img00.jpg', link: '/projets/detail/AsmaaInvest', title: 'Asmaa Invest', category: 'Institu'},
      {id: '39', source: '../static/assets/projects/Institu/BanqueAlMaghribLaayoune/img00.jpg', link: '/projets/detail/BanqueAlMaghribLaayoune', title: 'Banque AlMaghrib Laayoune', category: 'Institu'},
      // {id: '40', source: '../static/assets/projects/Institu/BanquePopulaireAindiab/img00.jpg', link: '/projets/detail/BanquePopulaireAindiab', title: 'Banque Populaire Aindiab', category: 'Institu'},
      // {id: '41', source: '../static/assets/projects/Institu/BMCIOasis/img00.jpg', link: '/projets/detail/BMCIOasis', title: 'BMCI Oasis', category: 'Institu'},
      // {id: '42', source: '../static/assets/projects/Institu/Builtec/img00.jpg', link: '/projets/detail/Builtec', title: 'Builtec', category: 'Institu'},
      {id: '43', source: '../static/assets/projects/Institu/Colorado/img00.jpg', link: '/projets/detail/Colorado', title: 'Colorado', category: 'Institu'},
      {id: '44', source: '../static/assets/projects/Institu/CreditduMarocRooswelt/img00.jpg', link: '/projets/detail/CreditduMarocRooswelt', title: 'Credit du Maroc Rooswelt', category: 'Institu'},
      {id: '45', source: '../static/assets/projects/Institu/Dolidol/img00.jpg', link: '/projets/detail/Dolidol', title: 'Dolidol', category: 'Institu'},
      // {id: '46', source: '../static/assets/projects/Institu/GareFes/img00.jpg', link: '/projets/detail/GareFes', title: 'Gare Fes', category: 'Institu'},
      // {id: '47', source: '../static/assets/projects/Institu/GareRABAT/img00.jpg', link: '/projets/detail/GareRABAT', title: 'Gare RABAT', category: 'Institu'},
      {id: '48', source: '../static/assets/projects/Institu/ImmeubleBoukiSidimaarouf/img00.jpg', link: '/projets/detail/ImmeubleBoukiSidimaarouf', title: 'Immeuble Boukit Sidi maarouf', category: 'Institu'},
      {id: '49', source: '../static/assets/projects/Institu/ImmeubleBounkitSocrate1/img00.jpg', link: '/projets/detail/ImmeubleBounkitSocrate1', title: 'Immeuble Bounkit Socrate1', category: 'Institu'},
      {id: '59', source: '../static/assets/projects/Institu/ImmeubleBounkitSocrate2/img00.jpg', link: '/projets/detail/ImmeubleBounkitSocrate2', title: 'Immeuble Bounkit Socrate2', category: 'Institu'},
      {id: '51', source: '../static/assets/projects/Institu/Maroclear/img00.jpg', link: '/projets/detail/Maroclear', title: 'Maroc lear', category: 'Institu'},
      {id: '52', source: '../static/assets/projects/Institu/Saga/img00.jpg', link: '/projets/detail/Saga', title: 'Saga', category: 'Institu'},
      {id: '53', source: '../static/assets/projects/Institu/Siege2M/img00.jpg', link: '/projets/detail/Siege2M', title: 'Siege 2M', category: 'Institu'},
      // {id: '54', source: '../static/assets/projects/Institu/SiegeAttijari/img00.jpg', link: '/projets/detail/SiegeAttijari', title: 'Siege Attijari', category: 'Institu'},
      {id: '55', source: '../static/assets/projects/Institu/SiegeCOCACOLA/img00.jpg', link: '/projets/detail/SiegeCOCACOLA', title: 'Siege COCACOLA', category: 'Institu'},
      {id: '56', source: '../static/assets/projects/Institu/SiegeHDID/img00.jpg', link: '/projets/detail/SiegeHDID', title: 'Siege HDID', category: 'Institu'},
      {id: '57', source: '../static/assets/projects/Institu/SiegeOFPPT/img00.jpg', link: '/projets/detail/SiegeOFPPT', title: 'Siege OFPPT', category: 'Institu'},
      {id: '58', source: '../static/assets/projects/Institu/Zevaco/img00.jpg', link: '/projets/detail/Zevaco', title: 'Zevaco', category: 'Institu'},
      // Resid
      {id: '58', source: '../static/assets/projects/Resid/BouskouraGolfcity/img00.jpg', link: '/projets/detail/BouskouraGolfcity', title: 'Bouskoura Golf city', category: 'Resid'},
      {id: '58', source: '../static/assets/projects/Resid/CaliforniaGolfRessort/img00.jpg', link: '/projets/detail/CaliforniaGolfRessort', title: 'California Golf Ressort', category: 'Resid'},
      {id: '58', source: '../static/assets/projects/Resid/Lesjardinsdelocean/img00.jpg', link: '/projets/detail/Lesjardinsdelocean', title: 'Les jardins de l\'océan', category: 'Resid'},
      {id: '58', source: '../static/assets/projects/Resid/VillaBassamat/img00.jpg', link: '/projets/detail/VillaBassamat', title: 'Villa Bassamat', category: 'Resid'},
      {id: '58', source: '../static/assets/projects/Resid/ZenithParcTranche1/img00.jpg', link: '/projets/detail/ZenithParcTranche1', title: 'Zenith Parc Tranche 1', category: 'Resid'},
      {id: '58', source: '../static/assets/projects/Resid/ZenithParcTranche2/img00.jpg', link: '/projets/detail/ZenithParcTranche2', title: 'Zenith Parc Tranche 2', category: 'Resid'},
      {id: '58', source: '../static/assets/projects/Resid/ZenithParcTranche3/img00.jpg', link: '/projets/detail/ZenithParcTranche3', title: 'Zenith Parc Tranche 3', category: 'Resid'},
      // Restau
      {id: '59', source: '../static/assets/projects/Restau/aufourabois/img00.jpg', link: '/projets/detail/aufourabois', title: 'aufourabois', category: 'Restau'},
      // {id: '60', source: '../static/assets/projects/Restau/briochedoree/img00.jpg', link: '/projets/detail/briochedoree', title: 'brioche doree', category: 'Restau'},
      {id: '61', source: '../static/assets/projects/Restau/Club20-1/img00.jpg', link: '/projets/detail/Club20-1', title: 'Club20-1', category: 'Restau'},
      // {id: '62', source: '../static/assets/projects/Restau/Lagrillardiere/img00.jpg', link: '/projets/detail/Lagrillardiere', title: 'La grillardiere', category: 'Restau'},
      {id: '63', source: '../static/assets/projects/Restau/LELIERRE/img00.jpg', link: '/projets/detail/LELIERRE', title: 'LE LIERRE', category: 'Restau'},
      // {id: '64', source: '../static/assets/projects/Restau/Lugano/img00.jpg', link: '/projets/detail/Lugano', title: 'Lugano', category: 'Restau'},
      // {id: '65', source: '../static/assets/projects/Restau/Othali/img00.jpg', link: '/projets/detail/Othali', title: 'Othali', category: 'Restau'},
      {id: '66', source: '../static/assets/projects/Restau/Pizzahut/img00.jpg', link: '/projets/detail/Pizzahut', title: 'Pizza hut', category: 'Restau'},
      {id: '67', source: '../static/assets/projects/Restau/SEGAFREDOAnfa/img00.jpg', link: '/projets/detail/SEGAFREDOAnfa', title: 'SEGA FREDO Anfa', category: 'Restau'},
      {id: '68', source: '../static/assets/projects/Restau/SegafredoCIL/img00.jpg', link: '/projets/detail/SegafredoCIL', title: 'Sega fredo CIL', category: 'Restau'},
      {id: '69', source: '../static/assets/projects/Restau/Thaigarden/img00.jpg', link: '/projets/detail/Thaigarden', title: 'Thai garden', category: 'Restau'},
      // {id: '70', source: '../static/assets/projects/Restau/Wong/img00.jpg', link: '/projets/detail/Wong', title: 'Wong', category: 'Restau'},
      // Touri
      {id: '71', source: '../static/assets/projects/Touri/ClubAttijariWafaCos/img00.jpg', link: '/projets/detail/ClubAttijariWafaCos', title: 'Club Attijari Wafa Cos', category: 'Touri'},
      {id: '72', source: '../static/assets/projects/Touri/CLUBBPMarrakech/img00.jpg', link: '/projets/detail/CLUBBPMarrakech', title: 'CLUB BP Marrakech', category: 'Touri'},
      {id: '73', source: '../static/assets/projects/Touri/MariottHotelTetouen/img00.jpg', link: '/projets/detail/MariottHotelTetouen', title: 'Mariott Hotel Tetouen', category: 'Touri'},
      {id: '74', source: '../static/assets/projects/Touri/RAMOMNISPORT/img00.jpg', link: '/projets/detail/RAMOMNISPORT', title: 'RAMOMNI SPORT', category: 'Touri'},
      {id: '75', source: '../static/assets/projects/Touri/RMACentreestivageMarrakech/img00.jpg', link: '/projets/detail/RMACentreestivageMarrakech', title: 'RMA Centre estivage Marrakech', category: 'Touri'},
      {id: '76', source: '../static/assets/projects/Touri/RMAClubCasablanca/img00.jpg', link: '/projets/detail/RMAClubCasablanca', title: 'RMAClubCasablanca', category: 'Touri'},
      // urbapro
      {id: '76', source: '../static/assets/projects/Urbapro/Bouskouragolfcity/img00.jpg', link: '/projets/detail/Bouskouragolfcity', title: 'Bouskoura golf city', category: 'Urbapro'},
      {id: '77', source: '../static/assets/projects/Urbapro/LesJardinsdelOcean/img00.jpg', link: '/projets/detail/LesJardinsdelOcean', title: 'Les Jardins de l\'Ocean', category: 'Urbapro'},
      {id: '78', source: '../static/assets/projects/Urbapro/VictoriaCity/img00.jpg', link: '/projets/detail/VictoriaCity', title: 'Victoria City', category: 'Urbapro'},
      {id: '78', source: '../static/assets/projects/Urbapro/LespinsdeBouskoura/img00.jpg', link: '/projets/detail/LespinsdeBouskoura', title: 'Les pins de Bouskoura', category: 'Urbapro'}

    ],
    elementsInvalides: 0,
    articles: [
      {title: 'Titre de l\'article', txt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', image: 'https://res.cloudinary.com/kbellioum/image/upload/v1514543655/Adrchiproject/BNK_94.jpg', link: '/nouveau/detail/article1'},
      {title: 'Titre de l\'article', txt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', image: 'https://res.cloudinary.com/kbellioum/image/upload/v1514543655/Adrchiproject/BNK_94.jpg', link: '/nouveau/detail/article2'},
      {title: 'Titre de l\'article', txt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', image: 'https://res.cloudinary.com/kbellioum/image/upload/v1514543655/Adrchiproject/BNK_94.jpg', link: '/nouveau/detail/article3'},
      {title: 'Titre de l\'article', txt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', image: 'https://res.cloudinary.com/kbellioum/image/upload/v1514543655/Adrchiproject/BNK_94.jpg', link: '/nouveau/detail/article4'}
    ],
    detailProj: [
      // Amenag
      { name: 'GalerySoArt',
        txt: 'Le projet consiste à réamenager un local commercial en galerie d\'art contemporain. L\'espace en question a été complétement décloisonné afin que l\'architecture laisse place aux oeuvre d\'art qui seront exposés.',
        images: [
        { src: '/static/assets/projects/Amenag/GalerySoArt/details/image01.jpg' },
        { src: '/static/assets/projects/Amenag/GalerySoArt/details/image02.jpg' },
        { src: '/static/assets/projects/Amenag/GalerySoArt/details/image03.jpg' },
        { src: '/static/assets/projects/Amenag/GalerySoArt/details/image04.jpg' }
        ]
      },
      { name: 'cih',
        txt: 'D\'un parti pris architectural porté sur la légèreté, la finesse et la pureté des espaces, le projet porte sur la rénovation du rez-de-chaussée et de la mezzanine du siège de la banque CIH.',
        images: [
        { src: '/static/assets/projects/Amenag/cih/details/image01.jpg' },
        { src: '/static/assets/projects/Amenag/cih/details/image02.jpg' },
        { src: '/static/assets/projects/Amenag/cih/details/image03.jpg' },
        { src: '/static/assets/projects/Amenag/cih/details/image04.jpg' }
        ]
      },
      { name: 'cih6',
        txt: 'Le projet de réaménagement des locaux de direction de la banque CIH s\'est basé sur un concept qui favorise la transparence et la légèreté. Le lien entre espace de travail, organisation et stratégie fait partie des intentionnalité recherchées. ',
        images: [
        { src: '/static/assets/projects/Amenag/cih6/details/image01.jpg' },
        { src: '/static/assets/projects/Amenag/cih6/details/image02.jpg' },
        { src: '/static/assets/projects/Amenag/cih6/details/image03.jpg' },
        { src: '/static/assets/projects/Amenag/cih6/details/image04.jpg' }
        ]
      },
      { name: 'ShowroomNespresso',
        txt: 'Afin de développer l\'identité et l\'image de Nespresso , le groupe a décider de réaménager un local commercial en showroom  perçu avant tout comme un endroit ou s\'informer sur les produits de la marque sans pour autant négliger le côté commercial. C\'est un lieu ou s\'impose la stratégie de communication- marketing.',
        images: [
        { src: '/static/assets/projects/Amenag/ShowroomNespresso/details/image01.jpg' },
        { src: '/static/assets/projects/Amenag/ShowroomNespresso/details/image02.jpg' },
        { src: '/static/assets/projects/Amenag/ShowroomNespresso/details/image03.jpg' },
        { src: '/static/assets/projects/Amenag/ShowroomNespresso/details/image04.jpg' }
        ]
      },
      // CentreCom
      { name: 'MoroccoMall',
        txt: 'Un projet d\'envergure  réalisé en collaboration avec un cabiner international de renom ou le challenge était de réaliser un édifice unique en son genre. Une inspiration faite du site en lui même par la présence de l\'océan, la brise... le design a été imaginer comme une sorte de coquillage reprenant l\'aspect d\'une vague. C\'est en quelque sorte l\'idée d\'une construction sculptée par son environnement.',
        images: [
        { src: '/static/assets/projects/CentreCom/Moroccomall/details/image01.jpg' },
        { src: '/static/assets/projects/CentreCom/Moroccomall/details/image02.jpg' },
        { src: '/static/assets/projects/CentreCom/Moroccomall/details/image03.jpg' },
        { src: '/static/assets/projects/CentreCom/Moroccomall/details/image04.jpg' }
        ]
      },
      { name: 'KiteaGeant',
        txt: 'Le projet consiste à réamenager un local commercial en galerie d\'art contemporain. L\'espace en question a été complétement décloisonné afin que l\'architecture laisse place aux oeuvre d\'art qui seront exposés.',
        images: [
        { src: '/static/assets/projects/CentreCom/KiteaGeant/details/image01.jpg' },
        { src: '/static/assets/projects/CentreCom/KiteaGeant/details/image02.jpg' },
        { src: '/static/assets/projects/CentreCom/KiteaGeant/details/image03.jpg' },
        { src: '/static/assets/projects/CentreCom/KiteaGeant/details/image04.jpg' }
        ]
      },
      { name: 'MarjaneMarina',
        txt: 'Le projet consiste à réamenager un local commercial en galerie d\'art contemporain. L\'espace en question a été complétement décloisonné afin que l\'architecture laisse place aux oeuvre d\'art qui seront exposés.',
        images: [
        { src: '/static/assets/projects/CentreCom/MarjaneMarina/details/image01.jpg' },
        { src: '/static/assets/projects/CentreCom/MarjaneMarina/details/image02.jpg' },
        { src: '/static/assets/projects/CentreCom/MarjaneMarina/details/image03.jpg' },
        { src: '/static/assets/projects/CentreCom/MarjaneMarina/details/image04.jpg' }
        ]
      },
      { name: 'MarjaneTachfine',
        txt: 'Situé sur un quartier en pleine mutation, le nouveau centre commercial Tachefine Center se dresse sur le boulevard Ibnou Tachfine à proximité de la gare ferroviaire casa-voyageur. Venue dans le but de répondre à la nouvelle vocation d\'un quartier modernisé. Le choix de sa localisation met en envergure le renouveau et l\'attractivité d\'un quartier traditionnel qui se modernise.',
        images: [
        { src: '/static/assets/projects/CentreCom/MarjaneTachfine/details/image01.jpg' },
        { src: '/static/assets/projects/CentreCom/MarjaneTachfine/details/image02.jpg' },
        { src: '/static/assets/projects/CentreCom/MarjaneTachfine/details/image03.jpg' },
        { src: '/static/assets/projects/CentreCom/MarjaneTachfine/details/image04.jpg' }
        ]
      },
      // Conco
      { name: 'Calairis',
        txt: 'Le projet consiste à réamenager un local commercial en galerie d\'art contemporain. L\'espace en question a été complétement décloisonné afin que l\'architecture laisse place aux oeuvre d\'art qui seront exposés.',
        images: [
        { src: '/static/assets/projects/Conco/Calairis/details/image01.jpg' },
        { src: '/static/assets/projects/Conco/Calairis/details/image02.jpg' },
        { src: '/static/assets/projects/Conco/Calairis/details/image03.jpg' },
        { src: '/static/assets/projects/Conco/Calairis/details/image04.jpg' }
        ]
      },
      { name: 'GrandstadedeCasablanca',
        txt: 'Le concours international pour le Grand Stade de Casablanca a été lancé par le Ministère Marocain de l\'équipement. Travaillé en collaboration avec l\'agence parisienne SCAU, le projet envisage une capacité de 80.000 spectateurs et doit s\'implanté sur un foncier situé au quartier Sidi-Moumen.',
        images: [
        { src: '/static/assets/projects/Conco/GrandstadedeCasablanca/details/image01.jpg' },
        { src: '/static/assets/projects/Conco/GrandstadedeCasablanca/details/image02.jpg' },
        { src: '/static/assets/projects/Conco/GrandstadedeCasablanca/details/image03.jpg' },
        { src: '/static/assets/projects/Conco/GrandstadedeCasablanca/details/image04.jpg' }
        ]
      },
      { name: 'Siegedelaregiondedakhla',
        txt: 'Le concept destinée à la réalisation du siège de la région de Dakhla a pour objectif de  rechercher une métaphysique provoquée par le site à travers ses atouts sensoriels. Le foncier destiné à accueillir le projet  se localise entre silence et agitation dans une agglomération dont l\'architecture est particulière.',
        images: [
        { src: '/static/assets/projects/Conco/Siegedelaregiondedakhla/details/image01.jpg' },
        { src: '/static/assets/projects/Conco/Siegedelaregiondedakhla/details/image02.jpg' },
        { src: '/static/assets/projects/Conco/Siegedelaregiondedakhla/details/image03.jpg' },
        { src: '/static/assets/projects/Conco/Siegedelaregiondedakhla/details/image04.jpg' }
        ]
      },
      // Educ
      { name: 'CrecheThenestacademy',
        txt: 'Par sa situation sur le boulevard, "The Nest Academy"  s\'inscrit dans les gabarit existant du quartier. Sauf que, pour une volonté de représenter un signal majeur, la tête d’une gigantesque girafe jaune sort du toit et ses pattes semblent agir comme une colonne de soutien du bâtiment. Une idée originale pour créer une animation au sein du quartier mais aussi pour attirer un maximum de passant. L\'infiltration de la girafe à la volumétrie du bâtiment, représente une métaphore évolutive, tout en respectant l\'équilibre du contexte urbain qui l\'entoure.',
        images: [
        { src: '/static/assets/projects/Educ/CrecheThenestacademy/details/image01.jpg' },
        { src: '/static/assets/projects/Educ/CrecheThenestacademy/details/image02.jpg' },
        { src: '/static/assets/projects/Educ/CrecheThenestacademy/details/image03.jpg' },
        { src: '/static/assets/projects/Educ/CrecheThenestacademy/details/image04.jpg' }
        ]
      },
      { name: 'EcoleMontessori',
        txt: 'Le projet consiste à réamenager un local commercial en galerie d\'art contemporain. L\'espace en question a été complétement décloisonné afin que l\'architecture laisse place aux oeuvre d\'art qui seront exposés.',
        images: [
        { src: '/static/assets/projects/Educ/EcoleMontessori/details/image01.jpg' },
        { src: '/static/assets/projects/Educ/EcoleMontessori/details/image02.jpg' },
        { src: '/static/assets/projects/Educ/EcoleMontessori/details/image03.jpg' },
        { src: '/static/assets/projects/Educ/EcoleMontessori/details/image04.jpg' }
        ]
      },
      { name: 'Mundiapolis',
        txt: 'Les principes conceptuels de la réalisation du projet Mundiapolis portent sur une bonne orientation des bâtiments, une ouverture nord-est, une circulation d\'air favorisée par l\'implantation des pilotis, l\'utilisation des barrières végétales contre les nuisances sonores, l\'éclairage naturel ainsi que la mise en place et la gestion  d\'un chantier propre afin de répondre aux exigences de l\'éco construction.',
        images: [
        { src: '/static/assets/projects/Educ/Mundiapolis/details/image01.jpg' },
        { src: '/static/assets/projects/Educ/Mundiapolis/details/image02.jpg' },
        { src: '/static/assets/projects/Educ/Mundiapolis/details/image03.jpg' },
        { src: '/static/assets/projects/Educ/Mundiapolis/details/image04.jpg' }
        ]
      },
      // Hospi
      { name: 'Centredesante',
        txt: 'Le projet consiste à réamenager un local commercial en galerie d\'art contemporain. L\'espace en question a été complétement décloisonné afin que l\'architecture laisse place aux oeuvre d\'art qui seront exposés.',
        images: [
        { src: '/static/assets/projects/Hospi/Centredesante/details/image01.jpg' },
        { src: '/static/assets/projects/Hospi/Centredesante/details/image02.jpg' },
        { src: '/static/assets/projects/Hospi/Centredesante/details/image03.jpg' },
        { src: '/static/assets/projects/Hospi/Centredesante/details/image04.jpg' }
        ]
      },
      { name: 'CliniqueAlHakim',
        txt: 'Le projet consiste à réamenager un local commercial en galerie d\'art contemporain. L\'espace en question a été complétement décloisonné afin que l\'architecture laisse place aux oeuvre d\'art qui seront exposés.',
        images: [
        { src: '/static/assets/projects/Hospi/CliniqueAlHakim/details/image01.jpg' },
        { src: '/static/assets/projects/Hospi/CliniqueAlHakim/details/image02.jpg' },
        { src: '/static/assets/projects/Hospi/CliniqueAlHakim/details/image03.jpg' },
        { src: '/static/assets/projects/Hospi/CliniqueAlHakim/details/image04.jpg' }
        ]
      },
      { name: 'CliniqueBadr',
        txt: 'Le projet consiste à réamenager un local commercial en galerie d\'art contemporain. L\'espace en question a été complétement décloisonné afin que l\'architecture laisse place aux oeuvre d\'art qui seront exposés.',
        images: [
        { src: '/static/assets/projects/Hospi/CliniqueBadr/details/image01.jpg' }
        ]
      },
      { name: 'CliniqueDentaire',
        txt: 'Le projet consiste à réamenager un local commercial en galerie d\'art contemporain. L\'espace en question a été complétement décloisonné afin que l\'architecture laisse place aux oeuvre d\'art qui seront exposés.',
        images: [
        { src: '/static/assets/projects/Hospi/CliniqueDentaire/details/image01.jpg' },
        { src: '/static/assets/projects/Hospi/CliniqueDentaire/details/image02.jpg' }
        ]
      },
      { name: 'CliniqueGuess',
        txt: 'Située dans un prestigieux quartier résidentiel au cœur de la capitale économique, Guess clinique se veut un projet harmonisant les liens entre l\'architecture du bâtiment et la fonctionnalité. En effet, l\'esthétique est reflétée à travers la simplicité de la volumétrie.',
        images: [
        { src: '/static/assets/projects/Hospi/CliniqueGuess/details/image01.jpg' }
        ]
      },
      { name: 'CliniqueLelittoral',
        txt: 'Destinée à recevoir des patients atteints de maladies chroniques, la clinique le littoral est spécialisé en oncologie. L\'objectif de la conception adoptée pour le projet,  allie conformité et convivialité. Le lieu a été pensée de manière à faire oublier le malaise aux patients.',
        images: [
        { src: '/static/assets/projects/Hospi/CliniqueLelittoral/details/image01.jpg' },
        { src: '/static/assets/projects/Hospi/CliniqueLelittoral/details/image02.jpg' }
        ]
      },
      { name: 'CliniqueMaarif',
        txt: 'Le projet consiste à réamenager un local commercial en galerie d\'art contemporain. L\'espace en question a été complétement décloisonné afin que l\'architecture laisse place aux oeuvre d\'art qui seront exposés.',
        images: [
        { src: '/static/assets/projects/Hospi/CliniqueMaarif/details/image01.jpg' },
        { src: '/static/assets/projects/Hospi/CliniqueMaarif/details/image02.jpg' },
        { src: '/static/assets/projects/Hospi/CliniqueMaarif/details/image03.jpg' },
        { src: '/static/assets/projects/Hospi/CliniqueMaarif/details/image04.jpg' }
        ]
      },
      // Institu
      { name: 'AeroportOujdaAngad',
        txt: 'Le projet consiste à réamenager un local commercial en galerie d\'art contemporain. L\'espace en question a été complétement décloisonné afin que l\'architecture laisse place aux oeuvre d\'art qui seront exposés.',
        images: [
        { src: '/static/assets/projects/Institu/AeroportOujdaAngad/details/image01.jpg' },
        { src: '/static/assets/projects/Institu/AeroportOujdaAngad/details/image02.jpg' },
        { src: '/static/assets/projects/Institu/AeroportOujdaAngad/details/image03.jpg' },
        { src: '/static/assets/projects/Institu/AeroportOujdaAngad/details/image04.jpg' }
        ]
      },
      { name: 'AeroportTanger',
        txt: 'Le projet consiste à réamenager un local commercial en galerie d\'art contemporain. L\'espace en question a été complétement décloisonné afin que l\'architecture laisse place aux oeuvre d\'art qui seront exposés.',
        images: [
        { src: '/static/assets/projects/Institu/AeroportTanger/details/image01.jpg' },
        { src: '/static/assets/projects/Institu/AeroportTanger/details/image02.jpg' },
        { src: '/static/assets/projects/Institu/AeroportTanger/details/image03.jpg' }
        ]
      },
      { name: 'AsmaaInvest',
        txt: 'Pour fêter ses vingt ans de leur installation au Maroc, le holding Saoudio-Marocain décide de construire son siège social sur l\'une des principales artères de Casablanca.',
        images: [
        { src: '/static/assets/projects/Institu/AsmaaInvest/details/image01.jpg' },
        { src: '/static/assets/projects/Institu/AsmaaInvest/details/image02.jpg' }
        ]
      },
      { name: 'BanqueAlMaghribLaayoune',
        txt: 'La réalisation de la nouvelle agence Bank Al Maghrib de Laâyoune a fait objet d\'un concours national ou l\'agence Archi Design a réussit à obtenir le 1er prix. Cette initiative a été obtenue grâce à la conception du projet qui se veut répondre aux contraintes environnementales et climatiques ainsi qu\'aux avantages que représente le terrain par sa situation sur une parcelle de 5100 metre carré en plein cœur du quartier administratif de la ville.',
        images: [
        { src: '/static/assets/projects/Institu/BanqueAlMaghribLaayoune/details/image01.jpg' },
        { src: '/static/assets/projects/Institu/BanqueAlMaghribLaayoune/details/image02.jpg' },
        { src: '/static/assets/projects/Institu/BanqueAlMaghribLaayoune/details/image03.jpg' },
        { src: '/static/assets/projects/Institu/BanqueAlMaghribLaayoune/details/image04.jpg' }
        ]
      },
      { name: 'Colorado',
        txt: 'Le projet porte sur le fait de regrouper sur un même site, un siège social et des hangars de production et de stockage, d\'une entreprise marocaine de production et commercialisation de peinture pour bâtiment. Deux secteurs: administratif et industriel, dont l\'architecture est complètement différente doivent s\'harmoniser en eux, tel a été le défit à relever lors de la conception de ce projet.',
        images: [
        { src: '/static/assets/projects/Institu/Colorado/details/image01.jpg' },
        { src: '/static/assets/projects/Institu/Colorado/details/image02.jpg' },
        { src: '/static/assets/projects/Institu/Colorado/details/image03.jpg' },
        { src: '/static/assets/projects/Institu/Colorado/details/image04.jpg' }
        ]
      },
      { name: 'CreditduMarocRooswelt',
        txt: 'La banque Crédit du Maroc installe son agence sur l\'angle du boulevard Franklin Roosevelt et rue Bab Errajaa, au quartier val d\'anfa de Casablanca. L\'édifice s\'inscrit dans une architecture cubique sous un aspect moderne ou, les différents espaces sont comprimés dans un cube fermé tout en supprimant la répétition monotone et l\'égalité des faces ainsi que la symétrie.',
        images: [
        { src: '/static/assets/projects/Institu/CreditduMarocRooswelt/details/image01.jpg' },
        { src: '/static/assets/projects/Institu/CreditduMarocRooswelt/details/image02.jpg' },
        { src: '/static/assets/projects/Institu/CreditduMarocRooswelt/details/image03.jpg' },
        { src: '/static/assets/projects/Institu/CreditduMarocRooswelt/details/image04.jpg' }
        ]
      },
      { name: 'Dolidol',
        txt: 'Le projet consiste à compacter un programme industriel vaste et complexe sur un foncier de superficie importante. L\'enjeu de cette usine d\'ameublement est de réaliser une planification convenable au déroulement de l\'activité tout en envisageant les développement future. C\'est pour cette raison que la perte d\'espace est loin d\'être autorisée.',
        images: [
        { src: '/static/assets/projects/Institu/Dolidol/details/image01.jpg' },
        { src: '/static/assets/projects/Institu/Dolidol/details/image02.jpg' },
        { src: '/static/assets/projects/Institu/Dolidol/details/image03.jpg' },
        { src: '/static/assets/projects/Institu/Dolidol/details/image04.jpg' }
        ]
      },
      { name: 'ImmeubleBoukiSidimaarouf',
        txt: 'Par sa situation stratégique à l\'entrée de la capitale économique, la volonté du client a été de réaliser un projet attractif digne de son emplacement afin de jouer le rôle d\'un repère architectural. ',
        images: [
        { src: '/static/assets/projects/Institu/ImmeubleBoukiSidimaarouf/details/image01.jpg' },
        { src: '/static/assets/projects/Institu/ImmeubleBoukiSidimaarouf/details/image02.jpg' },
        { src: '/static/assets/projects/Institu/ImmeubleBoukiSidimaarouf/details/image03.jpg' },
        { src: '/static/assets/projects/Institu/ImmeubleBoukiSidimaarouf/details/image04.jpg' }
        ]
      },
      { name: 'ImmeubleBounkitSocrate1',
        txt: 'Par son implantation dans un quartier résidentiel dense, la fragmentation des volumes du bâtiment en question font de lui un espace de travail adéquat au bien être des futures utilisateurs. Les façades principales et arrières sont traitées en murs rideaux, structurées par des lignes épurées et par de forts contrastes entre la verticalité et l\'horizontalité qui les caractérisent .',
        images: [
        { src: '/static/assets/projects/Institu/ImmeubleBounkitSocrate1/details/image01.jpg' }
        ]
      },
      { name: 'ImmeubleBounkitSocrate2',
        txt: 'Situé sur le Boulevard Socrate dans un angle de rue et sur un terrain circulaire, le projet consiste à la construction de plateaux bureaux dans un immeuble en R+5.',
        images: [
        { src: '/static/assets/projects/Institu/ImmeubleBounkitSocrate2/details/image01.jpg' }
        ]
      },
      { name: 'Maroclear',
        txt: 'La construction du siège de Maroclear s’est différenciée par une architecture fragmentaire en une volumétrie volontaire où s’articulent les espaces et les volumes, tantôt opaques, tantôt transparents. La forme de l’édifice a été imaginée dans une perspective de tendance contemporaine, basée sur la transparence dans une optique de pureté et d’élégance.',
        images: [
        { src: '/static/assets/projects/Institu/Maroclear/details/image01.jpg' },
        { src: '/static/assets/projects/Institu/Maroclear/details/image02.jpg' },
        { src: '/static/assets/projects/Institu/Maroclear/details/image03.jpg' },
        { src: '/static/assets/projects/Institu/Maroclear/details/image04.jpg' }
        ]
      },
      { name: 'Saga',
        txt: 'Le bâtiment a été conçut pour abriter une société de communication dont les principes de conception ont été définit depuis les premières esquisse du projet: Noblesse, transparence et intégration.',
        images: [
        { src: '/static/assets/projects/Institu/Saga/details/image01.jpg' }
        ]
      },
      { name: 'Siege2M',
        txt: 'L\'agence Archi Design a été choisi par la deuxième chaîne télévisée marocaine afin de construire et d’aménager l’extension de son siège social.',
        images: [
        { src: '/static/assets/projects/Institu/Siege2M/details/image01.jpg' },
        { src: '/static/assets/projects/Institu/Siege2M/details/image02.jpg' },
        { src: '/static/assets/projects/Institu/Siege2M/details/image03.jpg' },
        { src: '/static/assets/projects/Institu/Siege2M/details/image04.jpg' }
        ]
      },
      { name: 'SiegeCOCACOLA',
        txt: 'C\'est dans le cadre d\'un concours lancé par la multinationale qu\'Archi Design a été lauréat pour la construction et l‘aménagement du siège de Coca-cola, situé dans le nouveau quartier industriel de la capitale économique.',
        images: [
        { src: '/static/assets/projects/Institu/SiegeCOCACOLA/details/image01.jpg' },
        { src: '/static/assets/projects/Institu/SiegeCOCACOLA/details/image02.jpg' },
        { src: '/static/assets/projects/Institu/SiegeCOCACOLA/details/image03.jpg' },
        { src: '/static/assets/projects/Institu/SiegeCOCACOLA/details/image04.jpg' }
        ]
      },
      { name: 'SiegeHDID',
        txt: 'Situé dans une petite ruelle du Boulevard Abdelekrim KHETTABI de la capitale économique, le Siège HDID a été conçu de manière à offrir un cadre professionnel agréable.',
        images: [
        { src: '/static/assets/projects/Institu/SiegeHDID/details/image01.jpg' },
        { src: '/static/assets/projects/Institu/SiegeHDID/details/image02.jpg' },
        { src: '/static/assets/projects/Institu/SiegeHDID/details/image03.jpg' },
        { src: '/static/assets/projects/Institu/SiegeHDID/details/image04.jpg' }
        ]
      },
      { name: 'SiegeOFPPT',
        txt: 'Conçu pour le compte de l\'office de la formation professionnelle et de la promotion du travail, Archi Design a approché le projet dans le but d\'améliorer la qualité de formation.',
        images: [
        { src: '/static/assets/projects/Institu/SiegeOFPPT/details/image01.jpg' },
        { src: '/static/assets/projects/Institu/SiegeOFPPT/details/image02.jpg' },
        { src: '/static/assets/projects/Institu/SiegeOFPPT/details/image03.jpg' },
        { src: '/static/assets/projects/Institu/SiegeOFPPT/details/image04.jpg' }
        ]
      },
      { name: 'Zevaco',
        txt: 'Le projet consiste à réamenager un local commercial en galerie d\'art contemporain. L\'espace en question a été complétement décloisonné afin que l\'architecture laisse place aux oeuvre d\'art qui seront exposés.',
        images: [
        { src: '/static/assets/projects/Institu/Zevaco/details/image01.jpg' },
        { src: '/static/assets/projects/Institu/Zevaco/details/image02.jpg' },
        { src: '/static/assets/projects/Institu/Zevaco/details/image03.jpg' }
        ]
      },
      // Resid
      { name: 'BouskouraGolfcity',
        txt: 'Le projet consiste à réamenager un local commercial en galerie d\'art contemporain. L\'espace en question a été complétement décloisonné afin que l\'architecture laisse place aux oeuvre d\'art qui seront exposés.',
        images: [
        { src: '/static/assets/projects/Resid/BouskouraGolfcity/details/image01.jpg' },
        { src: '/static/assets/projects/Resid/BouskouraGolfcity/details/image02.jpg' },
        { src: '/static/assets/projects/Resid/BouskouraGolfcity/details/image03.jpg' }
        ]
      },
      { name: 'CaliforniaGolfRessort',
        txt: 'Le projet consiste à réamenager un local commercial en galerie d\'art contemporain. L\'espace en question a été complétement décloisonné afin que l\'architecture laisse place aux oeuvre d\'art qui seront exposés.',
        images: [
        { src: '/static/assets/projects/Resid/CaliforniaGolfRessort/details/image01.jpg' },
        { src: '/static/assets/projects/Resid/CaliforniaGolfRessort/details/image02.jpg' },
        { src: '/static/assets/projects/Resid/CaliforniaGolfRessort/details/image03.jpg' },
        { src: '/static/assets/projects/Resid/CaliforniaGolfRessort/details/image04.jpg' }
        ]
      },
      { name: 'Lesjardinsdelocean',
        txt: 'Le projet consiste à réamenager un local commercial en galerie d\'art contemporain. L\'espace en question a été complétement décloisonné afin que l\'architecture laisse place aux oeuvre d\'art qui seront exposés.',
        images: [
        { src: '/static/assets/projects/Resid/Lesjardinsdelocean/details/image01.jpg' },
        { src: '/static/assets/projects/Resid/Lesjardinsdelocean/details/image02.jpg' },
        { src: '/static/assets/projects/Resid/Lesjardinsdelocean/details/image03.jpg' },
        { src: '/static/assets/projects/Resid/Lesjardinsdelocean/details/image04.jpg' }
        ]
      },
      { name: 'VillaBassamat',
        txt: 'Le projet consiste à réamenager un local commercial en galerie d\'art contemporain. L\'espace en question a été complétement décloisonné afin que l\'architecture laisse place aux oeuvre d\'art qui seront exposés.',
        images: [
        { src: '/static/assets/projects/Resid/VillaBassamat/details/image01.jpg' },
        { src: '/static/assets/projects/Resid/VillaBassamat/details/image02.jpg' },
        { src: '/static/assets/projects/Resid/VillaBassamat/details/image03.jpg' },
        { src: '/static/assets/projects/Resid/VillaBassamat/details/image04.jpg' }
        ]
      },
      { name: 'ZenithParcTranche1',
        txt: 'Au cœur de la nature, s’insérant dans le vaste projet de ville nouvelle Victoria City à la sortie de Bouskoura, le Zenith Parc propose un produit de moyen standing dont la qualité architecturale est à la hauteur des attentes du consommateur.',
        images: [
        { src: '/static/assets/projects/Resid/ZenithParcTranche1/details/image01.jpg' },
        { src: '/static/assets/projects/Resid/ZenithParcTranche1/details/image02.jpg' },
        { src: '/static/assets/projects/Resid/ZenithParcTranche1/details/image03.jpg' },
        { src: '/static/assets/projects/Resid/ZenithParcTranche1/details/image04.jpg' }
        ]
      },
      { name: 'ZenithParcTranche2',
        txt: 'Au cœur de la nature, s’insérant dans le vaste projet de ville nouvelle Victoria City à la sortie de Bouskoura, le Zenith Parc propose un produit de moyen standing dont la qualité architecturale est à la hauteur des attentes du consommateur.',
        images: [
        { src: '/static/assets/projects/Resid/ZenithParcTranche2/details/image01.jpg' },
        { src: '/static/assets/projects/Resid/ZenithParcTranche2/details/image02.jpg' },
        { src: '/static/assets/projects/Resid/ZenithParcTranche2/details/image03.jpg' },
        { src: '/static/assets/projects/Resid/ZenithParcTranche2/details/image04.jpg' }
        ]
      },
      { name: 'ZenithParcTranche3',
        txt: 'Au cœur de la nature, s’insérant dans le vaste projet de ville nouvelle Victoria City à la sortie de Bouskoura, le Zenith Parc propose un produit de moyen standing dont la qualité architecturale est à la hauteur des attentes du consommateur.',
        images: [
        { src: '/static/assets/projects/Resid/ZenithParcTranche3/details/image01.jpg' }
        ]
      },
      // Restau
      { name: 'aufourabois',
        txt: 'Le projet consiste à réamenager un local commercial en galerie d\'art contemporain. L\'espace en question a été complétement décloisonné afin que l\'architecture laisse place aux oeuvre d\'art qui seront exposés.',
        images: [
        { src: '/static/assets/projects/Restau/aufourabois/details/image01.jpg' },
        { src: '/static/assets/projects/Restau/aufourabois/details/image02.jpg' },
        { src: '/static/assets/projects/Restau/aufourabois/details/image03.jpg' },
        { src: '/static/assets/projects/Restau/aufourabois/details/image04.jpg' }
        ]
      },
      { name: 'Club20',
        txt: 'Le projet consiste à réamenager un local commercial en galerie d\'art contemporain. L\'espace en question a été complétement décloisonné afin que l\'architecture laisse place aux oeuvre d\'art qui seront exposés.',
        images: [
        { src: '/static/assets/projects/Restau/Club20/details/image01.jpg' },
        { src: '/static/assets/projects/Restau/Club20/details/image02.jpg' },
        { src: '/static/assets/projects/Restau/Club20/details/image03.jpg' },
        { src: '/static/assets/projects/Restau/Club20/details/image04.jpg' }
        ]
      },
      { name: 'LELIERRE',
        txt: 'Le projet consiste à réamenager un local commercial en galerie d\'art contemporain. L\'espace en question a été complétement décloisonné afin que l\'architecture laisse place aux oeuvre d\'art qui seront exposés.',
        images: [
        { src: '/static/assets/projects/Restau/LELIERRE/details/image01.jpg' },
        { src: '/static/assets/projects/Restau/LELIERRE/details/image02.jpg' },
        { src: '/static/assets/projects/Restau/LELIERRE/details/image03.jpg' },
        { src: '/static/assets/projects/Restau/LELIERRE/details/image04.jpg' }
        ]
      },
      { name: 'Pizzahut',
        txt: 'Le projet consiste à réamenager un local commercial en galerie d\'art contemporain. L\'espace en question a été complétement décloisonné afin que l\'architecture laisse place aux oeuvre d\'art qui seront exposés.',
        images: [
        { src: '/static/assets/projects/Restau/Pizzahut/details/image01.jpg' },
        { src: '/static/assets/projects/Restau/Pizzahut/details/image02.jpg' },
        { src: '/static/assets/projects/Restau/Pizzahut/details/image03.jpg' }
        ]
      },
      { name: 'SEGAFREDOAnfa',
        txt: 'Le projet consiste à réamenager un local commercial en galerie d\'art contemporain. L\'espace en question a été complétement décloisonné afin que l\'architecture laisse place aux oeuvre d\'art qui seront exposés.',
        images: [
        { src: '/static/assets/projects/Restau/SEGAFREDOAnfa/details/image01.jpg' },
        { src: '/static/assets/projects/Restau/SEGAFREDOAnfa/details/image02.jpg' },
        { src: '/static/assets/projects/Restau/SEGAFREDOAnfa/details/image03.jpg' },
        { src: '/static/assets/projects/Restau/SEGAFREDOAnfa/details/image04.jpg' }
        ]
      },
      { name: 'SegafredoCIL',
        txt: 'Choisissant de s\'implanter dans un quartier résidentiel de la capitale économique Marocaine, la franchise italienne fait appel au service d\'Archi Design pour conceptualiser un édifice qui lui ai dédié en entier.',
        images: [
        { src: '/static/assets/projects/Restau/SegafredoCIL/details/image01.jpg' },
        { src: '/static/assets/projects/Restau/SegafredoCIL/details/image02.jpg' },
        { src: '/static/assets/projects/Restau/SegafredoCIL/details/image03.jpg' },
        { src: '/static/assets/projects/Restau/SegafredoCIL/details/image04.jpg' }
        ]
      },
      { name: 'Thaigarden',
        txt: 'Le projet consiste à réamenager un local commercial en galerie d\'art contemporain. L\'espace en question a été complétement décloisonné afin que l\'architecture laisse place aux oeuvre d\'art qui seront exposés.',
        images: [
        { src: '/static/assets/projects/Restau/Thaigarden/details/image01.jpg' },
        { src: '/static/assets/projects/Restau/Thaigarden/details/image02.jpg' },
        { src: '/static/assets/projects/Restau/Thaigarden/details/image03.jpg' }
        ]
      },
      // Touri
      { name: 'ClubAttijariWafaCos',
        txt: 'Le projet consiste à réamenager un local commercial en galerie d\'art contemporain. L\'espace en question a été complétement décloisonné afin que l\'architecture laisse place aux oeuvre d\'art qui seront exposés.',
        images: [
        { src: '/static/assets/projects/Touri/ClubAttijariWafaCos/details/image01.jpg' },
        { src: '/static/assets/projects/Touri/ClubAttijariWafaCos/details/image02.jpg' },
        { src: '/static/assets/projects/Touri/ClubAttijariWafaCos/details/image03.jpg' },
        { src: '/static/assets/projects/Touri/ClubAttijariWafaCos/details/image04.jpg' },
        { src: '/static/assets/projects/Touri/ClubAttijariWafaCos/details/image05.jpg' },
        { src: '/static/assets/projects/Touri/ClubAttijariWafaCos/details/image06.jpg' }
        ]
      },
      { name: 'CLUBBPMarrakech',
        txt: 'Le projet consiste à réamenager un local commercial en galerie d\'art contemporain. L\'espace en question a été complétement décloisonné afin que l\'architecture laisse place aux oeuvre d\'art qui seront exposés.',
        images: [
        { src: '/static/assets/projects/Touri/CLUBBPMarrakech/details/image01.jpg' },
        { src: '/static/assets/projects/Touri/CLUBBPMarrakech/details/image02.jpg' },
        { src: '/static/assets/projects/Touri/CLUBBPMarrakech/details/image03.jpg' },
        { src: '/static/assets/projects/Touri/CLUBBPMarrakech/details/image04.jpg' }
        ]
      },
      { name: 'MariottHotelTetouen',
        txt: 'Le projet consiste à réamenager un local commercial en galerie d\'art contemporain. L\'espace en question a été complétement décloisonné afin que l\'architecture laisse place aux oeuvre d\'art qui seront exposés.',
        images: [
        { src: '/static/assets/projects/Touri/MariottHotelTetouen/details/image01.jpg' },
        { src: '/static/assets/projects/Touri/MariottHotelTetouen/details/image02.jpg' },
        { src: '/static/assets/projects/Touri/MariottHotelTetouen/details/image03.jpg' }
        ]
      },
      { name: 'RAMOMNISPORT',
        txt: 'Le projet consiste à réamenager un local commercial en galerie d\'art contemporain. L\'espace en question a été complétement décloisonné afin que l\'architecture laisse place aux oeuvre d\'art qui seront exposés.',
        images: [
        { src: '/static/assets/projects/Touri/RAMOMNISPORT/details/image01.jpg' },
        { src: '/static/assets/projects/Touri/RAMOMNISPORT/details/image02.jpg' }
        ]
      },
      { name: 'RMACentreestivageMarrakech',
        txt: 'Le projet consiste à réamenager un local commercial en galerie d\'art contemporain. L\'espace en question a été complétement décloisonné afin que l\'architecture laisse place aux oeuvre d\'art qui seront exposés.',
        images: [
        { src: '/static/assets/projects/Touri/RMACentreestivageMarrakech/details/image01.jpg' },
        { src: '/static/assets/projects/Touri/RMACentreestivageMarrakech/details/image02.jpg' },
        { src: '/static/assets/projects/Touri/RMACentreestivageMarrakech/details/image03.jpg' },
        { src: '/static/assets/projects/Touri/RMACentreestivageMarrakech/details/image04.jpg' },
        { src: '/static/assets/projects/Touri/RMACentreestivageMarrakech/details/image05.jpg' }
        ]
      },
      { name: 'RMAClubCasablanca',
        txt: 'Le projet consiste à réamenager un local commercial en galerie d\'art contemporain. L\'espace en question a été complétement décloisonné afin que l\'architecture laisse place aux oeuvre d\'art qui seront exposés.',
        images: [
        { src: '/static/assets/projects/Touri/RMAClubCasablanca/details/image01.jpg' },
        { src: '/static/assets/projects/Touri/RMAClubCasablanca/details/image02.jpg' },
        { src: '/static/assets/projects/Touri/RMAClubCasablanca/details/image03.jpg' },
        { src: '/static/assets/projects/Touri/RMAClubCasablanca/details/image04.jpg' }
        ]
      },
      // Urbapro
      { name: 'Bouskouragolfcity',
        txt: 'Situé à quelques minutes de l\'entrée de la ville de Casablanca, non loin de l\'aéroport international Mohammed V, mitoyen à la forêt de Bouskoura, le projet Bouskoura Golf City dévire de deux idées importantes: Celle de la prééminence de la verdure sur la densité d\'habitation, et une forte diversification architecturale et résidentielle.',
        images: [
        { src: '/static/assets/projects/Urbapro/Bouskouragolfcity/details/image01.jpg' },
        { src: '/static/assets/projects/Urbapro/Bouskouragolfcity/details/image02.jpg' },
        { src: '/static/assets/projects/Urbapro/Bouskouragolfcity/details/image03.jpg' }
        ]
      },
      { name: 'LesJardinsdelOcean',
        txt: 'Les Jardins de l\'océan, un prestigieux site résidentiel et balnéaire des villas de maitres dans un environnement verdoyant à proximité de toute commodité.',
        images: [
          { src: '/static/assets/projects/Urbapro/LesJardinsdelOcean/details/image01.jpg' },
          { src: '/static/assets/projects/Urbapro/LesJardinsdelOcean/details/image02.jpg' },
          { src: '/static/assets/projects/Urbapro/LesJardinsdelOcean/details/image03.jpg' },
          { src: '/static/assets/projects/Urbapro/LesJardinsdelOcean/details/image04.jpg' }
        ]
      },
      { name: 'VictoriaCity',
        txt: 'Dans le programme d\'extension de la ville de Casablanca, le pôle urbain "Victoria City" se développera sur la zone de Ouled Saleh sous la vocation de mixité sociale et développement durable.',
        images: [
        { src: '/static/assets/projects/Urbapro/VictoriaCity/details/image01.jpg' },
        { src: '/static/assets/projects/Urbapro/VictoriaCity/details/image02.jpg' },
        { src: '/static/assets/projects/Urbapro/VictoriaCity/details/image03.jpg' },
        { src: '/static/assets/projects/Urbapro/VictoriaCity/details/image04.jpg' }
        ]
      },
      { name: 'LespinsdeBouskoura',
        txt: 'Bénéficiant d\'un emplacement exceptionnel à proximité de Casablanca, de l\'autoroute de Marrakech, de la nouvelle rocade menant à Dar Bouazza, le projet "Les pins de Bouskoura" est un projet d\'exception qui se développera sur un foncier de 35 hectares et qui contribuera à soulager les besoins en logements.',
        images: [
        { src: '/static/assets/projects/Urbapro/LespinsdeBouskoura/details/image01.jpg' },
        { src: '/static/assets/projects/Urbapro/LespinsdeBouskoura/details/image02.jpg' }
        ]
      }

      // { name: 'CaliforniaGolfRessort',
      //   images: [
      //   { src: 'https://placeimg.com/640/480/arch' },
      //   { src: 'https://placeimg.com/640/480/arch' },
      //   { src: 'https://placeimg.com/640/480/arch' }
      //   ]
      // },
      // { name: 'BouskouraGolfcity',
      //   images: [
      //   { src: 'https://placeimg.com/640/480/arch' },
      //   { src: 'https://placeimg.com/640/480/arch' },
      //   { src: 'https://placeimg.com/640/480/arch' }
      //   ]
      // },
      // { name: 'MoroccoMall',
      //   images: [
      //   { src: 'https://placeimg.com/640/480/arch' },
      //   { src: 'https://placeimg.com/640/480/arch' },
      //   { src: 'https://placeimg.com/640/480/arch' }
      //   ]
      // },
      // { name: 'KiteaGeant',
      //   images: [
      //   { src: 'https://placeimg.com/640/480/arch' },
      //   { src: 'https://placeimg.com/640/480/arch' },
      //   { src: 'https://placeimg.com/640/480/arch' }
      //   ]
      // },
      // { name: 'MarjaneMarina',
      //   images: [
      //   { src: 'https://placeimg.com/640/480/arch' },
      //   { src: 'https://placeimg.com/640/480/arch' },
      //   { src: 'https://placeimg.com/640/480/arch' }
      //   ]
      // },
      // { name: 'MarjaneTachfine',
      //   images: [
      //   { src: 'https://placeimg.com/640/480/arch' },
      //   { src: 'https://placeimg.com/640/480/arch' },
      //   { src: 'https://placeimg.com/640/480/arch' }
      //   ]
      // },
      // { name: 'AeroportOujdaAngad',
      //   images: [
      //   { src: 'https://placeimg.com/640/480/arch' },
      //   { src: 'https://placeimg.com/640/480/arch' },
      //   { src: 'https://placeimg.com/640/480/arch' }
      //   ]
      // },
      // { name: 'AeroportTanger',
      //   images: [
      //   { src: 'https://placeimg.com/640/480/arch' },
      //   { src: 'https://placeimg.com/640/480/arch' },
      //   { src: 'https://placeimg.com/640/480/arch' }
      //   ]
      // },
      // { name: 'AsmaaInvest',
      //   images: [
      //   { src: 'https://placeimg.com/640/480/arch' },
      //   { src: 'https://placeimg.com/640/480/arch' },
      //   { src: 'https://placeimg.com/640/480/arch' }
      //   ]
      // },
      // { name: 'BanqueAlMaghribLaayoune',
      //   images: [
      //   { src: 'https://placeimg.com/640/480/arch' },
      //   { src: 'https://placeimg.com/640/480/arch' },
      //   { src: 'https://placeimg.com/640/480/arch' }
      //   ]
      // },
      // { name: 'BMCIOasis',
      //   images: [
      //   { src: 'https://placeimg.com/640/480/arch' },
      //   { src: 'https://placeimg.com/640/480/arch' },
      //   { src: 'https://placeimg.com/640/480/arch' }
      //   ]
      // }
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
        return state.projects.filter((project) => {
          return project.category === category
        })
      }
    },
    getNouveautes (state) {
      return state.articles
    },
    getProjectDetail (state) {
      return (name) => {
        return state.detailProj.filter((proj) => {
          return proj.name === name
        })
      }
    }
  }
})
