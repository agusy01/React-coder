import * as React from 'react';
import {Card, Button, CardActions, CardContent, CardMedia, Typography} from '@mui/material/';
import './Item.css'



const Item = ({ data }) => {

  return (
    <div className='UserComponent'>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        image={data.image}
        alt="green iguana"
        className='Image'
      />
      <CardContent className='CardContent'>
        <Typography gutterBottom variant="" component="div">
          {data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          $ {data.price}
        </Typography>
        <CardActions className="Acciones" sx={{justifyContent: 'center'}}>
          <Typography variant='' >
            <Button variant="contained">More details</Button>
          </Typography>
        </CardActions>
      </CardContent>
    </Card>
    </div>
  );
}

export default Item;


