// utils/firebaseConfig.ts

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // For Firestore (optional)
import { getStorage } from "firebase/storage"; // For Storage (optional)

export const firebaseConfig = {
    apiKey: "AIzaSyDGzkTF928sjzp7uY4jm7CcK-dAxLKk1-c",
    authDomain: "netflex-gtp-pankaj.firebaseapp.com",
    projectId: "netflex-gtp-pankaj",
    storageBucket: "netflex-gtp-pankaj.appspot.com",
    messagingSenderId: "562672715340",
    appId: "1:562672715340:web:9648a2e08243ea67ce56e9",
    measurementId: "G-L1Z7L8ZSVE"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Optional, only if using Firestore
const storage = getStorage(app); // Optional, only if using Storage

export { auth, db, storage };
// export const auth = getAuth();