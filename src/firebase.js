import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAtR1vCzYvsPdbRyntHeC0xslt0Me37S-E",
  authDomain: "discord-b6872.firebaseapp.com",
  databaseURL: "https://discord-b6872.firebaseio.com",
  projectId: "discord-b6872",
  storageBucket: "discord-b6872.appspot.com",
  messagingSenderId: "971120597310",
  appId: "1:971120597310:web:d07f5976ec9273df30346f",
  measurementId: "G-G0KXZWLLB4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
