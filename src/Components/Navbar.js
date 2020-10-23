import React from 'react';
import '../Styles/Navbar.css';
import { Navbar } from 'react-bootstrap';

function TopNavbar() {
    return (
        <div className="header">
            <Navbar className="topnav">
                <p className="navbar-text1"><span className="navbar-text2">CART</span>&ORDER</p>
            </Navbar>
        </div>
    )
}

export default TopNavbar;


