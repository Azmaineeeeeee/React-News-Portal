import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBk5ZwOKuzP_m8oPvC1N30lZV0P8d60EYM",
  authDomain: "news-portal-23c01.firebaseapp.com",
  projectId: "news-portal-23c01",
  storageBucket: "news-portal-23c01.appspot.com",
  messagingSenderId: "667426226764",
  appId: "1:667426226764:web:6890d9a39f2ca0f8ef2ae9"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);