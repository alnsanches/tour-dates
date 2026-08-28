import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js"

const firebaseConfig = {

    apiKey: '<your-api-key>',
    authDomain: '<your-auth-domain>',
    databaseURL: '<your-database-url>',
    storageBucket: '<your-storage-bucket>'

}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export { db }

// I changed my FirebaseConfig to this model to protect my code
