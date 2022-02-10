import './NavBar.css';
import CustomizedBadges from './CartWidget/CartWidget';
import { Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const NavBar = () => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        axios(`https://fakestoreapi.com/products/categories`)
        .then((res) => setCategory(res.data))
    }, []);


return <nav className="Navigation">
            <div>
                <a href='..'><img src="../Logo.png" alt="Logo" className="Logo" /> </a>
            </div>
            <div className='DivNav'>
                <ul>
                    <Link to='/electronics' className='Link'>
                        {category[0]}
                    </Link>
                    <Link to='/jewelry' className='Link'>
                        {category[1]}
                    </Link>
                    <Link to="/men's%20clothing" className='Link'>
                        {category[2]}
                    </Link>
                    <Link to="/women's%20clothing" className='Link'>
                        {category[3]}
                    </Link>
                    <Link to='/About' className='Link'>
                        About Us
                    </Link>
                </ul>
            </div>
            <div className="DivFix">
                <ul>
                    <Link to='/Login' className='Link Login'>
                        <strong>Login</strong>
                    </Link>
                </ul>
                <CustomizedBadges />
            </div>
        </nav>
            
};

export default NavBar;