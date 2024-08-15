import React from 'react';
import logo from '../assets/logo192.png'; // Ensure you have a logo image in the specified path

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="CareerCarve Logo" className="logo" />
            <h1>CareerCarve 1x1 Scheduler</h1>
        </header>
    );
}

export default Header;
