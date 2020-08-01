import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

function Dialogs(props) {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} ava={d.ava} />
    );

    let messagesElements = props.state.messages.map(m => <Message message={m.message} />
    );

    let newMessageElement = React.createRef();

    let addNewMessage = () => {
        let message = newMessageElement.current.value;
        return (
            alert(message)
        );
    }

    return (
        <div>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={classes.messages}>
                    {messagesElements}
                    <div className={classes.newMessage}>
                        <textarea ref={newMessageElement} cols="50" rows="7"></textarea>
                        <button onClick={addNewMessage}>Отправить</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;