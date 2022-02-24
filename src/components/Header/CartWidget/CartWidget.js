import React , {useContext} from 'react';
import {Badge, styled, IconButton} from '@mui/material/';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { CartContext } from '../../../Context/CartContext';




const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));


const CustomizedBadges = () => {

  const cartContext = useContext(CartContext);
  const { quant } = cartContext;

  return (
    <IconButton aria-label="cart" sx={{ padding: 0}}>
      <StyledBadge badgeContent={quant} color="secondary">
        <ShoppingCart sx={{ fontSize: 24 }} />
      </StyledBadge>
    </IconButton>
  );
}

export default CustomizedBadges;