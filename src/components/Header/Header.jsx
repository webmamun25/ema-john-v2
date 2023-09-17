import React from 'react'
import './Header.css'
import logo from '../../images/Logo.svg'
function Header() {
    return (
        <nav className='header'>
            <img src={logo}></img>
            <div>
            <a href="/Shop">Shop</a>
            <a href="/Order">Order</a>
            <a href="/Inventory">Inventory</a>
            <a href="/Login">Login</a>
            </div>
        </nav>
    )
}

export default Header
