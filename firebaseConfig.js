import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAgf6ZWLhQJWJXAwLsVDN5s5pXkEeBOPx0",
  authDomain: "e2edatabase.firebaseapp.com",
  projectId: "e2edatabase",
  storageBucket: "e2edatabase.appspot.com",
  messagingSenderId: "151935304798",
  appId: "1:151935304798:web:854527103a91d9dcdd60cf"
};

export const fireapp = initializeApp(firebaseConfig);