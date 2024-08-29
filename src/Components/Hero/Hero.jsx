import React from "react";
import "./Hero.css";
import hand from "../Assets/Images/handicon3.png";
import arrow from "../Assets/Images/arrow2.png";
import hero_img from "../Assets/Images/heroimage3.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand} alt=""/>
          </div>
          <p>collection</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <img src={arrow} alt="" width={40} />
        </div>
      </div>

      <div className="hero-right">
        <img src={hero_img} alt="" />
      </div>
    </div>
  );
};

export default Hero;
