import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD9dwS4qHUU9CBkKb-RQDWOZfQ0dkF40BQ",
    authDomain: "sir-admin-panel.firebaseapp.com",
    projectId: "sir-admin-panel",
    storageBucket: "sir-admin-panel.appspot.com",
    messagingSenderId: "97080537551",
    appId: "1:97080537551:web:b2441abf3ee311997262ba"
  };

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { database, storage,auth };