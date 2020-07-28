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

    let messagesData = [
        { message: 'Hi' },
        { message: 'How is your React the way of samurai?' },
        { message: 'Sir' }
    ];

    let dialogsData = [
        { id: 1, name: 'Томас' },
        { id: 2, name: 'Артур' },
        { id: 3, name: 'Джон' },
        { id: 4, name: 'Майкл' },
        { id: 5, name: 'Финн' },
    ];

    return (
        <div>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                    <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                    <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                    <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                    <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
                </div>
                <div className={classes.messages}>
                    <Message message={messagesData[0].message} />
                    <Message message={messagesData[1].message} />
                    <Message message={messagesData[2].message} />
                </div>
            </div>
        </div>
    );
}

export default Dialogs;