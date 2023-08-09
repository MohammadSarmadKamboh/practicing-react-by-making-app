// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use // https://firebase.google.com/docs/web/setup#available-libraries // Your web app's Firebase configuration // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXaC-xp4cHy3biUA5MfKu5a2c5MqIo_G0",
  authDomain: "practicing-react-by-making-app.firebaseapp.com",
  projectId: "practicing-react-by-making-app",
  storageBucket: "practicing-react-by-making-app.appspot.com",
  messagingSenderId: "800950169135",
  appId: "1:800950169135:web:66662d1b3ac850219d60da",
  measurementId: "G-9TSJZ5GZ0D",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
