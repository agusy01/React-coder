import './PurchaseForm.css';
import React, { useState, useContext } from 'react';
import { collection, addDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../Firebase/FirebaseConfig';
import { CartContext } from '../../Context/CartContext';
import PurchaseMessage from './PurchaseMessage/PurchaseMessage';



const initialState= {
    name: "",
    lastName: "",
    address: ""
}

const PurchaseForm = () => {

    const cartContext = useContext(CartContext);
    const { total, setCart, cart } = cartContext;

    const [values, setValues] = useState(initialState);

    const [purchaseId, setPurchaseId] = useState('');

    //capturo la fecha para pasarla despues al docRef y que me de esa info en firebase
    const d = new Date();
    let date = `${d.getDate()}/${1 + d.getMonth()}/${d.getFullYear()}`

    //Tomo los valores de los campos del form
    const getValues = (e) => {
        const {value, name} = e.target;
        setValues({...values, [name]: value});
    }

    const submit = async (e) => {
        e.preventDefault();
        const docRef = await addDoc(collection(db, "purchases"), {
            buyer: values, items: cart, date: date, total: total
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
                <div className="form-floating mb-3 inputContainer">
                    <label htmlFor="floatingName">Name</label>
                    <input type="text" name="name" value={values.name} onChange={getValues} className="form-control" id="floatingName" placeholder="Name" />
                </div>
                <div className="form-floating mb-3 inputContainer">
                    <label htmlFor="floatingLastName">Last name</label>
                    <input type="text" name="lastName" value={values.lastName} onChange={getValues} className="form-control" id="floatingLastName" placeholder="Last name" />
                </div>
                <div className="form-floating mb-3 inputContainer">
                    <label htmlFor="floatingAddress">Address</label>
                    <input type="text" name="address" value={values.address} onChange={getValues} className="form-control" id="floatingAddress" placeholder="Address" />
                </div>
                <input type="submit" value="Submit" />
            </form>
            {purchaseId && <PurchaseMessage purchaseId={purchaseId} />}
        </div>
    )
}

export default PurchaseForm;