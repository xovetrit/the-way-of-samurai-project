import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

function Dialogs(props) {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} ava={d.ava} />
    );

    let messagesElements = props.state.messages.map(m => <Message message={m.message} />
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