import React, {useContext, useState} from 'react';
import { Typography, Button} from '@mui/material/';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { CartContext } from '../../../Context/CartContext';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


const ItemDetail = ({ data }) => {
    const cartContext = useContext(CartContext);
    const { addToCart } =cartContext
    
    const [stock, setStock] = useState(5);
    const [counter, setCounter] = useState(1);
    const [visible, setVisible] = useState(true);

    const view = () => {
        if (stock <= 5) {
            setVisible(false)
        }
    }
    
    const onAdd = () => {
        Swal.fire(
            'Good job!',
            `You have added ${counter} of ${data.title} to the cart`,
            'success'
        );

        view();
        addToCart(data, counter);
    };

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
                {visible ? <ItemCount onAdd={onAdd} counter={counter} setCounter={setCounter} stock={stock}/> : <Link to="/cart"><Button >Finalizar compra</Button></Link>}
            </div>
        </div>
    );
}

export default ItemDetail;

