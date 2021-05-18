  
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyA1rno8olfSsqJ5yIZNAQXj-NQfQoU5uIo",
    authDomain: "to-do-9001d.firebaseapp.com",
    projectId: "to-do-9001d",
    storageBucket: "to-do-9001d.appspot.com",
    messagingSenderId: "913925566867",
    appId: "1:913925566867:web:0a32a026c9a158fc313866"
  };

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;