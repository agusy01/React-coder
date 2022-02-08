import * as React from 'react';
import { Typography  } from '@mui/material/';
import ItemCount from '../ItemCount/ItemCount';


import './ItemDetail.css';


const ItemDetail = ({ data }) => {
    return (
        <div className='DetailBox'>
            <div>
                <img src={data.image} alt='Imagen' className='ImagenDetail' />
            </div>
            <div className='DetailText'>
            <Typography gutterBottom variant="h4" component="div">
                    {data.title}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                    {data.description}
                </Typography>
                <Typography variant="h4" color="text.secondary">
                    $ {data.price}
                </Typography>
                <ItemCount stock={5} initial={1} name={data.title} ></ItemCount>
            </div>
        </div>
);
}

export default ItemDetail;
