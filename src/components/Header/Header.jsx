import React from 'react'
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <nav className='header'>
            <img src={logo}></img>
            <div>
            <Link to="/">Shop</Link>
            <Link to="/Order">Order</Link>
            <Link to="/Inventory">Inventory</Link>
            <Link to="/Login">Login</Link>
            </div>
        </nav>
    )
}

export default Header
