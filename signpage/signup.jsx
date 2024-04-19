import React, { useState } from "react";
import "./signup.css";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = () => {
    alert(
      `Account created successfully!\nEmail: ${email}\nPassword: ${password}`
    );
    navigate("../menu/menupage");
  };

  return (
    <div className="signup-container">
      <div className="signup-content">
        <div className="signup-image">
          <img
            src="https://previews.123rf.com/images/ogonkova/ogonkova1202/ogonkova120200140/12489495-vegetable-salad.jpg"
            alt="Sign Up"
          />
        </div>
        <div className="signup-form">
          <h2 className="signup-title">Sign Up</h2>
          <form>
            <div className="form-group">
              <label className="form-label">Email ID:</label>
              <input
                className="form-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Password:</label>
              <input
                className="form-input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              className="signup-button"
              type="button"
              onClick={handleSignUp}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
