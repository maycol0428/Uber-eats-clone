import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBAA9Bv-8XA_0QDVi-rdKRmVCAXB2O5Hw0",
  authDomain: "uber-eats-clone-479b7.firebaseapp.com",
  projectId: "uber-eats-clone-479b7",
  storageBucket: "uber-eats-clone-479b7.appspot.com",
  messagingSenderId: "228085859329",
  appId: "1:228085859329:web:7d593b9e0f076e417a6c00",
  measurementId: "G-0WT0Q41V7P",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
