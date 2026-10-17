import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, doc, getDoc, setDoc, updateDoc, collection, getDocs, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const app = initializeApp({
  apiKey: "AIzaSyCSuQcor7jlagynFz9Yu6lf6A6YH4T7j94",
  authDomain: "x-fit-gym.firebaseapp.com",
  projectId: "x-fit-gym",
  storageBucket: "x-fit-gym.firebasestorage.app",
  messagingSenderId: "181984480415",
  appId: "1:181984480415:web:545afe5b97e1f95082a6aa"
});
export const auth = getAuth(app);
export const db = getFirestore(app);
export { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail,
  doc, getDoc, setDoc, updateDoc, collection, getDocs, serverTimestamp };
