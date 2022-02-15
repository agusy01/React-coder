import React, {useState} from 'react';
import { IconButton, Button} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Swal from 'sweetalert2';
import './itemCount.css';



const ItemCount = ({ initial, name, onAdd, stock, counter}) => {
    //const [counter, setCounter] = useState(initial);
    // const [stock, setStock] = useState(5) ;

    const counterUp= () => {
        counter = ({counter} + 1);
    }

    const counterDown= () => {
        counter = ({counter} - 1);
    }

    /* const onAdd = () =>{
        Swal.fire(
            'Good job!',
            `You have added ${counter} items of ${name} to the cart!`,
            'success'
        );

        setStock(stock - counter)
        setCounter(stock - counter)
    } */

    return (
        <div className='container-count'>
            <div className='Count'>
            <IconButton onClick={counterDown} style={{ visibility: {counter} = 1 && "hidden" }} aria-label="cart" sx={{ padding: 0}}>
                <RemoveIcon sx={{ fontSize: 24 }} />
            </IconButton>
            <div>{counter}</div>
            <IconButton onClick={counterUp} style={{ visibility: {counter} >= stock && "hidden" }} aria-label="cart" sx={{ padding: 0}}>
                <AddIcon sx={{ fontSize: 24 }} />
            </IconButton>
            </div>
            <Button onClick={onAdd} >
                <p >Add To Cart</p> 
                <AddShoppingCartIcon sx={{ ml: 1.2 }}/>
            </Button>
        </div>
    );
};

export default ItemCount;
