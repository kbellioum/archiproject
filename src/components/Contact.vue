<template>
  <div class="home">
    <modal name="contact"
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

            <input id="n-username" type="text" placeholder="Nom" v-model="data.subject">
            <input id="n-email" type="text" placeholder="Email" v-model="data.to">
            <textarea name="n-message" rows="4" cols="80" placeholder="Message" v-model="data.text">

            </textarea>
            <!-- <input id="n-password2" type="password" placeholder="Password"> -->
          </form>

          <div style="margin-top: 42px">
          </div>

          <div class="button-set">
            <button id="register-btn" @click="mailsend">Envoyer</button>
            <button id="annuler-btn" @click="hide">Annuler</button>
            <!-- <div class="g-recaptcha" data-sitekey="6LdX0UAUAAAAABE4YouJfw13ZZIyO40i-Xe6i8sI"></div> -->
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
        <div class="row">
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
            <div class="suite animated infinite slideInDown">
              <h2>
                <i class="fa fa-chevron-down" aria-hidden="true"></i>
              </h2>
            </div>
            <div class="btn">
              <div class="" @click="show">
                Laisser nous un message
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
import axios from 'axios'

export default {
  name: 'Contact',
  data () {
    return {
      msg: '',
      time: 0,
      close: false,
      duration: 5000,
      data: {
        from: '',
        to: '',
        subject: '',
        text: ''
      }
    }
  },
  methods: {
    hide () {
      // this.close = !this.close
      this.$modal.hide('contact')
    },
    mailsend () {
      console.log('Sending Mail ...')
      axios({
        url: 'https://mailsend-kb.herokuapp.com/send',
        method: 'POST',
        dataType: 'json',
        data: {
          from: 'ArchiDesign WebSite <donotreply@sandbox7fe163bd9a5b494c93fc6bdef403637f.mailgun.org>',
          to: 'a.bellioum@archidesign.ma, kbellioum@itknowledge.ma',
          subject: 'Vous avez reçu un message de la part de ' + this.data.subject + '<' + this.data.to + '>',
          text: this.data.text
        }
        // params: {
        //   // https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fwww.archimedia.ma%2Findex.php%3Fformat%3Dfeed%26type%3Drss&api_key=wl6vfhwive3beojsb3arqjxlmtg8fkevdnlmfjui
        //   rss_url: 'http://www.archimedia.ma/index.php?format=feed&type=rss',
        //   api_key: 'wl6vfhwive3beojsb3arqjxlmtg8fkevdnlmfjui',
        //   count: 5
        // }
      })
      .then(response => {
        console.log('response satus', response.status)
        this.hide()
        // console.log('response data', response.data.items)
        // console.log('====== ' + response.feed.title + ' ======')
        // this.rss_title = response.data.items
        // response.data.items[Math.floor(Math.random() * response.data.items.length)].title
        // this.infos = response.data.feed.description
      })
      .catch(e => {
        console.log(e)
      })
    },
    show () {
      this.$modal.show('contact', {
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
                 "s s"
                 "btn2 btn2";
}

.btn {
  grid-area: btn2;
}


.suite {
  grid-area: s;
  text-align: center;
  margin-top: 25px;
  color: gray;
}
.btn div {
  width: 100%;
  background-color: black;
  color: white;
  text-align: center;
  cursor: pointer;
  padding: 20px;
}

.btn div:hover {
  background-color: rgba(255, 228, 0, 0.5);
  color: black;
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
