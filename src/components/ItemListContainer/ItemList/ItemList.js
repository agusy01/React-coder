import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './ItemList.css';
import Spinner from '../../Spinner/Spinner'
import axios from 'axios';



const ItemList = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true)

    setTimeout(()=>{
    setLoading(false)
    }, 1000)

    useEffect(() => {
        axios('https://fakestoreapi.com/products')
        .then((res) => setProduct(res.data))
    }, []);

    return (
        <div>
            {loading ? (
                <Spinner />
            ) : (
            <div className='Card'>
            {product.map((product) =>{
                return (<div key={product.id} className='Products'>
                        <Item data={product} />
                    </div>
                )
            })}
            </div>)}
        </div>
    );
}


export default ItemList;

