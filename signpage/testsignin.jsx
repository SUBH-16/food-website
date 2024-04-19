import React, { useState } from "react";

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignIn = () => {
    fetch("http://localhost:5000/api/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Authentication failed"); // Throw an error for unsuccessful response
        }
      })
      .then((data) => {
        alert("Logged in successfully"); // Display success message
        setErrorMessage(""); // Clear any previous error message
      })
      .catch((error) => {
        console.error("Error signing in:", error); // Handle error
        setErrorMessage("Incorrect username or password"); // Set error message
      });
  };

  return (
    <div>
      <h2>Sign In</h2>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
}

export default SignIn;
