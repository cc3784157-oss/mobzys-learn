
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCpUrebV1UMvkwsVPipdhQexLwIx_YRuiM",
  authDomain: "mobzy-s.firebaseapp.com",
  projectId: "mobzy-s",
  storageBucket: "mobzy-s.firebasestorage.app",
  messagingSenderId: "116512025087",
  appId: "1:116512025087:web:ae93fbcd47652796afdfca",
  measurementId: "G-W7QSX5ZG6E"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)