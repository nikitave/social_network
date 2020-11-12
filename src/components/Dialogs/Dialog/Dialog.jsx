import React from 'react'
import { NavLink } from 'react-router-dom';
import './../Dialogs.css';

const Dialog = (props) => {
    let path = "/dialogs/" + props.id;
    return(
        <div className="dialogs__user">
             <NavLink to={path}>{props.name}</NavLink> 
        </div>
    );
}

export default Dialog;