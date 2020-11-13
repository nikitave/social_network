import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import photo from "../../assets/img/logo.jpg"
const Header = (props) => {
    return(
        <header className="header">
            <img alt="" className='header__img' src={photo}></img>
            <div className="header__login">
            {props.isAuth ? <div>{props.login} - <button className="header__button" onClick={props.logout}>Log out</button></div> : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}   


export default Header;