import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descrptionbox-navbox">Description</div>
        <div className="descrptionbox-navbox fade">Reviews(122)</div>
      </div>

      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quis ab
          ipsum, molestias omnis at iste laborum inventore libero ipsa, dolorem
          alias culpa velit modi magnam nobis illum odio! Vitae sed, delectus
          quo, saepe sunt esse repudiandae voluptatum ea nemo impedit, neque
          minima ipsum eius quaerat at labore nobis unde!
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quis ab
          ipsum, molestias omnis at iste laborum inventore libero ipsa, dolorem
          alias culpa velit modi magnam nobis illum odio! Vitae sed, delectus 
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
