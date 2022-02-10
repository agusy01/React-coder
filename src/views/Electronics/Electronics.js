import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Item from '../../components/ItemListContainer/Item/Item';
import Spinner from '../../components/Spinner/Spinner';



const Electronics = () => {
    const [electro, setElectro] = useState([]);
    const [loading , setLoading] =useState(true)
    
    setTimeout(()=>{
        setLoading(false)
        }, 2000)

    useEffect(() => {
        axios(`https://fakestoreapi.com/products/category/electronics`)
        .then((res) => setElectro(res.data))
    }, []);
    
    return (
        <div>
            {loading ? (
                <Spinner />
            ) : (
            <div className='Card'>
            {electro.map((electro) => {
                return (<div key={electro.id} className='Products'>
                    <Item data={electro}/>
                </div>
                )
            })}
            </div>)}
        </div>
    );
};

export default Electronics;

