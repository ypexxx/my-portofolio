// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCibQAuZvQL_QwfcW10rrK4fG8sx-ujyro",
  authDomain: "portofolio-2ea6a.firebaseapp.com",
  projectId: "portofolio-2ea6a",
  storageBucket: "portofolio-2ea6a.firebasestorage.app",
  messagingSenderId: "133032874324",
  appId: "1:133032874324:web:4dc2b8b5b3e09514d078c1",
  measurementId: "G-RLMEK1WEGS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };