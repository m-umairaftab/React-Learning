// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwpQWTmk2i-l6lazlX09Yh-TGa6AhPWCk",
  authDomain: "chat-app-4ed31.firebaseapp.com",
  projectId: "chat-app-4ed31",
  storageBucket: "chat-app-4ed31.appspot.com",
  messagingSenderId: "673586812179",
  appId: "1:673586812179:web:2613abed5f197cdd15f6e6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
