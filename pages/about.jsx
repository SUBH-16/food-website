import React from "react";
import { Link } from "react-router-dom";
import "./about.css";
import "../navbar/navbar.css";
import Homepage from "./homepage";
import Contact from "./contact";
import abut from "../images/abut1.png";
import about_food from "../images/about_food.png";
import fruit from "../images/fruit.png";
import che1 from "../images/chef1.png";
import che2 from "../images/chef2.png";
import spoon from "../images/soppn.jpg";
function About() {
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
      <div id="parent2">
        <div id="child_abut">
          <h1>About us</h1>
          <h3>To Live A Full Life</h3>
          <h3>You Have To</h3>
          <h3>Fill Your Stomach First</h3>
          <br />
          <p>
            Our site can ensure you quality food, here you can see our home
            <br />
            page ,contact page, then signup to create account after you can
            <br />
            see type of food available in our restaurant then you can order it
            <br />
            and also we ensure that you will be able to get your food within
            <br />
            1hr acrroding to location. if any payment issue occur then we will
            <br />
            refund within 24hr.so if you are comfotable then use it.
            <br />
            we have also some offer part where we can provide discount
            <br />
            for users in some special occasion and for regular user we are{" "}
            <br />
            providing some offers ,be comfotable with us.
            <br />
            <h3>Time : 9AM-11Am</h3>
          </p>
        </div>
        <div id="about_container">
          <img src={abut} />
        </div>
      </div>
      <h2 id="about_h2">Our Strory A Culinary Story</h2>
      <div id="home_body">
        <div id="home_des">
          <img src={about_food} alt="error" />
          <p>Food is arranged on the table in an aesthetically pleasing way</p>
          <hr />
        </div>
        <div id="about_part">
          <img src={fruit} alt="error" />
          <p>Farmer's and markets to ensure their freshness and quality</p>
          <hr />
        </div>
      </div>
      <br />
      <br />
      <h2 id="about_h2">Our Chef</h2>
      <div id="home_body">
        <div id="home_des">
          <h2 id="about_h2">Nicolas Barl</h2>
          <img src={che1} alt="error" />
          <p>
            Lorem ipsum dolor sit amet,consectuer
            <br />
            adipiscing elit.Suspendise varius enim in
            <br /> eros elementum tristique.{" "}
          </p>
          <hr />
        </div>
        <div id="about_chef">
          <h2 id="about_h2">Marie Lengi</h2>
          <img src={che2} alt="error" />
          <p>
            Lorem ipsum dolor sit amet,consectuer
            <br />
            adipiscing elit.Suspendise varius enim in
            <br /> eros elementum tristique.
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
export default About;
