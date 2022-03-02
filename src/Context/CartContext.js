import React, {createContext, useEffect, useState} from 'react'



export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    
    let total = 0;
    cart.map(x => total=x.cant*x.price+total);

    const addToCart = (itemToAdd, cant) => {
        if(cart.some(e => e.id === itemToAdd.id)){
            
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
    
    
    

    return (
        <CartContext.Provider value={{ cart, deleteItem, addToCart, total }}>{children}</CartContext.Provider>
        )
        
};


export default CartProvider;

/* 
const addToCart = (itemToAdd, cant) => {
    if(cart.some(e => e.id === itemToAdd.id)){
        
        let index = cart.findIndex(e => e.id === itemToAdd.id);
        let product = cart[index];
        product.cant = product.cant + cant;
        
        const newCart = [...cart];
        newCart.splice( index, 1, product);

        setCart([ ...newCart ]);
        alert('Este producto ya se encuentra en el carrito')

    } else {
        let product = {...itemToAdd, cant};
        setCart([...cart, product]);
    }
}; */