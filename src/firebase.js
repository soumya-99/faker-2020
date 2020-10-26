import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA82K0ONtkE778uAIG9Ni-I4H-04P_6qzo",
  authDomain: "faker-90f10.firebaseapp.com",
  databaseURL: "https://faker-90f10.firebaseio.com",
  projectId: "faker-90f10",
  storageBucket: "faker-90f10.appspot.com",
  messagingSenderId: "67824893888",
  appId: "1:67824893888:web:089e6ebce97a0c5d8cd225",
  measurementId: "G-EPMYWS3DHG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;