import React, {useState} from 'react';
import { IconButton, Button} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Swal from 'sweetalert2';
import './itemCount.css';



const ItemCount = ({stock, initial, name}) => {
    const [counter, setCounter] = useState(initial);

    const counterUp= () => {
        setCounter(counter + 1);
    }

    const counterDown= () => {
        setCounter(counter - 1);
    }

    const onAdd = () =>{
        Swal.fire(
            'Buen trabajo!',
            `Has añadido ${counter} articulos de ${name} al carrito!`,
            'success'
        );
    }

    return (
        <div className='container-count'>
            <div className='Count'>
            <IconButton onClick={counterDown} style={{ visibility: counter <= 1 && "hidden" }} aria-label="cart" sx={{ padding: 0}}>
                <RemoveIcon sx={{ fontSize: 24 }} />
            </IconButton>
            <div>{counter}</div>
            <IconButton onClick={counterUp} style={{ visibility: counter >= stock && "hidden" }} aria-label="cart" sx={{ padding: 0}}>
                <AddIcon sx={{ fontSize: 24 }} />
            </IconButton>
            </div>
            <Button onClick={onAdd} >
                <p>Añadir al carrito</p> 
                <AddShoppingCartIcon />
            </Button>
        </div>
    );
};

export default ItemCount;
