import React, {createContext, useEffect, useState} from 'react'



export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [enableCheckout, setEnableCheckout] = useState(false);
    
    useEffect(() =>{
        console.log(cart)
    }, [cart])
    const enable = useEffect(() =>{
            if(cart.length === 0 ){
                setEnableCheckout(false)
            } else {
                setEnableCheckout(true)
            }
    }, [cart]);

    let total = 0;
    cart.map(x => total=x.cant*x.price+total);

    let itemsPush = 0;
    cart.map(x => itemsPush=x.cant+itemsPush);

    
    const addToCart = (itemToAdd, cant) => {
        if(cart.some(e => e.id === itemToAdd.id)){
            
            let index = cart.findIndex(e => e.id === itemToAdd.id);
            let product = cart[index];
            console.log(product)
            product.cant = product.cant + cant;
            
            const newCart = [...cart];
            newCart.splice( index, 1, product);
    
            setCart([ ...newCart ]);
            
    
        } else {
            let product = {...itemToAdd, cant};
            setCart([...cart, product]);
        }
    };

    const deleteItem = (productName) => {
            const updatedProducts = cart.filter(product => productName !== product.title);
            setCart(updatedProducts);
    }
    
    
    

    return (
        <CartContext.Provider value={{ cart, deleteItem, addToCart, total, itemsPush, setCart, enable, enableCheckout }}>{children}</CartContext.Provider>
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