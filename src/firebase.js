import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAJ1NxM7_YZ9a6pCjtyTi7DktdLXEYF2eE",
  authDomain: "netflix-build-f3abc.firebaseapp.com",
  projectId: "netflix-build-f3abc",
  storageBucket: "netflix-build-f3abc.appspot.com",
  messagingSenderId: "1034964995573",
  appId: "1:1034964995573:web:8d9cca0a24370ae54124bc",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth=firebase.auth();

export {auth};
export default db;
