import { initializeApp,firebase } from 'firebase/app';
import 'firebase/firestore'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAE7dUnAo6IIiEsXd-k3SsDe16AasHeq34",
    authDomain: "bem-estar-51a02.firebaseapp.com",
    projectId: "bem-estar-51a02",
    storageBucket: "bem-estar-51a02.appspot.com",
    messagingSenderId: "13986404637",
    appId: "1:13986404637:web:880444f8a1a437581e69f4",
    measurementId: "G-QNRJCQ895S"
  };

  // Initialize Firebase

  const app = initializeApp(firebaseConfig);


  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);
export default db