import './NavBar.css';


const NavBar = (props) => {
return <nav className="Navigation">
            <div>
                <img src={props.img} alt="Logo Batman" className="Logo" /> 
            </div>
            <div>
                <ul>
                    <li><a href=".">INICIO</a></li>
                    <li><a href=".">TRAILER</a></li>
                    <li><a href=".">COLLECTIONS</a></li>
                    <li><a href=".">CONTACTO</a></li>
                </ul>
            </div>
        </nav>
            
};

export default NavBar;