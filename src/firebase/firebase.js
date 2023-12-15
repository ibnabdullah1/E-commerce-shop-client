import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCo6cXMO7td3Nq3bqfLGai8hzZhs7YGVtQ",
  authDomain: "eco-bazar-bd.firebaseapp.com",
  projectId: "eco-bazar-bd",
  storageBucket: "eco-bazar-bd.appspot.com",
  messagingSenderId: "246158884108",
  appId: "1:246158884108:web:033998c6ae8eb81f455d29",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
