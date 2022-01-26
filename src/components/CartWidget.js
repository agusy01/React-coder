import './CartWidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';



const CartWidget = () => {
    return <button id="botonCarrito" className="botonCarrito" type="button">
                <FontAwesomeIcon icon={faShoppingCart} className='cart'/>
            </button>
}

export default CartWidget;