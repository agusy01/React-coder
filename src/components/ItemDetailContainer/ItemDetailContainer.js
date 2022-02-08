import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import Spinner from '../Spinner/Spinner';


const ItemDetailContainer = () => {
    const [detail,setDetail] =useState([])
    const [loading, setLoading] = useState(true);
    
    setTimeout(()=>{
        setLoading(false)
    }, 2000)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/1')
        .then((response) => response.json())
        .then((json) => setDetail(json));
    }, []);
    
    return (
        <div>
            {loading ? <Spinner /> : <ItemDetail data={detail}/>}
        </div>
    );
}


export default ItemDetailContainer;