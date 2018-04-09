import Firebase from 'firebase';

const firebaseApp = Firebase.initializeApp({
  apiKey: 'AIzaSyB1W1pbu5T0YekSSCH5A9d2IsxVWdiXXmo',
  authDomain: 'saviomd-desafio-estantevirtual.firebaseapp.com',
  databaseURL: 'https://saviomd-desafio-estantevirtual.firebaseio.com',
  projectId: 'saviomd-desafio-estantevirtual',
  storageBucket: 'saviomd-desafio-estantevirtual.appspot.com',
  messagingSenderId: '559585335305',
});

const db = firebaseApp.database();

export default db;
