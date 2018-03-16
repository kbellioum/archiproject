import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store'
// import Vuetify from 'vuetify'

import VModal from 'vue-js-modal'
import * as firebase from 'firebase'

import AlertCmp from './components/Alert.vue'

Vue.use(VModal)
// Vue.use(Vuetify)

Vue.component('app-alert', AlertCmp)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyC5Un-xyf1mX-wlCyVwQ4RecuCSg8Sa9iQ',
      authDomain: 'archidesign-7d7e1.firebaseapp.com',
      databaseURL: 'https://archidesign-7d7e1.firebaseio.com',
      projectId: 'archidesign-7d7e1',
      storageBucket: 'archidesign-7d7e1.appspot.com',
      messagingSenderId: '920776036391'
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
        this.$store.dispatch('fetchUserData')
      }
    })
  // this.$store.dispatch('loadJobs')
  // this.$store.dispatch('loadEmployers')
  }
})
