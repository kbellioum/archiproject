<template>
  <div class="home">
    <!-- <div class="text"> -->
      <!-- <h1>Présentation de l'agence</h1> -->
        <div class="row-1">
          <center><h1>Gestion de projets</h1></center>
          <br>
        </div>

        <div class="col-1-pres">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>


        </div>
    <!-- </div> -->
    <div class="photo">
      <img src="https://res.cloudinary.com/kbellioum/image/upload/v1515080933/Adrchiproject/organigramme.jpg" alt="">
    </div>
    <div class="foot">
      <!-- Some space for the scrolling -->
    </div>


  </div>
</template>

<script>
export default {
  name: 'GestionProjet',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.home {
  display: grid;
  grid-template: "h"
                 "c1"
                 "i";
  /* grid-gap: 10px; */
}

.text {

}

.col-1-pres {
  grid-area: c1;
  margin: 5px;
  padding: 5px;
}

.col-2-pres {
  grid-area: c2;
  margin: 5px;
  padding: 5px;
}

.row-1 {
  grid-area: h;
}


.photo {
  grid-area: i;
  padding: 10px;
  margin: 10px;
  display: flex;
  align-items: center;
}

.photo img {
  width: 100%;
  height: 100vh;
  /* margin: 10px; */
  box-shadow: 2px 2px 7px #020202;
  /* display: flex;
  align-items: center; */
  /* width: 100%;
  height: 100%;
  padding: 0;
  margin: 0; */
}

.text p {
  padding: 10px;
  text-align: justify;
}

.row-1 h1 {
  font-weight: 200;
  font-size: 25px;
  padding-left: 10px;
  padding-top: 15px;
}

.col-2-pres h3 {
  font-weight: 400;
}

.foot {
  height: 100px;
}

</style>
