import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
const Header = (props) => {
    return(
        <header className="header">
            <img alt="" className='header__img' src='https://logomaster.ai/static/media/sample.c8bf2b04.svg'></img>
            <div className="header__login">
            {props.isAuth ? <div>{props.login} - <button className="header__button" onClick={props.logout}>Log out</button></div> : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}   


export default Header;