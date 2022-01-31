import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './Card.css';
import ItemCount from '../ItemCount/ItemCount';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard(props) {

  

  return (
    <Card sx={{ minWidth: 275, maxWidth: 400, margin: 2 }}>
      <CardContent>
        <img src={props.img} alt='Avatar'></img>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.category}
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <ItemCount stock={5} initial={1}></ItemCount>
      </CardActions>
    </Card>
  );
}
