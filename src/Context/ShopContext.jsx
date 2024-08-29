
import React, { createContext } from "react";
import all_product from "../Components/Assets/AllProduct";
import { useState } from "react";

export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {};
    for(let index=0; index < all_product.length+1; index++) {
        cart[index] = 0
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())

    // add to cart function
    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId] : prev[itemId]+1}))
        console.log(cartItems)
    }

    // remove from cart function
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId] : prev[itemId]-1}))
    }

    // get total amount from cart
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) 
        {
            if(cartItems[item]>0)
            {
                let itemInfo = all_product.find((product)=>product.id ===Number(item))
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    }

    // get number to appear on cart
    const getTotalCartItems = () => {
        let totalItem = 0 ;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                totalItem += cartItems[item]
            }
        }
        return totalItem;
    }



    const contextValue = {getTotalCartItems,getTotalCartAmount,all_product, cartItems, addToCart, removeFromCart, };
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default  ShopContextProvider;