import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyD7-EXFLmpQ37Py9Mdn0fkpUKbpQSyVlMg",
	authDomain: "clone-fc3d3.firebaseapp.com",
	projectId: "clone-fc3d3",
	storageBucket: "clone-fc3d3.appspot.com",
	messagingSenderId: "546794283729",
	appId: "1:546794283729:web:3b86df76d8c9f30ee4dbf0",
	measurementId: "G-BQ2JG430X1",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth(app);
const db = app.firestore();

export { auth, db };
