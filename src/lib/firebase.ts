import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB6aTu8ZqwVBJvRXZxoacJU5i3BNXDZRAM",
  authDomain: "books-shop-310d1.firebaseapp.com",
  projectId: "books-shop-310d1",
  storageBucket: "books-shop-310d1.appspot.com",
  messagingSenderId: "831197261128",
  appId: "1:831197261128:web:1140c1c15cf2c1d46c977d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
