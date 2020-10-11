import * as firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAIyO6jpFREWZAVTiryGSZ4D4nQ77SOJJ8",
    authDomain: "covidassess.firebaseapp.com",
    databaseURL: "https://covidassess.firebaseio.com",
    projectId: "covidassess",
    storageBucket: "covidassess.appspot.com",
    messagingSenderId: "934580570870",
    appId: "1:934580570870:web:2ad3f6bf4913b6f2b43ad7",
    measurementId: "G-XPEX3GLZEJ"
  };
  firebase.initializeApp(firebaseConfig);
  export default firebase;