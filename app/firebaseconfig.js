// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC5tEXAMPLE8LhdYhP90bfMTxkGZoWEXAMPLE",
  authDomain: "my-project-123.firebaseapp.com",
  projectId: "my-project-123",
  storageBucket: "my-project-123.appspot.com",
  messagingSenderId: "987654321000",
  appId: "1:987654321000:web:abc123def456ghi789"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };