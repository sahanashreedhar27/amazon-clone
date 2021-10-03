import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCuQvZqjcPRal44XqV1m8LBVfRbPwoLvac',
  authDomain: 'clone-36d77.firebaseapp.com',
  projectId: 'clone-36d77',
  storageBucket: 'clone-36d77.appspot.com',
  messagingSenderId: '251823332909',
  appId: '1:251823332909:web:b56a27176cc5fdcaaee2a4',
  measurementId: 'G-TMT7FCZPTW'
});

const auth = firebase.auth();

export { auth };
