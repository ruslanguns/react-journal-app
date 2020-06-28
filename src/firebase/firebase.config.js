import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBinl8jHHla77ryTBpguLM11HORvtrtHRo",
  authDomain: "react-cursos.firebaseapp.com",
  databaseURL: "https://react-cursos.firebaseio.com",
  projectId: "react-cursos",
  storageBucket: "react-cursos.appspot.com",
  messagingSenderId: "484910504857",
  appId: "1:484910504857:web:2348c88532a7bff0ec1108",
  measurementId: "G-TKTBR90SNY"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
  db,
  googleAuthProvider,
  firebase
}