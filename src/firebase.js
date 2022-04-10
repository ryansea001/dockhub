import { initializeApp } from "firebase/app";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
} from "firebase/auth";
import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBsrHIaXuqrnSb6DzdNOATidV3zHwjVmHk",
    authDomain: "dockhtoc.firebaseapp.com",
    projectId: "dockhtoc",
    storageBucket: "dockhtoc.appspot.com",
    messagingSenderId: "566961137876",
    appId: "1:566961137876:web:8eb6e9d9acc882eaacb341",
    measurementId: "G-4P8WDDHV06"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err);
        alert("用户未注册或密码有误，请重试。");
    }
};


export {
    auth,
    db,
    logInWithEmailAndPassword,
};