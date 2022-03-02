import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import Cart from './Cart';
import { Typography } from '@mui/material';
import './CartContainer.css';


const CartContainer = () => {
  const cartContext = useContext(CartContext);
  const { cart} = cartContext;
  
  if(cart.length===0){
    return (
      <div className='Empty'>
        <Typography variant="h4" color="text.secondary" component="p" >
          Your bag is empty
        </Typography>
      </div>)
  } else{
  return  (cart.map((product) => {
    return (
      
        <div key={product.id}>
            <Cart quantity={product.cant} title={product.title} price={product.price} img={product.image} category={product.category}/>
        </div>
      
    )
    })
  )
}
}

export default CartContainer;