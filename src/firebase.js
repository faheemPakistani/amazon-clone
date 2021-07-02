// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAARwA08K1uOM5h-mS1bCoKZvKsrtXovq8",
  authDomain: "e-challenge-2ca08.firebaseapp.com",
  projectId: "e-challenge-2ca08",
  storageBucket: "e-challenge-2ca08.appspot.com",
  messagingSenderId: "809742213191",
  appId: "1:809742213191:web:465aeab87ab5f53e6d9162",
  measurementId: "G-G2J33YE1EF",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
