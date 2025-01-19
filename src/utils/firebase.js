// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCA8snr-4MVVW2IGsh8ssK2CGvUiPKfU1c",
  authDomain: "linkdin-e6c5c.firebaseapp.com",
  projectId: "linkdin-e6c5c",
  storageBucket: "linkdin-e6c5c.firebasestorage.app",
  messagingSenderId: "195963046214",
  appId: "1:195963046214:web:5430dcf112de0e65673d47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider()
