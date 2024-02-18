// import {
//   getApps,
//   getApp,
//   initializeApp
// } from "firebase/app"
// import {
//   getAuth
// } from "firebase/auth"
// import {
//   getFirestore
// } from "firebase/firestore"

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID
// };


// export const app = getApps.length > 0 ? getApps(): initializeApp(firebaseConfig);

// export const auth = getAuth(app);
// export const db = getFirestore(app);

// Import the functions you need from the SDKs you need

import {
  getApps,
  getApp,
  initializeApp
} from "firebase/app";
import {
  getAuth
} from "firebase/auth";
import {
  getFirestore
} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHvMKzaoFY2UynBjHToWf56C2A-9ybkws",
  authDomain: "codeditor-b732d.firebaseapp.com",
  projectId: "codeditor-b732d",
  storageBucket: "codeditor-b732d.appspot.com",
  messagingSenderId: "510171114962",
  appId: "1:510171114962:web:e7403c8fa76b1a7995ec0b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)