import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAjd7JOXjMIUEUZZeBIcBwF3SMMuGvk0VU",
    authDomain: "catch-of-the-day-oskar.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-oskar-default-rtdb.europe-west1.firebasedatabase.app",
});

const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp};
export default base;