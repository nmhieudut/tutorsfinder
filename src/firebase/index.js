import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCGQUUaREjWmVaufEqsWehZrWKdV-XrgTU",
  authDomain: "tutors-finder-70f65.firebaseapp.com",
  databaseURL: "https://tutors-finder-70f65.firebaseio.com",
  projectId: "tutors-finder-70f65",
  storageBucket: "tutors-finder-70f65.appspot.com",
  messagingSenderId: "914183692353",
  appId: "1:914183692353:web:d5959e22fa80d3249526c0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig); 

const storage = firebase.storage();

export { storage, firebase as default };
