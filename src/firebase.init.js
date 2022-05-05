// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBpcYqbOpSmZ8GJXtctTXOcoQX8Nfh1kWs",
    authDomain: "cycle-warehouse.firebaseapp.com",
    projectId: "cycle-warehouse",
    storageBucket: "cycle-warehouse.appspot.com",
    messagingSenderId: "15178408198",
    appId: "1:15178408198:web:23ff54f0dbdd2105d5be87"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;