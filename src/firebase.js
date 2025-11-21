import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA-6IGqiJDHAsKzvhdfiiNyIyBMW0AVBXI",
  authDomain: "stex-46216.firebaseapp.com",
  databaseURL: "https://stex-46216-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "stex-46216",
  storageBucket: "stex-46216.firebasestorage.app",
  messagingSenderId: "538292676078",
  appId: "1:538292676078:web:a3c77876ff0a34383e5aff",
  measurementId: "G-NL512XHBWG"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
