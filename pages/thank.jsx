import React from "react";
import { Link } from "react-router-dom";
import Homepage from "./homepage";
import "./thank.css";

function ThankYouPage() {
  return (
    <div className="thank-you-container">
      <div className="thank-you-content">
        <h2>Thank You for your order</h2>
        <p>We appreciate your feedback.</p>
        <img
          src="https://www.jeffco.us/ImageRepository/Document?documentID=28067"
          alt="Thank You"
        />
      </div>
      <Link to={"/"}>Home</Link>
    </div>
  );
}

export default ThankYouPage;
