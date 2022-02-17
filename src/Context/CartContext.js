import React, {createContext, useState} from 'react'


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    

    const addToCart = ( itemToAdd ) => {
        setCart(itemToAdd)
    };
    console.log(cart)


    /* const clear = () => {
        setCart([]);
      }; */

    return <CartContext.Provider value={{ cart, addToCart }}>{children}</CartContext.Provider>
};