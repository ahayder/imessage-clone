import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_S6YBfjId9O-Isffv6HY-IQ6HNIrNuwk",
  authDomain: "imessage-f2328.firebaseapp.com",
  databaseURL: "https://imessage-f2328.firebaseio.com",
  projectId: "imessage-f2328",
  storageBucket: "imessage-f2328.appspot.com",
  messagingSenderId: "638864778522",
  appId: "1:638864778522:web:8439b12a49911696c178a3",
  measurementId: "G-C6SPN6DDW0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db