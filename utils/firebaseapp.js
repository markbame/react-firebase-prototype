import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyCjVSaxYXIEL55d9dpE55P6z3DAJotUQvg",
    authDomain: "test-pwa-6f7a8.firebaseapp.com",
    databaseURL: "https://test-pwa-6f7a8.firebaseio.com",
    projectId: "test-pwa-6f7a8",
    storageBucket: "test-pwa-6f7a8.appspot.com",
    messagingSenderId: "687128074400"
  };
var fire = firebase.initializeApp(config, "fireapp"+Math.random())
export default fire
