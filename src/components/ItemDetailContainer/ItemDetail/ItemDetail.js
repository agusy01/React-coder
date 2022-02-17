import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button  } from '@mui/material/';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import Swal from 'sweetalert2';
import { CartContext } from '../../../Context/CartContext';


const ItemDetail = ({ data }) => {
    const { items, addToCart } = useContext(CartContext);

    const [counter, setCounter] = useState(1);
    const [stock, setStock] = useState(5);
    const [visible, setVisible] = useState(true);
    const [product, setProduct] = useState(0);
    const [itemToAdd, setItem] = useState([])
    
    const view = () => {
        if (product => 1) {
            setVisible(false)
        }
    }
    
    const counterUp= () => {
        setCounter(counter + 1);
    }

    const counterDown= () => {
        setCounter(counter - 1);
    }

    const onAdd = () => {
        Swal.fire(
            'Good job!',
            `You have added ${counter} items to the cart!`,
            'success'
        );
        
        setStock(stock - counter)
        setCounter(stock - counter)
        setProduct(counter)
        view()

        
    }

    const addCart = () => {
        itemToAdd.push({id: data.id, title: data.title, qty: product })
        setItem(...itemToAdd)

        addToCart(itemToAdd)
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
                {visible ? <ItemCount add={onAdd} counterUp={counterUp} counterDown={counterDown} counter={counter} stock={stock} /> : <Link to="/cart"><Button onClick={addCart} item={[itemToAdd]}>Finalizar compra</Button></Link>}
            </div>
        </div>
    );
}

export default ItemDetail;

