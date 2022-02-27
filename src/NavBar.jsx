import React from 'react'
import { NavLink } from 'react-router-dom';
import './NavBar.css'
const NavBar = () => {
    return (<>
    <NavLink activeclassname="active" to="/">Home</NavLink>
    <NavLink activeclassname="active" to="/about">About</NavLink>
    <NavLink activeclassname="active" to="/contact">Contact</NavLink>
    <NavLink activeclassname="active" to="/users">Users</NavLink>
    </>);
}
 
export default NavBar;