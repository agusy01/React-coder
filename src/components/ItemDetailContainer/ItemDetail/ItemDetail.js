import React, {useState} from 'react';
import { Typography  } from '@mui/material/';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import Swal from 'sweetalert2';


const ItemDetail = ({ data }) => {
    const [counter, setCounter] = useState(1)
    const [stock, setStock] = useState(5)


    const onAdd = () => {
        Swal.fire(
            'Good job!',
            `You have added ${counter} items to the cart!`,
            'success'
        );

        setStock(stock - counter)
        setCounter(1)
    }

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
                <ItemCount initial={1} name={data.title}  onAdd={onAdd} stock={stock} counter={counter}></ItemCount>
            </div>
        </div>
    );
}

export default ItemDetail;
