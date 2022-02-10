import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Item from '../../components/ItemListContainer/Item/Item';
import Spinner from '../../components/Spinner/Spinner';



const Jewelry = () => {
    const [jewelry, setJewelry] = useState([]);
    const [loading , setLoading] =useState(true)
    
    setTimeout(()=>{
        setLoading(false)
        }, 2000)

    useEffect(() => {
        axios(`https://fakestoreapi.com/products/category/jewelery`)
        .then((res) => setJewelry(res.data))
    }, []);
    
    return (
        <div>
            {loading ? (
                <Spinner />
            ) : (
            <div className='Card'>
            {jewelry.map((jewelry) => {
                return (<div key={jewelry.id} className='Products'>
                    <Item data={jewelry}/>
                </div>
                )
            })}
            </div>)}
        </div>
    );
};

export default Jewelry;

