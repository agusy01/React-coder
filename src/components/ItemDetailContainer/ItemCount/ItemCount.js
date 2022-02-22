import React, { useState } from 'react';
import { IconButton, Button} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './itemCount.css';



const ItemCount = ({ onAdd,  stock }) => {
    const [counter, setCounter] = useState(1);

    const counterUp= () => {
        setCounter(counter + 1);
    }

    const counterDown= () => {
        setCounter(counter - 1);
    }
    
    
    return (
        <div className='container-count'>
            <div className='Count'>
            <IconButton  onClick={() => setCounter(counter - 1)} style={{ visibility: counter <= 1 && "hidden" }} aria-label="cart" sx={{ padding: 0}}>
                <RemoveIcon sx={{ fontSize: 24 }} />
            </IconButton>
            <div>{counter}</div>
            <IconButton onClick={() => setCounter(counter + 1)} style={{ visibility: counter >= stock && "hidden" }} aria-label="cart" sx={{ padding: 0}}>
                <AddIcon sx={{ fontSize: 24 }} />
            </IconButton>
            </div>
            <Button onClick={onAdd(counter)}>
                <p >Add To Cart</p> 
                <AddShoppingCartIcon sx={{ ml: 1.2 }}/>
            </Button>
        </div>
    );
};

export default ItemCount;


