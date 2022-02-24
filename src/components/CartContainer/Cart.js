import { IconButton, Typography } from '@mui/material';
import React, { useContext } from 'react';
import './Cart.css';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { CartContext } from '../../Context/CartContext';



const CartContainer = ({title, price, quantity, img, category}) => {
  const cartContext = useContext(CartContext);
  const { deleteItem, deleteCart } = cartContext;
  
  return (
    <div className='Cart'>
      <div className='Item-Container'>
      <img src={img} alt={title} />
      <div className='Text-Container'>
        <div className='Cart-Title'>
            <Typography variant="h6" color="text.secondary" component="p">
                <strong>{title}</strong>
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
                Category: {category}
            </Typography>

            </div>
        <div className='Cart-Detail'>
            <Typography variant="subtitle1" color="text.secondary" component="p" className='Price'>
            $ {price}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="p" className='Price '>
            {quantity}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="p" className='Price Icon'>
            $ {price*quantity}
            
            <IconButton onClick={deleteItem}>
                <DeleteForeverIcon color='warning' className='Delete-Icon' fontSize="medium"/>
            </IconButton>
            <IconButton aria-label="" onClick={deleteCart}>
            <DeleteForeverIcon color='warning' className='Delete-Icon' fontSize="medium"/>
            </IconButton>
            </Typography>
        </div>
    </div>
    </div>
    </div>
  );
}

export default CartContainer