// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB9crR46DdgV7Usq7A70FbxnZrYOK7UOj8",
    authDomain: "kamlesh-graphologist.firebaseapp.com",
    projectId: "kamlesh-graphologist",
    storageBucket: "kamlesh-graphologist.firebasestorage.app",
    messagingSenderId: "588872312576",
    appId: "1:588872312576:web:595f0a88dc6d2cc08135e5",
    measurementId: "G-X763BVX4EN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
