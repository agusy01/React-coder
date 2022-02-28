import React, { useState, useEffect } from 'react';
import Item from '../../components/ItemListContainer/Item/Item';
import Spinner from '../../components/Spinner/Spinner';
import {db} from '../../Firebase/FirebaseConfig';
import { collection, query, where, getDocs } from "firebase/firestore";



const Jewelry = () => {
    const [product, setProduct] = useState([]);
    const [loading , setLoading] =useState(true)
    
    setTimeout(()=>{
        setLoading(false)
        }, 1000)

    useEffect(() => {
        
            const getProducts = async () =>{

                const productRef = collection(db, 'store');
                const q = query(productRef, where('category', '==', 'jewelery'));
                const docs = [];
                const querySnapshot = await getDocs(q);
                
                querySnapshot.forEach((doc) => {
                    
                    docs.push({...doc.data(), id: doc.id});
                });
                
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
            {product.map((product) => {
                return (<div key={product.id} className='Products'>
                    <Item product={product}/>
                </div>
                )
            })}
            </div>)}
        </div>
    );
};

export default Jewelry;

