import React from 'react';
import classes from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

function DialogItem(props) {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path}>
                <div className={classes.dialogAva}>
                    <img src={props.ava}></img>
                </div>
            </NavLink>
            <NavLink to={path} className={classes.dialogName}><p>{props.name}</p></NavLink>
        </div>
    );
}

export default DialogItem;