import * as React from 'react';
import {Badge, styled, IconButton} from '@mui/material/';
import ShoppingCart from '@mui/icons-material/ShoppingCart';




const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));


export default function CustomizedBadges() {
  return (
    <IconButton aria-label="cart" sx={{ padding: 0}}>
      <StyledBadge badgeContent={1} color="secondary">
        <ShoppingCart sx={{ fontSize: 24 }} />
      </StyledBadge>
    </IconButton>
  );
}
