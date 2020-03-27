
import firebase from 'firebase'
import 'firebase/firestore';
import 'firebase/auth'
import 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyAIAs2Rkw4eW4_pLrA_VBDfU2ZVv2bDKDc",
  authDomain: "meliormd.firebaseapp.com",
  databaseURL: "https://meliormd.firebaseio.com",
  projectId: "meliormd",
  storageBucket: "meliormd.appspot.com",
  messagingSenderId: "582658854043",
  appId: "1:582658854043:web:c96f948b88c7a13ec34a3e",
  measurementId: "G-L6X2SRXLL7"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
