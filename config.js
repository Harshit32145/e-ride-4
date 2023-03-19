import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyDUIp4U1zXm6QDaBAGQfQfDTmIhkiXyBq8",
    authDomain: "e-ride-177d5.firebaseapp.com",
    projectId: "e-ride-177d5",
    storageBucket: "e-ride-177d5.appspot.com",
    messagingSenderId: "211385280166",
    appId: "1:211385280166:web:270090cd41152954757667"
  };



firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

















