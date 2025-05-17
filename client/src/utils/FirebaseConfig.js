import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAbZ_EB3GNsr1-nACyCVkMMDx0PePY5Gas",
    authDomain: "buzzwire-ceee4.firebaseapp.com",
    projectId: "buzzwire-ceee4",
    storageBucket: "buzzwire-ceee4.appspot.com",
    messagingSenderId: "696510144393",
    appId: "1:696510144393:web:13a0f0dcc841a598aacb58",
    measurementId: "G-MCYZJF1L13"
  };

const app=initializeApp(firebaseConfig);
export const firebaseAuth=getAuth(app);