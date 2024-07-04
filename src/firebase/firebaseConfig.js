import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAxWybxwPBSZnJwH_dydvfVetqCUFVsAqA",
  authDomain: "gaming-corpse.firebaseapp.com",
  projectId: "gaming-corpse",
  storageBucket: "gaming-corpse.appspot.com",
  messagingSenderId: "193444232572",
  appId: "1:193444232572:web:a02aab4eda60f1a38738f9",
  measurementId: "G-CTDWXN9QLK"
};





const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { firebaseApp, db, auth };
