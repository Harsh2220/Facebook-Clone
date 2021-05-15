import firebase from 'firebase';

const firebaseApp=  firebase.initializeApp({
    apiKey: "AIzaSyBm1sUTxbx1VCQe0VHH8Y4VzleOoTZPu3Q",
    authDomain: "facebook-clone-e3b2b.firebaseapp.com",
    projectId: "facebook-clone-e3b2b",
    storageBucket: "facebook-clone-e3b2b.appspot.com",
    messagingSenderId: "965250048095",
    appId: "1:965250048095:web:730cbc6d4379752392fbea",
    measurementId: "G-CFTRT2RNFL"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;