import './NavBar.css';
import CustomizedBadges from './CartWidget/CartWidget';

const NavBar = () => {
return <nav className="Navigation">
            <div>
                <a href='..'><img src="../Logo.png" alt="Logo" className="Logo" /> </a>
            </div>
            <div>
                <ul>
                    <li><a href=".">NEW ARRIVALS</a></li>
                    <li><a href=".">HOMBRES</a></li>
                    <li><a href=".">NIÑOS</a></li>
                    <li><a href=".">SURF</a></li>
                    <li><a href=".">SNOWBOARDING</a></li>
                    <li><a href=".">SALE</a></li>
                    <li><a href=".">COMUNIDAD</a></li>
                </ul>
            </div>
            <div className="div-fix">
                <ul>
                    <li><a href=".">MI CUENTA</a></li>
                    <li><a href=".">INICIAR SESION</a></li>
                </ul>
                <CustomizedBadges />
            </div>
        </nav>
            
};

export default NavBar;