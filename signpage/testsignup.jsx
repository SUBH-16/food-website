// SignUp.js

import React, { useState } from "react";
import SignIn from "./testsignin";
import Menupage from "../menu/menupage";
import { useNavigate } from "react-router-dom";
import "./signup.css";
import "../navbar/navbar.css";
import { Link } from "react-router-dom";
import spoon from "../images/soppn.jpg";
function SignUp({ handleSignIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate("");

  const handleSignUp = () => {
    fetch("http://localhost:5000/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("User logged in successfully");
        navigate("../menu/menupage");
      })
      .catch((error) => {
        console.error("Error signing up:", error);
      });
  };

  return (
    <div id="signin_body">
      <div id="parent">
        <div id="name_style">
          <div id="name_image">
            <img src={spoon} alt="error" />
          </div>
          <div id="name">
            <h2 id="h2">FoodSence</h2>
            <p id="name_des">See You Tomorrow</p>
          </div>
        </div>
        <div id="container">
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/contact"}>Contact</Link>
          <Link to={"/testsignup"}>Sign up</Link>
        </div>
      </div>
      <br />
      <div id="sign-up-container">
        <div id="sign-up-form">
          <h2 id="h2_font">
            <span id="span_color">Please Sign in</span> then it will redirect to
            <br />
            menu page
          </h2>
          <h2>Sign In</h2>
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
          <button onClick={handleSignUp}>Sign In</button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
