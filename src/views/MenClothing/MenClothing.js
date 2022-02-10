import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Item from '../../components/ItemListContainer/Item/Item';
import Spinner from '../../components/Spinner/Spinner';



const MenClothing = () => {
    const [men, setMen] = useState([]);
    const [loading , setLoading] =useState(true)
    
    setTimeout(()=>{
        setLoading(false)
        }, 2000)

    useEffect(() => {
        axios(`https://fakestoreapi.com/products/category/men's%20clothing`)
        .then((res) => setMen(res.data))
    }, []);
    
    return (
        <div>
            {loading ? (
                <Spinner />
            ) : (
            <div className='Card'>
            {men.map((men) => {
                return (<div key={men.id} className='Products'>
                    <Item data={men}/>
                </div>
                )
            })}
            </div>)}
        </div>
    );
};

export default MenClothing;