import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyA65cOfd1mTkmm8GwExxbe9gkcDr7eIo4g",
  authDomain: "ciclista-eletronico-49303.firebaseapp.com",
  projectId: "ciclista-eletronico-49303",
  storageBucket: "ciclista-eletronico-49303.appspot.com",
  messagingSenderId: "963937407982",
  appId: "1:963937407982:web:52a6ab26a56118e9a234ff"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
