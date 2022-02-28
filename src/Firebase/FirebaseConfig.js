import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLHwdMPjrILVE9WIlxHwNmvspDWQ48R8g",
  authDomain: "proyecto-ecommerce-83f3d.firebaseapp.com",
  projectId: "proyecto-ecommerce-83f3d",
  storageBucket: "proyecto-ecommerce-83f3d.appspot.com",
  messagingSenderId: "351814106452",
  appId: "1:351814106452:web:b5dc3e7ccbd6d587b69cc1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

