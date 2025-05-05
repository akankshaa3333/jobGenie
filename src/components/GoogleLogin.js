import React, { useState } from "react";
import { auth, provider, signInWithPopup, signOut } from "../firebase";

const GoogleLogin = () => {
  const [user, setUser] = useState(null);

  // 🔹 Google Sign-In function
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user); // User details store karo
      console.log("User Logged In: ", result.user);
    } catch (error) {
      console.error("Login Error: ", error);
    }
  };

  // 🔹 Logout function
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      console.log("User Logged Out");
    } catch (error) {
      console.error("Logout Error: ", error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      {user ? (
        <div>
          <h3>Welcome, {user.displayName}!</h3>
          <img src={user.photoURL} alt="Profile" width="100" style={{ borderRadius: "50%" }} />
          <p>Email: {user.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Sign in with Google</button>
      )}
    </div>
  );
};

export default GoogleLogin;
