import React, {createContext, useState} from 'react'


export const CartContext = createContext();

const CartProvider = ({ children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (data, counter) => {

        let product = {...data, counter};
        setCart([...cart, product ]);

        console.log(product);
        console.log(cart);
    };
    

    /* const clear = () => {
        setCart([]);
      }; */

    return (
        <CartContext.Provider value={{ cart, setCart, addToCart }}>{children}</CartContext.Provider>
        )
};

export default CartProvider;