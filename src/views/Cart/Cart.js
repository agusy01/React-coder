import { Typography } from '@mui/material';
import React from 'react';
import CartContainer from '../../components/CartContainer/CartContainer';
import './Cart.css';

const Cart = () => {
  return (
    <div className='Background'>
    <div className='Container'>
          <div className='Items'>
            <Typography variant="h6" color="text.secondary" component="p">
              ITEMS
            </Typography>
          </div>
          <div className='Variants'>
        <Typography variant="h6" color="text.secondary" component="p" className='Price'>
          PRICE
        </Typography>
        <Typography variant="h6" color="text.secondary" component="p" className='Price'>
          AMOUNT
        </Typography>
        <Typography variant="h6" color="text.secondary" component="p" className='Price Icon'>
          SUBTOTAL
          </Typography>
          </div>
      </div>
      <CartContainer />
      </div>
  )
}


export default Cart;


