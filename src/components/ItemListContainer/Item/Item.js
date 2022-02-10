import * as React from 'react';
import {Card, Button, CardActions, CardContent, Typography} from '@mui/material/';
import './Item.css';
import { Link } from 'react-router-dom';




const Item = ({ data }) => {

  return (
    <div className='UserComponent'>
    <Card sx={{ maxWidth: 345 }}>
      <img src={data.image} alt={data.title} className='Image' />
      <CardContent className='CardContent'>
        <Typography gutterBottom variant="" component="div">
          {data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>$ {data.price}</strong>
        </Typography>
        <CardActions className="Acciones" sx={{justifyContent: 'center'}}>
          <Typography variant='' >
            <Link to={`/${data.category}/${data.id}`} sx={{textDecoration:'none'}}>
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


