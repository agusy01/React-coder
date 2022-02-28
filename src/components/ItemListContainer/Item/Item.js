import * as React from 'react';
import {Card, Button, CardActions, CardContent, Typography} from '@mui/material/';
import './Item.css';
import { Link } from 'react-router-dom';




const Item = ({ product }) => {

  return (
    <div className='UserComponent'>
    <Card sx={{ maxWidth: 345 }}>
      <img src={product.image} alt={product.title} className='Image' />
      <CardContent className='CardContent'>
        <Typography gutterBottom variant="" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>$ {product.price}</strong>
        </Typography>
        <CardActions className="Acciones" sx={{justifyContent: 'center'}}>
          <Typography variant='' >
            <Link to={`/${product.category}/${product.id}`} sx={{textDecoration:'none'}}>
              <Button variant="contained">
                  More details
              </Button>
            </Link>
          </Typography>
        </CardActions>
      </CardContent>
    </Card>
    </div>
  );
}

export default Item;


