import firebase from 'firebase';
import "firebase/storage";
require("firebase/firestore");


var firebaseConfig = {
    apiKey: "AIzaSyAA8wzhfTs9xxVxhjTiXpJeIv8qVRmIYtc",
    authDomain: "ecommerce-fc4d3.firebaseapp.com",
    databaseURL: "https://ecommerce-fc4d3.firebaseio.com",
    projectId: "ecommerce-fc4d3",
    storageBucket: "ecommerce-fc4d3.appspot.com",
    messagingSenderId: "718896124810",
    appId: "1:718896124810:web:84ebe0db1a1964c1072e73"
  };
  // Initialize Firebase
 const fb = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  export{fb, db}
