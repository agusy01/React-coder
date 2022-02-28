import React, {useEffect, useState} from 'react';
import ItemDetail from './ItemDetail/ItemDetail'
import Spinner from '../Spinner/Spinner';
import { useParams } from 'react-router-dom';

import {db} from '../../Firebase/FirebaseConfig';
import { collection, query, where, getDocs, documentId } from "firebase/firestore";



const ItemDetailContainer = () => {
    const [detail,setDetail] =useState([])
    const [loading, setLoading] = useState(true);
    
    let {id} = useParams();
    
    setTimeout(()=>{
        setLoading(false)
    }, 1000);

    
    useEffect(() => {
        const getProducts = async () =>{
            const productRef = collection(db, 'store');
            const q = query(productRef, where(documentId(), "==", id)) ;
            const docs = [];
            const querySnapshot = await getDocs(q);
            
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id});
            });
            setDetail(docs);
        };
        getProducts();
    }, [id]); 
    
    
    return (
        <div>
            {loading ? (
            <Spinner />
            ) : (
                detail.map((data) => {
                    return(
                    <div key={data.id}>
                        <ItemDetail detail={data} />
                    </div>
                    )
                })
        )}
        </div>
    );
};


export default ItemDetailContainer;
