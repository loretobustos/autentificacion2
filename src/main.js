import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

var firebaseConfig = {
    apiKey: "AIzaSyDh2mf3Ewt3ARlen-KTwHYNwSm76f6zfzE",
    authDomain: "m5clase1-46d5a.firebaseapp.com",
    databaseURL: "https://m5clase1-46d5a.firebaseio.com",
    projectId: "m5clase1-46d5a",
    storageBucket: "m5clase1-46d5a.appspot.com",
    messagingSenderId: "891529518989",
    appId: "1:891529518989:web:6fcd4a35cc0d873d3fe7c4",
    measurementId: "G-NJEDTMDC3S"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


firebase.auth().onAuthStateChanged(function() {

    new Vue({
        router,
        store,
        render: h => h(App)
    }).$mount('#app')
})