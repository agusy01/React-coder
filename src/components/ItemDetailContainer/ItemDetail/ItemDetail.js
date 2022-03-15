import React, {useContext, useState} from 'react';
import { Typography, Button} from '@mui/material/';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { CartContext } from '../../../Context/CartContext';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


const ItemDetail = ({ detail }) => {
    const cartContext = useContext(CartContext);
    const { addToCart, enable } =cartContext;
    
    const stock = detail.stock;
    const [counter, setCounter] = useState(1);
    const [visible, setVisible] = useState(true);

    const view = () => {
        if (stock <= detail.stock) {
            setVisible(false)
        }
    }
    
    const onAdd = () => {
        Swal.fire(
            'Good job!',
            `You have added ${counter} of ${detail.title} to the cart`,
            'success'
        );
        view();
        addToCart(detail, counter);
    };

    return (
        <div className='DetailBox'>
            <div>
                <img src={detail.image} alt='Imagen' className='ImagenDetail' />
            </div>
            <div className='DetailText'>
            <Typography gutterBottom variant="h4" component="div">
                    {detail.title}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                    {detail.description}
                </Typography>
                <Typography variant="h4" color="text.secondary">
                    $ {detail.price}
                </Typography>
                {visible ? <ItemCount onAdd={onAdd} counter={counter} setCounter={setCounter} stock={detail.stock}/> : <div><Link to="/" className='fix-Button'><Button onClick={enable}>Continue buying</Button></Link><Link to="/cart" className='fix-Button'><Button onClick={enable} >Go to checkout</Button></Link></div>}
            </div>
        </div>
    );
}

export default ItemDetail;

