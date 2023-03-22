import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "auth-admin-9f547.firebaseapp.com",
  projectId: "auth-admin-9f547",
  storageBucket: "auth-admin-9f547.appspot.com",
  messagingSenderId: "110210154564",
  appId: "1:110210154564:web:afc42cf8a562173dc03c11",
  measurementId: "G-QQQD5QHFCX"
};

const app = initializeApp(firebaseConfig);
export const auth= getAuth();
export const db = getFirestore(app);


 