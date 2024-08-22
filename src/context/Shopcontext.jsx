import React, { createContext, useState } from 'react';
import all_product from "../Components/Assets/all_product";

export const Shopcontext = createContext(null);
const getDefaultCart = () => {
  let cart = {}
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;

  }
  return cart;
}
const ShopcontextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addtoCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
  }
  const RemoveFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
  }

  // productId : {count:2 , size:'M'}
  const getTotalCartAmount = () => {
    let totalamount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let iteminfo = all_product.find((product) => product.id === Number(item));
        totalamount += iteminfo.new_price * cartItems[item];
      }
    }
    return totalamount;
  }
  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItems += cartItems[item];
      }
    }
    return totalItems;
  }

  const contextValue = { all_product, cartItems, addtoCart, RemoveFromCart, getTotalCartAmount, getTotalCartItems };

  return (
    <Shopcontext.Provider value={contextValue}>
      {props.children}
    </Shopcontext.Provider>
  )
}
export default ShopcontextProvider;