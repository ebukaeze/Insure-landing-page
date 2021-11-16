import React from 'react';
import Main from './Main';
import Navbar from './Navbar';

const Header = () => {
    return (
        <div className="header">
            <Navbar />
            <Main />
        </div>
    )
}

export default Header
