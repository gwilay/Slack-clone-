import { initializeApp } from "firebase/app"; 
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore"; //For firestore

const firebaseConfig = {
  apiKey: "AIzaSyA1EUKm_qfYOHerSE_BHEQ21ylNq7zhexE",
  authDomain: "slack-clone-2ff39.firebaseapp.com",
  projectId: "slack-clone-2ff39",
  storageBucket: "slack-clone-2ff39.appspot.com",
  messagingSenderId: "1082460755826",
  appId: "1:1082460755826:web:2ff95b1dae98e92cbfefeb",
  measurementId: "G-6JNT0GVFG6",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider, db };
