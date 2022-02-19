import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ItemDetail from './ItemDetail/ItemDetail'
import Spinner from '../Spinner/Spinner';
import { useParams } from 'react-router-dom';



const ItemDetailContainer = () => {
    const [detail,setDetail] =useState([])
    const [loading, setLoading] = useState(true);
    
    let id = useParams();
    
    let productId = id.id;
    
    useEffect(() => {
        axios(`https://fakestoreapi.com/products/${productId}`)
        .then((res) => setDetail(res.data));
        setTimeout(()=>{
            setLoading(false)
        }, 1000);
    }, [productId]); 
    
    return (
        <div>
            {loading ? (
            <Spinner />
            ) : (
            <div>
                <div key={detail.id}>
                    <ItemDetail data={detail} />
                </div>
            </div>
        )}
        </div>
    );
};

export default ItemDetailContainer;
