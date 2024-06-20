import { initializeApp, firebase } from 'firebase/app';
import 'firebase/firestore'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBaq9ItBYZMhcNP35zXYxT3MNI1qswbUh4",
  authDomain: "viva-bem-7c659.firebaseapp.com",
  projectId: "viva-bem-7c659",
  storageBucket: "viva-bem-7c659.appspot.com",
  messagingSenderId: "765200230226",
  appId: "1:765200230226:web:25d716828c481b6a2e3c8b",
  measurementId: "G-L9RRMS3R68"
  };

  // Initialize Firebase

  const app = initializeApp(firebaseConfig);


  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);
export default db

//teste


// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBaq9ItBYZMhcNP35zXYxT3MNI1qswbUh4",
//   authDomain: "viva-bem-7c659.firebaseapp.com",
//   projectId: "viva-bem-7c659",
//   storageBucket: "viva-bem-7c659.appspot.com",
//   messagingSenderId: "765200230226",
//   appId: "1:765200230226:web:25d716828c481b6a2e3c8b",
//   measurementId: "G-L9RRMS3R68"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);