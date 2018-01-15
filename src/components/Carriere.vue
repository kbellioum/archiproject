<template>
  <div class="home">
<!--
    <h1>Menu Contcat</h1>
    <hr>
    <img src="http://via.placeholder.com/1024x500?text=Carriere" alt=""> -->
    <div class="head">
      <h1>Titre</h1>
    </div>
    <div class="head2">
      <h2>Condidature Spontanné</h2>
    </div>
    <div class="text">

      <!-- <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p> -->
      <p>
        Ayant vu le jour en 1985 au Canada, Archi Design s'est développée en un premier temps au pays nord américain avant de se présenter et gagner le concours de la Clinique Al Hakim, qui fut son premier projet au territoire national.
      </p>
      <br>
      <p>
        Le succès qu'a eu la clinique citée ci haut a attirer de nouveaux clients dans le secteur hospitalier. Archi Design a donc fait face à une forte demande dans le domaine sanitaire en plus de sa spécialisation dans le secteur de la restauration.
      </p>
      <br>
      <p>
        Archi Design a, en un premier temps, prouver ses compétences dans ses deux domaines avant de cartonner dans d'autres  secteurs  notamment: l'institutionnel, le résidentiel, l'éducatif, le tourisme...
      </p>
      <br>
      <p>
        Aujourd'hui Archi Design est présente sur le territoire marocain depuis une trentaine d'année. Elle a réussit à prouver ses compétence par la réalisation de grands projets d'envergures: Morocco mall, Siège 2m,, Bouskoura Golf city...
      </p>
    </div>
    <div class="im">
      <div class="">
        <img src="https://placeimg.com/400/400/arch" alt="">
      </div>
    </div>
    <div class="formulaire">
      <form class="pa4 black-80">
        <div class="measure">
          <label for="name" class="f6 b db mb2">Nom <span class="normal black-60"></span></label>
          <input id="name" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" placeholder="Votre Nom">
          <!-- <small id="name-desc" class="f6 black-60 db mb2">Helper text for the form control.</small> -->
        </div>
        <div class="measure">
          <label for="name" class="f6 b db mb2">Prénom <span class="normal black-60"></span></label>
          <input id="name" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" placeholder="Votre prénom">
          <!-- <small id="name-desc" class="f6 black-60 db mb2">Helper text for the form control.</small> -->
        </div>
        <div>
          <label for="comment" class="f6 b db mb2">Adresse <span class="normal black-60"></span></label>
          <textarea id="comment" name="comment" class="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2" aria-describedby="comment-desc" placeholder="Votre adresse actuelle"></textarea>
          <!-- <small id="comment-desc" class="f6 black-60">Helper text for a form control. Can use this text to <a href="#" class="link underline black-80 hover-blue">link to more info.</a></small> -->
        </div>
        <div class="measure">
          <label for="name" class="f6 b db mb2">Qualité <span class="normal black-60"></span></label>
          <input id="name" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" placeholder="Le poste que vous occupez actuellement">
          <!-- <small id="name-desc" class="f6 black-60 db mb2">Helper text for the form control.</small> -->
        </div>
        <div class="measure">
          <label for="name" class="f6 b db mb2">Téléphone <span class="normal black-60"></span></label>
          <input id="name" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" placeholder="Votre numéro de téléphone">
          <!-- <small id="name-desc" class="f6 black-60 db mb2">Helper text for the form control.</small> -->
        </div>
        <div>
          <label for="comment" class="f6 b db mb2">Message <span class="normal black-60"></span></label>
          <textarea id="comment" name="comment" class="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2" aria-describedby="comment-desc" placeholder="Laisser une description de votre profile"></textarea>
          <!-- <small id="comment-desc" class="f6 black-60">Helper text for a form control. Can use this text to <a href="#" class="link underline black-80 hover-blue">link to more info.</a></small> -->
        </div>

        <div v-if="!image" class="upload-btn-wrapper">
          <h2></h2>
          <a class="f6 link dim ph3 pv2 mb2 dib white bg-black" href="#0">Deposer votre CV</a>
          <input type="file" @change="onFileChange">
        </div>
        <div v-else>
          <!-- <img :src="image" /> -->
          <a class="f6 link dim ph3 pv2 mb2 dib white bg-black" href="#0">Envoyer</a>
          <br>
          <p>OK file uploaded</p>
          <a class="f6 link dim ph3 pv2 mb2 dib white bg-black" @click="removeImage">Supprimer le CV</a>
        </div>

      </form>



    </div>

    <div class="foot">
      <!-- Some space for the scrolling -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carriere',
  data () {
    return {
      msg: '',
      image: ''
    }
  },
  methods: {
    onFileChange (e) {
      var files = e.target.files || e.dataTransfer.files
      if (!files.length) {
        return
      }

      this.createImage(files[0])
    },
    createImage (file) {
      this.image = new Image()
      var reader = new FileReader()

      reader.onload = (e) => {
        this.image = e.target.result
      }
      reader.readAsDataURL(file)
    },
    removeImage: function (e) {
      this.image = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  display: grid;

  grid-template: "h1 h2"
                 "t f"
                 "im f";
 grid-template-columns: 45% 3fr;
 /* justify-items: stretch; */
}

.text {
  grid-area: t;
  /* margin: 20px; */
  padding: 20px;
  text-align: justify;
}

.im {
  grid-area: im;
  justify-self: center;
}

.im img {
  max-width:100%;
  max-height:100%;
  box-shadow: 2px 1px 1px gray;
}

.im div {
  padding: 20px 20px 20px 20px;
}

.formulaire {
  grid-area: f;
  /* margin-left: auto; */
  /* margin-right: auto; */
  border-left: 1px solid rgba(255, 228, 0, 1);
  padding: 20px;
}

.formulaire h2 {
  padding-left: 32px;
}
.head2 h2 {
  padding-left: 32px;
}

.head {
  grid-area: h1;
  padding-top: 20px;
  padding-left: 20px;
}
.head2 {
  grid-area: h2;
  padding-top: 20px;
  padding-left: 20px;
}

/*
** Form style
*/

.ba {
    border-style: solid;
    border-width: 1px;
}

.b--black-20 {
    border-color: rgba(0, 0, 0, .2);
}

.db {
    display: block;
}

.normal {
    font-weight: normal;
}

.b {
    font-weight: bold;
}

.input-reset {
    -webkit-appearance: none;
       -moz-appearance: none;
}

.input-reset::-moz-focus-inner {
    border: 0;
    padding: 0;
}

.w-100 {
    width: 100%;
}

.black-80 {
    color: rgba(0, 0, 0, .8);
}

.black-60 {
    color: rgba(0, 0, 0, .6);
}

.pa2 {
    padding: .5rem;
}

.pa4 {
    padding: 2rem;
}

.mb2 {
    margin-bottom: .5rem;
}

.f6 {
    font-size: .875rem;
}

.measure {
    max-width: 30em;
}

/*
** Fin form style
*/

/*
** Button Style
*/
.ba {
    border-style: solid;
    border-width: 1px;
}

.bw1 {
    border-width: .125rem;
}

.bw2 {
    border-width: .25rem;
}

.dib {
    display: inline-block;
}

.fw6 {
    font-weight: 600;
}

.tracked {
    letter-spacing: .1em;
}

.link {
    text-decoration: none;
    transition: color .15s ease-in;
}

.link:link, .link:visited {
    transition: color .15s ease-in;
}

.link:hover {
    transition: color .15s ease-in;
}

.link:active {
    transition: color .15s ease-in;
}

.link:focus {
    transition: color .15s ease-in;
    outline: 1px dotted currentColor;
}

.black {
    color: #000;
}

.near-black {
    color: #111;
}

.dark-gray {
    color: #4d4d4f;
}

.mid-gray {
    color: #555;
}

.white {
    color: #fff;
}

.purple {
    color: #5e2ca5;
}

.light-purple {
    color: #a463f2;
}

.dark-pink {
    color: #d5008f;
}

.hot-pink {
    color: #ff41b4;
}

.dark-green {
    color: #137752;
}

.navy {
    color: #001b44;
}

.dark-blue {
    color: #00449e;
}

.bg-black {
    background-color: #000;
}

.bg-near-black {
    background-color: #111;
}

.bg-dark-gray {
    background-color: #4d4d4f;
}

.bg-mid-gray {
    background-color: #555;
}

.bg-purple {
    background-color: #5e2ca5;
}

.bg-light-purple {
    background-color: #a463f2;
}

.bg-dark-pink {
    background-color: #d5008f;
}

.bg-hot-pink {
    background-color: #ff41b4;
}

.bg-dark-green {
    background-color: #137752;
}

.bg-navy {
    background-color: #001b44;
}

.bg-dark-blue {
    background-color: #00449e;
}

.pv2 {
    padding-top: .5rem;
    padding-bottom: .5rem;
}

.ph3 {
    padding-left: 1rem;
    padding-right: 1rem;
}

.mb2 {
    margin-bottom: .5rem;
}

.mb4 {
    margin-bottom: 2rem;
}

.mt4 {
    margin-top: 2rem;
}

.ttu {
    text-transform: uppercase;
}

.f6 {
    font-size: .875rem;
}

.dim {
    opacity: 1;
    transition: opacity .15s ease-in;
}

.dim:hover, .dim:focus {
    opacity: .5;
    transition: opacity .15s ease-in;
}

.dim:active {
    opacity: .8;
    transition: opacity .15s ease-out;
}

/*
** fin button style
*/

.foot {
  height: 100px;
}


/*
** Upload file style
*/

.upload-btn-wrapper {
  position: relative;
  overflow: hidden;
  display: inline-block;
}

.btn {
  border: 2px solid gray;
  color: gray;
  background-color: white;
  padding: 8px 20px;
  border-radius: 8px;
  font-size: 20px;
  font-weight: bold;
}

.upload-btn-wrapper input[type=file] {
  font-size: 100px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}

/*
** fin Upload file style
*/
</style>
