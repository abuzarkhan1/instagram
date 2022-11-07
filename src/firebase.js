import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyBQlLL6c_cVJ8N6o5HIQJjcVBJ2XmtEg8w",
  authDomain: "insta-login-c5e3e.firebaseapp.com",
  projectId: "insta-login-c5e3e",
  storageBucket: "insta-login-c5e3e.appspot.com",
  messagingSenderId: "403566419857",
  appId: "1:403566419857:web:313db57b73e31d36488430"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();