import firebase from 'firebase'

const app = firebase.initializeApp({
  apiKey: "AIzaSyB6ykaRxdYpKQW_6lQFKPvAnOjeFICz1lo",
  authDomain: "medicare-a3647.firebaseapp.com",
  projectId: "medicare-a3647",
  storageBucket: "medicare-a3647.appspot.com",
  messagingSenderId: "226702375404",
  appId: "1:226702375404:web:2dd54a8728256fc620e8c9",
  measurementId: "G-8PKYRVCBQT"
})

const firestore = firebase.firestore()

const auth = firebase.auth()

export {firestore, auth, app}
