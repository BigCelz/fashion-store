import React, { useContext } from "react";
import "./ProductDisplay.css";
import staricon from "../Assets/Images/staricon1.jpg";
import staricon2 from "../Assets/Images/staricon2.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const {addToCart} = useContext(ShopContext);
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="product-display-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>

        <div className="productdisplay-img">
          <img
            src={product.image}
            alt=""
            className="product-display-main-img"
          />
        </div>
      </div>

      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="product-display-right-stars">
          <img src={staricon} alt="" />
          <img src={staricon} alt="" />
          <img src={staricon} alt="" />
          <img src={staricon} alt="" />
          <img src={staricon2} alt="" />
          <p>(122)</p>
        </div>

        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>

        <div className="product-display-right-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quis ab
          ipsum, molestias omnis at iste laborum inventore libero ipsa, dolorem
          alias culpa velit modi magnam nobis illum odio! Vitae sed, delectus
          quo, saepe sunt esse repudiandae voluptatum ea nemo impedit, neque
          minima ipsum eius quaerat at labore nobis unde!
        </div>

        <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
        </div>

        <button onClick={()=> {addToCart(product.id)}}>ADD TO CART</button>
        
        <p className="productdisplay-right-category">
           <span>Category:</span> Women, T-Shirts, Crop tops
        </p>

        <p className="productdisplay-right-category">
           <span>Tags:</span> Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
