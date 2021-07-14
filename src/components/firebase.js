import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDxVpgataWLd0OixOYNNeA1YAahZEYwEa4",
    authDomain: "whats-app-clone-7723d.firebaseapp.com",
    projectId: "whats-app-clone-7723d",
    storageBucket: "whats-app-clone-7723d.appspot.com",
    messagingSenderId: "451257570982",
    appId: "1:451257570982:web:5e506cbb116a1586580667",
    measurementId: "G-GQB5BW4ND8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;