// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBN8DFHaPOSJXsQ3pUIwTUSznAK58oLvUI",
  authDomain: "alientdb.firebaseapp.com",
  projectId: "alientdb",
  storageBucket: "alientdb.appspot.com",
  messagingSenderId: "805934900323",
  appId: "1:805934900323:web:d3289e82aa22de83f74456"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;