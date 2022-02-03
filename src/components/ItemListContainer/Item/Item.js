import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCount/ItemCount';
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
      <CardContent>
        <Typography gutterBottom variant="" component="div">
          {data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          $ {data.price}
        </Typography>
        <CardActions className="Acciones">
          <ItemCount stock={5} initial={1} name={data.title} ></ItemCount>
        </CardActions>
      </CardContent>
    </Card>
    </div>
  );
}

export default Item;


