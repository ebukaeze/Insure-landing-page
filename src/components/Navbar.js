import React,{useState} from 'react';

const Navbar = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <nav className="navbar">
            <div className="navbar-container container">
                
                <div className="logo"><img src={require(`../assets/images/logo.svg`).default} alt="insure"/></div>
                <div className={ `menu-items ${click && "active"}`}>
                     <ul className="nav-list">
                         <li className="nav-items"><a href="#">How we work</a></li>
                         <li className="nav-items"><a href="#">Blog</a></li>
                         <li className="nav-items"><a href="#">Account</a></li>
                         <li className="nav-items btn"><a href="#"> View Plans</a></li>
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
