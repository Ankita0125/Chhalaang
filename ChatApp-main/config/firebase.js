import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";
// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAqkY8k2sNTLe4-7XqXMe2fH_iUcuZBGQQ",
  authDomain: "chhalaang-958aa.firebaseapp.com",
  projectId: "chhalaang-958aa",
  storageBucket: "chhalaang-958aa.appspot.com",
  messagingSenderId: "46381475984",
  appId: "1:46381475984:web:ab8388559c9d59d13c9015",
  measurementId: "G-1LDMT8YFWK"
  //   @deprecated is deprecated Constants.manifest
};
// initialize firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();
