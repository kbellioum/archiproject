<template>
  <div class="parallax">

    <!-- <h1>Menu Nouveautes</h1>
    <hr>
    <img src="http://via.placeholder.com/1024x500?text=NOUVEAUTES" alt=""> -->
    <div class="ce" v-for="article in articles">
      <div class="row">
        <div class="image">
          <img width="250px" height="200px" :src="article.image" alt="article.title">
        </div>
        <div class="txt">
          <h1>{{article.title}}</h1><br>
          <p>
            {{article.txt}}
          </p>
        </div>
      </div>

    </div>
    <div class="foot">

    </div>

  </div>
</template>

<script>
export default {
  name: 'Nouveautes',
  data () {
    return {
      msg: '',
      articles: [
        {title: 'titre de l\'article', txt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', image: 'https://res.cloudinary.com/kbellioum/image/upload/v1514543655/Adrchiproject/BNK_94.jpg'},
        {title: 'titre de l\'article', txt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', image: 'https://res.cloudinary.com/kbellioum/image/upload/v1514543655/Adrchiproject/BNK_94.jpg'},
        {title: 'titre de l\'article', txt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', image: 'https://res.cloudinary.com/kbellioum/image/upload/v1514543655/Adrchiproject/BNK_94.jpg'},
        {title: 'titre de l\'article', txt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', image: 'https://res.cloudinary.com/kbellioum/image/upload/v1514543655/Adrchiproject/BNK_94.jpg'}
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
