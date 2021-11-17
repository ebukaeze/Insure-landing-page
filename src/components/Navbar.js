import React,{useState} from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <nav className="navbar">
            <div className="navbar-container container">
                
                <div className="logo"><img src={require(`../assets/images/logo.svg`).default} alt="insure"/></div>
                <div className={ `menu-items ${click && "active"}`}>
                     <ul className="nav-list">
                         <li className="nav-items"><Link to="#">How we work</Link></li>
                         <li className="nav-items"><Link to="#">Blog</Link></li>
                         <li className="nav-items"><Link to="#">Account</Link></li>
                         <li className="nav-items btn"><Link to="#"> View Plans</Link></li>
                     </ul>
                    </div>
                    <div className="menu-icon" onClick={handleClick}>
                        {click? <img src={require('../assets/images/icon-close.svg').default} alt="close"/>
                        : <img src={require("../assets/images/icon-hamburger.svg").default} alt="menu"/>}
                    </div>
            </div>
        </nav>
    )
}

export default Navbar
