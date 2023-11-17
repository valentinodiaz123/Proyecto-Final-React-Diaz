import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    // aca va el objeto que nos da firebase
  apiKey: "AIzaSyCkt_EF_BNRQ79QY1yrQc3NGs61Eg0y-40",
  authDomain: "ecomerce-react-efa9b.firebaseapp.com",
  projectId: "ecomerce-react-efa9b",
  storageBucket: "ecomerce-react-efa9b.appspot.com",
  messagingSenderId: "630639700667",
  appId: "1:630639700667:web:8e6505ebf6a2255135d79e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)