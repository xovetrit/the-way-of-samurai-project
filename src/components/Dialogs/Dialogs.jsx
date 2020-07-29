import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

function Dialogs(props) {

    let messages = [
        { message: 'Hi' },
        { message: 'How is your React the way of samurai course?' },
        { message: ':)' }
    ];

    let dialogs = [
        { id: 1, name: 'Томас' },
        { id: 2, name: 'Артур' },
        { id: 3, name: 'Джон' },
        { id: 4, name: 'Финн' },
        { id: 5, name: 'Майкл' },
    ];

    let messagesElements = messages.map(m => <Message message={m.message} />
    );

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />
    );

    return (
        <div>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={classes.messages}>
                    {messagesElements}
                </div>
            </div>
        </div>
    );
}

export default Dialogs;