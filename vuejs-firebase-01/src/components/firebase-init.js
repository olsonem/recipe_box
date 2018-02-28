import firebase from "firebase";
// import firebaseConfig from "@/components/firebase-config";
let firebaseConfig = {
    apiKey: "AIzaSyC6tc3IppNH21xgta6KSTAd4hmJT0iZ1L8",
    authDomain: "recipe-box-162b0.firebaseapp.com",
    databaseURL: "https://recipe-box-162b0.firebaseio.com",
    projectId: "recipe-box-162b0",
    storageBucket: "recipe-box-162b0.appspot.com",
    messagingSenderId: "423983415012"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.database();

export default {
    db: db,
    recipesRef: db.ref("recipes"),
    firebaseApp: firebaseApp
};