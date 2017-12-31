<template>
  <div class="home">
    <modal name="example"
       :width="656"
       :height="400">
   <div class="box">
    <div class="box-part" id="bp-left">
      <div class="partition" id="partition-register">
        <div class="partition-title">Envoyer Message</div>
        <div class="partition-form">
          <form autocomplete="false">

            <div class="autocomplete-fix">
              <input type="password">
            </div>

            <input id="n-username" type="text" placeholder="Nom">
            <input id="n-email" type="text" placeholder="Email">
            <textarea name="n-message" rows="4" cols="80" placeholder="Message">

            </textarea>
            <!-- <input id="n-password2" type="password" placeholder="Password"> -->
          </form>

          <div style="margin-top: 42px">
          </div>

          <div class="button-set">
            <button id="register-btn">Envoyer</button>
            <button id="annuler-btn" @click="hide">Annuler</button>
          </div>

          <!-- <button class="large-btn github-btn">connect with <span>github</span></button> -->
          <!-- <button class="large-btn facebook-btn">connect with <span>facebook</span></button> -->
        </div>
      </div>
    </div>
    <div class="box-part" id="bp-right">
      <div class="box-messages">
      </div>
    </div>
  </div>

    </modal>

    <!-- <h1>Menu Contcat</h1>
    <hr>
    <img src="http://via.placeholder.com/1024x500?text=Contact" alt=""> -->

    <section id="contact">
    <div class="container">
      <div class="map-clean">
      <!-- <h2 class="text-center lead" style="font-size:40px;font-style:normal;font-weight:12px;font-family:Montserrat, sans-serif;margin-top:20px;padding-top:0px;margin-bottom:20px;">Contact </h2> -->
      <iframe allowfullscreen frameborder="0" width="100%" height="450px" src="https://www.google.com/maps/embed/v1/place?key=+AIzaSyCIf9ec0liQe-WNjdxZs0D_36SubQ346E8&amp;q=ArchiDesign+2%2Cavenue+hassan+souktani+Casablanca%2C+Maroc&amp;zoom=15"></iframe>
      </div>
        <div class="row" height="50%">
            <div class="col1">
                <h2>Adresse :</h2>
                <p class="lead">2, Avenue Hassan Souktani </p>
                <p class="lead">Rez de chausse</p>
                <p class="lead">Casablanca </p>
                <p class="lead">20250 </p>
                <p class="lead">Maroc </p>
            </div>
            <div class="col2">
                <h2>Contact :</h2>
                <p class="lead">T : 05 22 27 76 03</p>
                <p class="lead">T : 05 22 48 49 28</p>
                <p class="lead">T : 05 22 20 79 90</p>
                <p class="lead">F : 05 22 20 79 90</p>
                <p class="lead">Mail : contact@archidesign.ma</p>
            </div>
            <div class="btn">
              <div class="ph3">
                <a class="f6 link dim ph3 pv2 mb2 dib white bg-black" href="#0" @click="show">Laisser nous un message</a>
              </div>
            </div>
        </div>

    </div>
</section>
  <div class="foot">
    <!-- Some space for the scrolling -->
  </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      msg: '',
      time: 0,
      close: false,
      duration: 5000
    }
  },
  methods: {
    hide () {
      // this.close = !this.close
      this.$modal.hide('example')
    },
    show () {
      this.$modal.show('example', {
        title: 'Alert!',
        text: 'You are too awesome',
        buttons: [
          {
            title: 'Deal with it',
            handler: () => { alert('Woot!') }
          },
          {
            title: '',       // Button title
            default: true,    // Will be triggered by default if 'Enter' pressed.
            handler: () => {} // Button click handler
          },
          {
            title: 'Close'
          }
        ]
      })
    },
    beforeClose (event) {
      console.log(event)
      // If modal was open less then 5000 ms - prevent closing it
      if (this.close) {
        event.stop()
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  overflow:scroll;
  overflow-x:hidden;
}
.row {
  display: grid;
  grid-template: "c1 c2"
                 "btn2 btn3";
}

.btn {
  /* position: fixed;
  top: 85%;
  bottom: 120px;
  grid-area: btn3;
  justify-self: end; */

  position: fixed;
  /* top: 90%; */
  bottom: 65px;
  grid-area: btn3;
  justify-self: end;
  z-index: 9999999999;
  right: 0;
  left: 93%;
}

.col1 {
  grid-area: c1;
}

.col2 {
  grid-area: c2;
}

.row div h2 {
  padding: 10px;
  font-weight: 300;
  font-size: 25px;
}

.lead {
  padding: 10px;
  font-weight: 100;
  font-size: 20px;
}

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
    color: #333;
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
    background-color: #333;
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
** Modal style
*/

.box {
	background: white;
	overflow: hidden;
	width: 656px;
	height: 400px;
	border-radius: 2px;
	box-sizing: border-box;
	box-shadow: 0 0 40px black;
	color: #8b8c8d;
	font-size: 0;
}

.box .box-part {
	display: inline-block;
	position: relative;
	vertical-align: top;
	box-sizing: border-box;
	height: 100%;
	width: 50%;
}

.box .box-part#bp-right {
	background: url("https://res.cloudinary.com/kbellioum/image/upload/v1513954225/image01_cs4wnn.jpg") no-repeat center center;
  background-size: 100% 100%;
  border-left: 1px solid #eee;
}

.box .box-messages {
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
}

.box .box-error-message {
	position: relative;
	overflow: hidden;
	box-sizing: border-box;
	height: 0;
	line-height: 32px;
	padding: 0 12px;
	text-align: center;
	width: 100%;
	font-size: 11px;
	color: white;
	background: #F38181;
}

.box .partition {
	width: 100%;
	height: 100%;
}

.box .partition .partition-title {
	box-sizing: border-box;
	padding: 30px;
	width: 100%;
	text-align: center;
	letter-spacing: 1px;
	font-size: 20px;
	font-weight: 300;
}

.box .partition .partition-form {
	padding: 0 20px;
	box-sizing: border-box;
}

.box input[type=password],
  .box input[type=text] {
	display: block;
	box-sizing: border-box;
	margin-bottom: 4px;
	width: 100%;
	font-size: 12px;
	line-height: 2;
	border: 0;
	border-bottom: 1px solid #DDDEDF;
	padding: 4px 8px;
	font-family: inherit;
	transition: 0.5s all;
	outline: none;
}

textarea {
  display: block;
  box-sizing: border-box;
  margin-bottom: 4px;
  width: 100%;
  font-size: 12px;
  line-height: 2;
  border: 0;
  border-bottom: 1px solid #DDDEDF;
  padding: 4px 8px;
  font-family: inherit;
  transition: 0.5s all;
  outline: none;
  resize: none;
}

.box button {
	background: white;
	border-radius: 4px;
	box-sizing: border-box;
	padding: 10px;
	letter-spacing: 1px;
	font-family: "Open Sans", sans-serif;
	font-weight: 400;
	min-width: 140px;
	margin-top: 8px;
	color: #8b8c8d;
	cursor: pointer;
	border: 1px solid #DDDEDF;
	text-transform: uppercase;
	transition: 0.1s all;
	font-size: 10px;
	outline: none;
}

.box button:hover {
	border-color: #c7c8c9;
	color: #6f7071;
}

.box .large-btn {
	width: 100%;
	background: white;
}

.box .large-btn span {
	font-weight: 600;
}

.box .large-btn:hover {
	color: white !important;
}

.box .button-set {
	margin-bottom: 8px;
}

.box #envoyer-btn,
  .box #annuler-btn {
	margin-left: 8px;
}

.box .facebook-btn {
	border-color: #3880FF;
	color: #3880FF;
}

.box .facebook-btn:hover {
	border-color: #3880FF;
	background: #3880FF;
}

.box .github-btn {
	border-color: #DBA226;
	color: #DBA226;
}

.box .github-btn:hover {
	border-color: #DBA226;
	background: #DBA226;
}

.box .autocomplete-fix {
	position: absolute;
	visibility: hidden;
	overflow: hidden;
	opacity: 0;
	width: 0;
	height: 0;
	left: 0;
	top: 0;
}

.pop-out-enter-active,
.pop-out-leave-active {
  transition: all 0.5s;
}
.pop-out-enter,
.pop-out-leave-active {
  opacity: 0;
  transform: translateY(24px);
}
.foot {
  height: 100px;
}

</style>
