import React, { useContext, useState} from 'react';
import { CartContext } from '../../Context/CartContext';
import Cart from './Cart'


const CartContainer = () => {
  const cartContext = useContext(CartContext);
  const { cart } = cartContext;

  return  (cart.map((product) => {
    return (
      <div key={product.id}>
          <Cart quantity={product.cant} title={product.title} price={product.price} img={product.image} category={product.category}/>
      </div>
    )
    })
  )
}


export default CartContainer;