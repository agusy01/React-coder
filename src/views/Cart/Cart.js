import { Button, Typography} from '@mui/material';
import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import CartContainer from '../../components/CartContainer/CartContainer';
import { CartContext } from '../../Context/CartContext';
import './Cart.css';


const Cart = () => {
  const cartContext = useContext(CartContext);
  const {total, itemsPush, enableCheckout } =cartContext;
  return (
    <div className='Background'>
      <div className='CartItems'>
        <div>
              <h3 className='YourBag'>YOUR BAG</h3>
        </div>
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
        <div>
          <CartContainer />
        </div>
      </div>
      <div className='CheckOut'>
        <Typography variant="h6" color="text.secondary" component="p" className='CheckOutText'>
              <strong>CHECKOUT</strong>
        </Typography>
        <Typography variant="h6" color="text.secondary" component="div" >
              Total Products: {itemsPush}
        </Typography>
        <Typography variant="h6" color="text.secondary" component="p">
              <strong>Total Order: $ {total.toFixed(2)}</strong>
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" component="p" >
          Please carefully check the details of your order before proceeding to the next step.
        </Typography>
        {enableCheckout ? <Link to='/FinishPurchase' ><Button>CHECKOUT</Button></Link> : <Button disabled>CHECKOUT</Button>}
      </div>
    </div>
  )
}


export default Cart;
