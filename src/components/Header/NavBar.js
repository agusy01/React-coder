import './NavBar.css';
import CartWidget from './CartWidget/CartWidget';
import { Link} from 'react-router-dom';

const NavBar = () => {


return <nav className="Navigation">
            <div>
                <a href='..'><img src="../Logo.png" alt="Logo" className="Logo" /> </a>
            </div>
            <div className='DivNav'>
                <ul>
                    <Link to='/electronics' className='Link'>
                        Electronics
                    </Link>
                    <Link to='/jewelry' className='Link'>
                        Jewelry
                    </Link>
                    <Link to="/men's%20clothing" className='Link'>
                        Men's Clothing
                    </Link>
                    <Link to="/women's%20clothing" className='Link'>
                        Women's Clothing
                    </Link>
                    <Link to='/About' className='Link'>
                        About Us
                    </Link>
                </ul>
            </div>
            <div className="DivFix">
                <Link to='/cart'><CartWidget /></Link>
            </div>
        </nav>
            
};

export default NavBar;