import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

function DialogItem(props) {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

function Message(props) {
    return (
        <div className={classes.message}>{props.message}</div>
    );
}

function Dialogs(props) {
    return (
        <div>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    <DialogItem name='Томас' id='1' />
                    <DialogItem name='Артур' id='2' />
                    <DialogItem name='Джон' id='3' />
                    <DialogItem name='Майкл' id='4' />
                    <DialogItem name='Финн' id='5' />
                </div>
                <div className={classes.messages}>
                    <Message message='Helloo' />
                    <Message message='How is your React the way of samurai?' />
                    <Message message='Sir' />
                    <Message message='Sir' />
                </div>
            </div>
        </div>
    );
}

export default Dialogs;