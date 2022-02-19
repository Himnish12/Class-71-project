import firebase from "firebase"
require ("@firebase/firestore")

const firebaseConfig = {
    apiKey: "AIzaSyDY-XqN31thcNAdL1gT5cbBUNDudTCwYy0",
    authDomain: "class-71-4e9c0.firebaseapp.com",
    projectId: "class-71-4e9c0",
    storageBucket: "class-71-4e9c0.appspot.com",
    messagingSenderId: "1068978702646",
    appId: "1:1068978702646:web:672cb97505fae842240b97"
  };

  firebase.intializeApp(firebaseConfig)
  export default firebase.firestore();
  