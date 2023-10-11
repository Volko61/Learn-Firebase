import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// Add other Firebase services if needed

const firebaseConfig = {
  // Your Firebase SDK configuration details
};

firebase.initializeApp(firebaseConfig);

export default firebase;
