import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

function Dialogs(props) {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} ava={d.ava} />
    );

    let messagesElements = state.messages.map(m => <Message message={m.message} />
    );

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.updateNewMessageBody(body);
    }


    return (
        <div>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={classes.messages}>
                    <div>{messagesElements}</div>
                    <div>
                        <div><textarea onChange={onNewMessageChange} value={newMessageBody}
                                placeholder="Напишите сообщение" cols="50" rows="7" /></div>
                        <div><button onClick={onSendMessageClick}>Отправить</button></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;