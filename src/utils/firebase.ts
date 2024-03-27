// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFXMFw8kgo0O4sa-nZuarm_aQyNOt4Su0",
  authDomain: "ggdggd-af72e.firebaseapp.com",
  projectId: "ggdggd-af72e",
  storageBucket: "ggdggd-af72e.appspot.com",
  messagingSenderId: "34335072007",
  appId: "1:34335072007:web:e68b3592f91e8234b2afa2",
  measurementId: "G-D4EDKXKC9Q",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);

export const db = getFirestore(app);
