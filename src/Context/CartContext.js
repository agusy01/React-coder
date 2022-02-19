import React, {createContext, useState} from 'react'


export const CartContext = createContext();

export const CartProvider = ({ children}) => {
    const [cart, setCart] = useState([]);
    const [cartC, setCartC] = useState([])
    

    const addToCart = () => {
        cartC.push()
        setCart(cart)
    };
    console.log(cart)
    console.log(cartC)


    /* const clear = () => {
        setCart([]);
      }; */

    return <CartContext.Provider value={{ cart, addToCart }}>{children}</CartContext.Provider>
};