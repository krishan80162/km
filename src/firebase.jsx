import firebase from 'firebase';

  var firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDjyDRC7tyIiN3NHgP_fHps6QuZmBMGWIk",
    authDomain: "contact-d25d5.firebaseapp.com",
    projectId: "contact-d25d5",
    storageBucket: "contact-d25d5.appspot.com",
    messagingSenderId: "832916975561",
    appId: "1:832916975561:web:b94623ed51ec843abf4218"

});

const db=firebaseConfig.firestore();

export {db};


