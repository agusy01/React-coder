import React, {useState} from 'react';
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import './ItemCount.css';


const ItemCount = ({stock, initial}) => {
    const [counter, setCounter] = useState(initial);

    const counterUp= () => {
        setCounter(counter + 1)
    }

    const counterDown= () => {
        setCounter(counter - 1)
    }

    return (<div className='Count'>

        <IconButton onClick={counterDown} style={{ visibility: counter <= 1 && "hidden" }} aria-label="cart" sx={{ padding: 0}}>
            <RemoveIcon sx={{ fontSize: 24 }} />
        </IconButton>
        <div>{counter}</div>
        <IconButton onClick={counterUp} style={{ visibility: counter >= stock && "hidden" }} aria-label="cart" sx={{ padding: 0}}>
            <AddIcon sx={{ fontSize: 24 }} />
        </IconButton>
        </div>
    );
};

export default ItemCount;
