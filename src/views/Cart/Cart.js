import React from 'react';
import CartContainer from '../../components/CartContainer/CartContainer';

const Cart = () => {
  return (
    <div>
      <CartContainer img='https://i.pinimg.com/474x/65/f4/c3/65f4c3bb5588b943838a05ec58afb83b.jpg' title='Remera' price='100' quantity='1'/>
      <CartContainer img='https://ddz5v9n0a16cg.cloudfront.net/webapp_webp/images/productos/c/0000024000/24750.webp' title='Pantalon' price='200' quantity='1'/>
      <CartContainer img='https://bamadventureuy.com/ventas/71-home_default/musculosas-clasicas-unisex.jpg' title='Musculosa' price='50' quantity='1'/>
    </div>
  )
}

export default Cart;