import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './ItemList.css';
import Spinner from '../../Spinner/Spinner'

import {db} from '../../../Firebase/FirebaseConfig';
import { collection, query, getDocs } from "firebase/firestore";

const ItemList = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true)

    setTimeout(()=>{
        setLoading(false)
        }, 1000)

        useEffect(() => {
            const getProducts = async () =>{
                const q = query(collection(db, 'store'));
                const docs = [];
                const querySnapshot = await getDocs(q);
                
                querySnapshot.forEach((doc) => {
                    
                    docs.push({...doc.data(), id: doc.id});
                });
                console.log(docs)
                setProduct(docs);
            };
            getProducts()
        }, []);

        return (
            <div>
                {loading ? (
                    <Spinner />
                ) : (
                <div className='Card'>
                {product.map((product) =>{
                    return (<div key={product.id} className='Products'>
                            <Item product={product} />
                        </div>
                    )
                })}
                </div>)}
            </div>
        );
}


export default ItemList