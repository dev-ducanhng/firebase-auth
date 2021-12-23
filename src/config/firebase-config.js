import "firebase/auth"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyARm1tQ2QOibEEcqAOqIUgGFFRPAizL6kg",
    authDomain: "the-bank4-c6304.firebaseapp.com",
    projectId: "the-bank4-c6304",
    storageBucket: "the-bank4-c6304.appspot.com",
    messagingSenderId: "768818036095",
    appId: "1:768818036095:web:4243bcf529ddff56cbae4a",
    measurementId: "G-11LC9S0DV8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
// export default db;

export default firebaseApp