import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyAT8Mujrkn2Gx2zDiuhhiuxWJePl92LLb4",
  authDomain: "world-tour-dates.firebaseapp.com",
  projectId: "world-tour-dates",
  storageBucket: "world-tour-dates.firebasestorage.app",
  messagingSenderId: "740838858080",
  appId: "1:740838858080:web:77df4d3e3a22484d595205",
  measurementId: "G-S7LDJJ2BXN"
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db }