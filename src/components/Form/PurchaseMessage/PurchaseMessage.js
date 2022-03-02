import * as React from 'react';
import Alert from '@mui/material/Alert';
import './PurchaseMessage.css';

const PurchaseMessage = ({ purchaseId }) => {
return (
    <Alert severity="success" className='AlertaCompra'>Thanks for your order. It will be on its way in 1-2 business days. Don't lose your purchase ID: {purchaseId}</Alert>
);
}

export default PurchaseMessage;