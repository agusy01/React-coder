import { Button, CardActions, Divider, Typography } from '@mui/material';
import * as React from 'react';
import './CartContainer.css';
import CancelIcon from '@mui/icons-material/Cancel';
import { red } from '@mui/material/colors';


const CartContainer = ({ title, price, quantity, img }) => {
  
  return (
    <div className='Cart'>
      <div className='Cart-Container'>
      <img src={img} alt='Remera' />
      <div className='Text-Container'>
      <Typography variant="h3" color="text.secondary" component="div">
        {title}
      </Typography>

      <Divider />
      <Typography variant="h6" color="text.secondary" component="div">
        $ {price}
      </Typography>
      <Typography variant="h6" color="text.secondary" component="div">
        Quantity: {quantity}
      </Typography>
      <CardActions className='Icon-Container'>
        <Button>
          <CancelIcon color='warning' className='Delete-Icon'/>
        </Button>
      </CardActions>


      </div>
      </div>
    </div>
  );
}

export default CartContainer