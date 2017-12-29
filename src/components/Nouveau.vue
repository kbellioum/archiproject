<template>
  <div class="">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Nouveautes',
  data () {
    return {
      msg: '',
      articles: [
        {title: 'Titre de l\'article', txt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', image: 'https://res.cloudinary.com/kbellioum/image/upload/v1514543655/Adrchiproject/BNK_94.jpg', link: '/nouveau/detail/article1'},
        {title: 'Titre de l\'article', txt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', image: 'https://res.cloudinary.com/kbellioum/image/upload/v1514543655/Adrchiproject/BNK_94.jpg', link: '/nouveau/detail/article2'},
        {title: 'Titre de l\'article', txt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', image: 'https://res.cloudinary.com/kbellioum/image/upload/v1514543655/Adrchiproject/BNK_94.jpg', link: '/nouveau/detail/article3'},
        {title: 'Titre de l\'article', txt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', image: 'https://res.cloudinary.com/kbellioum/image/upload/v1514543655/Adrchiproject/BNK_94.jpg', link: '/nouveau/detail/article4'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  overflow: visible !important;
}
.row {
  display: grid;
  grid-template: "im1 txt1 txt1 txt1"
                 "im1 f1 f2 f3";
  /* grid-auto-rows: 50px; */
  grid-gap: 10px;
  border: 1px solid rgba(100, 100, 100, 0.5);
  background-color: rgba(100, 100, 100, 0.5);
}

.ce {
  padding: 20px;
}

.image {
  grid-area: im1;
  padding: 5px;
}
.image img {
  box-shadow: 1px 1px 2px white;
}
.txt {
  grid-area: txt1;
  padding: 3px;
  color: white;
}

.txt p {
  padding: 10px;
  text-align: justify;
}

.txt h1 {
  font-weight: 200;
  font-size: 25px;
  padding-left: 10px;
  padding-top: 5px;
}

.more {
  grid-area: f3;
  justify-self: center;
}

.more a {
  text-decoration: none;
  padding-right: 10px;
  color: white;
  cursor: pointer;
}

.more a:hove {
  color: gray;
}
.parallax {
    /* The image used */
    background-image: url("https://res.cloudinary.com/kbellioum/image/upload/v1514542698/Adrchiproject/Stade_exte%CC%81rieur_vu_depuis_le_parvis_haut.jpg");

    /* Set a specific height */
    min-height: 500px;

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.foot {
  height: 100px;
}
</style>
