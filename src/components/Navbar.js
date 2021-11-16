import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container container">
                
                <div className="logo"><img src={require(`../assets/images/logo.svg`).default} alt="insure"/></div>
                <div className="menu-items">
                     <ul className="nav-list">
                         <li className="nav-items"><a href="#">How we work</a></li>
                         <li className="nav-items"><a href="#">Blog</a></li>
                         <li className="nav-items"><a href="#">Account</a></li>
                         <li className="nav-items btn"><a href="#"> View Plans</a></li>
                     </ul>
                    </div>
            </div>
        </nav>
    )
}

export default Navbar
