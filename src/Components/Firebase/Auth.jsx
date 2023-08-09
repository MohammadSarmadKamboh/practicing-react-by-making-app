import "./Auth.css";
import { useState } from "react";
import { auth, googleProvider } from "../../Config/firebaseConfig";
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const Auth = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // console.log(auth?.currentUser?.photoURL);


  const signInHandler = async () => {

    try {
      await createUserWithEmailAndPassword(auth, email, password)
    } catch (error) {
      console.error(error)
    }
  };

  const signOutHandler = async () => {

    try {
      await signOut(auth)
    } catch (error) {
      console.error(error)
    }
  };

  const signInWithGoogleHandler = async () => {

    try {
      await signInWithPopup(auth, googleProvider)
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <>
      <div className="auth-container">
        <input
          type="email"
          placeholder="Email..."
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password..."
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={signInHandler}>Sign In</button>
        <button onClick={signOutHandler}>Sign Out</button>

        <button onClick={signInWithGoogleHandler}>Sign In with Google</button>

      </div>


    </>
  );
};
