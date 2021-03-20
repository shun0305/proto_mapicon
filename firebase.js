import * as firebase from 'firebase';

// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
import 'firebase/firestore';
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
// const {
//   REACT_APP_FIREBASE_API_KEY,
//   REACT_APP_FIREBASE_AUTH_DOMAIN,
//   REACT_APP_FIREBASE_PROJECT_ID,
//   REACT_APP_FIREBASE_STORAGE_BUCKET,
//   REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   REACT_APP_FIREBASE_APP_ID,
// } = process.env;

// const firebaseConfig = {
//   apiKey: REACT_APP_FIREBASE_API_KEY,
//   authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: REACT_APP_FIREBASE_APP_ID,
// };

const firebaseConfig = {
  apiKey: 'API',
  authDomain: 'protp1-3.firebaseapp.com',
  projectId: 'protp1-3',
  storageBucket: 'protp1-3.appspot.com',
  messagingSenderId: '1034023450671',
  appId: '1:1034023450671:web:aac38a7be5814b97646eda',
};

const firebaseApp = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export const db = firebaseApp.firestore().collection('post');

// export default db;

export default firebase;
//ユーザ登録;
// export const signup = (email, password) => {
//   firebase
//     .auth()
//     .createUserWithEmailAndPassword(email, password)
//     .then((user) => {
//       if (user) {
//         console.log('Success to Signup');
//       }
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// メール＆パスワードログイン
// export const login = (email, password) => {
//   firebase
//     .auth()
//     .signInWithEmailAndPassword(email, password)
//     .then((response) => {
//       alert('Login Success!');
//     })
//     .catch((error) => {
//       alert(error.message);
//     });
// };
