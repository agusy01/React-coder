import React, {createContext, useEffect, useState} from 'react'



export const CartContext = createContext();

const CartProvider = ({ children}) => {
    const [cart, setCart] = useState([]);

    useEffect(() =>{
        console.log(cart)
    }, [cart])

    const addToCart = (itemToAdd, cant) => {
        if(cart.some(el => el.id === itemToAdd.id)){
            
            let index = cart.findIndex(e => e.id === itemToAdd.id);
            let product = cart[index];
            product.cant = product.cant + cant;
            
            const newCart = [...cart];
            newCart.splice( index, 1, product);

            setCart([ ...newCart ]);

        } else {
            let product = {...itemToAdd, cant};
            setCart([...cart, product]);
        }
    };
    
    const deleteItem = ( id ) => {
        const newCart = [...cart];
        
        let index = newCart.findIndex(e => e.id === id);
        newCart.splice( index, 1);

        setCart([...newCart]);
    
    } 

    const deleteCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, deleteCart, deleteItem}}>{children}</CartContext.Provider>
        )
        
};


export default CartProvider;