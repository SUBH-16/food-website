import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import SignUp from "../signpage/testsignup";
import home2 from "../images/home2.png";
import plate from "../images/plate.png";
import spoon from "../images/soppn.jpg";
import cha from "../images/cha.png";
import bur from "../images/burger.png";
function Navbar() {
  return (
    <div>
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
      <div id="body_container">
        <div id="body_image">
          <img src={plate} alt="error" />
        </div>
        <div id="body_des">
          <h2 id="h2_font">
            <span id="span_color">WELCOME</span> THE WORLD OF TASTY <br />
            AND FRESH FOOD
          </h2>
          <h3 id="h3_font">
            It's not just Food<br></br>It's an Experience
          </h3>
          <p>
            Keep it easy with these simple but delicious recipes
            <br />
            from make-ahead lunches midweek meals to fuss-free sides
          </p>
        </div>
      </div>
      <div id="home_body">
        <div id="home_des">
          <img src={cha} alt="error" />
          <p>From 2007 FoodSence provides a unique dinning exprience</p>
          <hr />
        </div>
        <div id="home_part">
          <img src={bur} alt="error" />
          <p>
            welcome to foodSence , where exquisite cuisine meets warm
            hospitality
          </p>
          <hr />
        </div>
      </div>

      <div id="fresh_dishes">
        <h2 id="h2_font">
          <span id="span_color">FRESH DISHES</span>
        </h2>
        <p>Explore our delightful and freshly prepared dishes</p>
        <button id="order_now_button">
          <Link to={"/testsignup"}>Order Now</Link>
        </button>
      </div>
      <footer>
        <div class="footer-container">
          <div class="footer-section">
            <h4>FoodSence</h4>
            <p>See You Tomorrow</p>
          </div>
          <div class="footer-section">
            <h4>Pages</h4>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
              <li>
                <Link to={"/testsignup"}>Sign up</Link>
              </li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>Contact Us</h4>
            <p>Email: info@foodsence.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
          <div class="footer-section">
            <h4>Category of Products</h4>
            <p>Drinks</p>
            <p>Ice-Cream</p>
            <p>Sweet</p>
            <p>Meals</p>
            <p>others</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Navbar;
