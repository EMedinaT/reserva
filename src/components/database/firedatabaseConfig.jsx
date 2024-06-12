import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCgPxWjHfCJGdinkrL_CE4FYKVVLx6eHWc",
  authDomain: "app-firebase-j.firebaseapp.com",
  projectId: "app-firebase-j",
  storageBucket: "app-firebase-j.appspot.com",
  messagingSenderId: "1076526151022",
  appId: "1:1076526151022:web:7cb8a78875d349a4297d7f"
};
const app = initializeApp(firebaseConfig);
export const connDatabase = getFirestore(app);