import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropdownicon from "../Components/Assets/Images/dropdown1.png";
import Item from "../Components/Item/Item";


const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shopcategory">
      <div className="shopcategory-banner-container">
        <img src={props.banner} alt="" className="shopcategory-banner"/>
      </div>
      
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by 
          {/* <img src={dropdownicon} alt="" /> */}
        </div>
      </div>

      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if(props.category === item.category) {
            return <Item key={i} id = {item.id} name ={item.name} image= {item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else{
           return null;
          }
        })}
      </div>

      <button className="shopcategory-loadmore">
        Explore More
      </button>
    </div>
  );
};

export default ShopCategory;
