import React  from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom';

const Navbar = () =>{
    return(
    <nav className="nav">
        <div className="nav__link" ><NavLink to="/profile" className="nav__item">Profile</NavLink></div>
        <div className="nav__link" ><NavLink to="/dialogs" className="nav__item">Messages</NavLink></div>
        {/* <div className="nav__link" ><NavLink to="/news" className="nav__item">News</NavLink></div>
        <div className="nav__link" ><NavLink to="/music" className="nav__item">Music</NavLink></div> */}
        <div className="nav__link" ><NavLink to="/users" className="nav__item">Users</NavLink></div>
        {/* <div className="nav__link" ><NavLink to="/settings" className="nav__item">Settings</NavLink></div> */}
    </nav>
    );
}

export default Navbar;