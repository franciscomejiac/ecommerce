import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA4WIWawyAiC5IB4siJdHi203xMYBOJ20I",
    authDomain: "ecommerce-1f792.firebaseapp.com",
    projectId: "ecommerce-1f792",
    storageBucket: "ecommerce-1f792.appspot.com",
    messagingSenderId: "702720609536",
    appId: "1:702720609536:web:a7d6ca7396a64600c037e5"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
