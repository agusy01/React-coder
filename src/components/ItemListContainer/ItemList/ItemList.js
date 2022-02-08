import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './ItemList.css';
import Spinner from '../../Spinner/Spinner'


const ItemList = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true)

    setTimeout(()=>{
    setLoading(false)
    }, 2000)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((json) => setProduct(json));
    }, []);

    return (
        <div className='Card'>
            {product.map((product) =>{
                return (<div key={product.id} className='Products'>
                    {loading ? <Spinner/> : <Item data={product}/>}
                    </div>
                )
            })}
        </div>
    );
}


export default ItemList;