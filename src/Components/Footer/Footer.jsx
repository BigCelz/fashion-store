import React from "react";
import "./Footer.css";
import logo from "../Assets/Images/shoppinglogo.jpg";
import icon1 from "../Assets/Images/icon1.jpg";
import icon2 from "../Assets/Images/icon2.png";
import icon4 from "../Assets/Images/icon4.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo} alt="" />
        <p>KAIDA</p>
      </div>

      <ul className="footer-links">
        <li>Company</li>
        <li>Product</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="footer-social-icons">
        <div className="footer-icons-container">
          <img src={icon1} alt="" />
        </div>

        <div className="footer-icons-container">
          <img src={icon2} alt="" />
        </div>

        <div className="footer-icons-container">
          <img src={icon4} alt="" />
        </div>
      </div>

      <div className="footer-copyright">
        <hr />
        <p>copyright Parcels @2024 - All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
