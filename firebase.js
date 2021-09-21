// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDOtsfdvhrpE-lpBfpUaTBffFc1W1FMI28",
  authDomain: "modernjavascript-ad4a6.firebaseapp.com",
  projectId: "modernjavascript-ad4a6",
  storageBucket: "modernjavascript-ad4a6.appspot.com",
  messagingSenderId: "261218281560",
  appId: "1:261218281560:web:e500f5f90a28148dcc822d",
  measurementId: "G-N34YCGJ7QJ",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
