import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyAIyO6jpFREWZAVTiryGSZ4D4nQ77SOJJ8",
    authDomain: "covidassess.firebaseapp.com",
    databaseURL: "https://covidassess.firebaseio.com",
    projectId: "covidassess",
    storageBucket: "covidassess.appspot.com",
    messagingSenderId: "934580570870",
    appId: "1:934580570870:web:2ad3f6bf4913b6f2b43ad7",
    measurementId: "G-XPEX3GLZEJ"
  };
  var fire=firebase.initializeApp(firebaseConfig);
  export default fire;