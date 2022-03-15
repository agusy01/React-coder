import './PurchaseForm.css';
import React, { useState, useContext } from 'react';
import { collection, addDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../Firebase/FirebaseConfig';
import { CartContext } from '../../Context/CartContext';
import PurchaseMessage from './PurchaseMessage/PurchaseMessage';



const initialState= {
    fullName: "",
    email: "",
    address: ""
}

const PurchaseForm = () => {

    const cartContext = useContext(CartContext);
    const { total, setCart, cart } = cartContext;

    const [values, setValues] = useState(initialState);

    const [purchaseId, setPurchaseId] = useState('');

    //capturo la fecha para pasarla despues al docRef y que me de esa info en firebase
    const d = new Date();
    let date = `${d.getDate()}/${1 + d.getMonth()}/${d.getFullYear()}`;

    //Tomo los valores de los campos del form
    const getValues = (e) => {
        const {values, fullName} = e.target;
        setValues({...values, [fullName]: values});
    }

    const submit = async (e) => {
        e.preventDefault();
        const docRef = await addDoc(collection(db, "purchases"), {
            values, items: cart, date: date, total: total
        });
        setPurchaseId(docRef.id);
        setValues(initialState);
        cart.forEach(product => {
            let newstock = product.stock - product.quantity;
            let productRef = doc(db, 'Products', product.id); 
            updateDoc(productRef, {
                stock: newstock
            })
        })
        setCart([]);
    }

    return(
        <div className='Fondo'>
            <form className="form" onSubmit={submit}>
                <div className="inputContainer">
                    <label htmlFor="floatingName">Full Name</label>
                    <input type="text" name="fullName" value={values.fullName} onChange={getValues} className="form-control" id="floatingName" placeholder="Full Name" required/>
                </div>
                <div className="inputContainer">
                    <label htmlFor="floatingLastName">Email</label>
                    <input type="text" name="email" value={values.email} onChange={getValues} className="form-control" id="floatingLastName" placeholder="Email" required/>
                </div>
                <div className="inputContainer">
                    <label htmlFor="floatingAddress">Address</label>
                    <input type="text" name="address" value={values.address} onChange={getValues} className="form-control" id="floatingAddress" placeholder="Address" required/>
                </div>
                <input type="submit" value="Submit" />
            </form>
            {purchaseId && <PurchaseMessage purchaseId={purchaseId} />}
        </div>
    )
}

export default PurchaseForm;