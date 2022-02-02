/* import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './Item.css';
import ItemCount from '../ItemCount/ItemCount'; */

/* const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const Item = ({data}) => {

  return (
    <Card sx={{ minWidth: 275, maxWidth: 400, margin: 2 }}>
      <CardContent>
        <img src={data.image} alt='Avatar'></img>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {data.price}
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          {data.description}
        </Typography>
      </CardContent>
      <CardActions>
        <ItemCount stock={5} initial={1}></ItemCount>
      </CardActions>
    </Card>
  );
} */

/* export default Item; */

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
        <CardActions>
          {<ItemCount stock={5} initial={1}></ItemCount>}
        </CardActions>
      </CardContent>
    </Card>
    </div>
  );
}

export default Item;


