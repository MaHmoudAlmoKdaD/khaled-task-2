import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCa-bkFgwOMYSqe5AHSUsooU6fEpEgGkis",
    authDomain: "task2-305c2.firebaseapp.com",
    projectId: "task2-305c2",
    storageBucket: "task2-305c2.appspot.com",
    messagingSenderId: "149677817175",
    appId: "1:149677817175:web:941441dabd1db0753b9212"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);