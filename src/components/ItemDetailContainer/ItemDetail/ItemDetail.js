import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button  } from '@mui/material/';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import Swal from 'sweetalert2';
import { CartContext } from '../../../Context/CartContext';


const ItemDetail = ({ data }) => {
    const cartContext = useContext(CartContext);
    const {cart, addToCart} =cartContext
    
    
    const [stock, setStock] = useState(5);
    const [visible, setVisible] = useState(true);
    
    const view = () => {
        if (stock <= 5) {
            setVisible(false)
        }
    }
    
    const onAdd = (counter) => {
        setStock(stock - counter)
        view()
        addToCart(data, counter)
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
                {visible ? <ItemCount onAdd={onAdd}  stock={stock} /> : <Link to="/cart"><Button onClick={addToCart} >Finalizar compra</Button></Link>}
            </div>
        </div>
    );
}

export default ItemDetail;

