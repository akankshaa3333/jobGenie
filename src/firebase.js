import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  RecaptchaVerifier,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBSUVsTxzXFrCA_hWszUycwol1UUbEVhME",
  authDomain: "jobgenie-ccb0f.firebaseapp.com",
  projectId: "jobgenie-ccb0f",
  storageBucket: "jobgenie-ccb0f.firebasestorage.app",
  messagingSenderId: "667262922860",
  appId: "1:667262922860:web:89e29aa7f766318eb6e849",
  measurementId: "G-1CN7ECR1GY"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);

export { 
  app, 
  auth, 
  googleProvider, 
  RecaptchaVerifier, 
  db, 
  storage,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail
};

































