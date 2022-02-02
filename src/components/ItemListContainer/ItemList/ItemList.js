import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './ItemList.css';

const ItemList = () => {
    const [product, setProduct] = useState([]);
    
    console.log(product)
    
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((json) => setProduct(json));
    }, []);

    return (
        <div className='Card'>
            {product.map((product) =>{
                return (
                    <div key={product.id} className='Products'>
                        <Item data={product}/>
                    </div>
                )
            })}
        </div>
    );
}


export default ItemList;