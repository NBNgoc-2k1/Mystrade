// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDe0d4E8gmz_9IOuqCXW3CuMBMBoQxjsw8",
    authDomain: "mythworld-ef1f6.firebaseapp.com",
    projectId: "mythworld-ef1f6",
    storageBucket: "mythworld-ef1f6.appspot.com",
    messagingSenderId: "887538622612",
    appId: "1:887538622612:web:1aa786b8dce8547f08d481",
    measurementId: "G-X8LL00CS8K"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
export const database = getFirestore(app)
