import firebase from "firebase";
import "@firebase/firestore"
import "@firebase/auth"
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBD92dT-VFZJDGV2g7FaVnq20P4IrVXs8k",
  authDomain: "whats-app-clone-b75c2.firebaseapp.com",
  projectId: "whats-app-clone-b75c2",
  storageBucket: "whats-app-clone-b75c2.appspot.com",
  messagingSenderId: "508941924197",
  appId: "1:508941924197:web:d59433c16f48dc2bfdd38c",
  measurementId: "G-21GP0B468G"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;