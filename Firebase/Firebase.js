// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAB55uVpl2uk2OIvgHsyYPXsBl04SaHduU",
  authDomain: "task-manager-4d969.firebaseapp.com",
  projectId: "task-manager-4d969",
  storageBucket: "task-manager-4d969.appspot.com",
  messagingSenderId: "465880784361",
  appId: "1:465880784361:web:0d638d8938ca99daaaff78",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;