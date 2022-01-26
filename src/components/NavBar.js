import './NavBar.css';
import CartWidget from './CartWidget';

const NavBar = (props) => {
return <nav className="Navigation">
            <div>
                <img src={props.img} alt="Logo" className="Logo" /> 
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
                <CartWidget />
            </div>
        </nav>
            
};

export default NavBar;