import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/state';

function Dialogs(props) {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} ava={d.ava} />
    );

    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} />
    );

    let newMessageElement = React.createRef();

    let addMessage = () => { 
        // props.addMessage();
        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        // props.updateNewMessageText(text);
        let action = updateNewMessageTextActionCreator(text);
        props.dispatch(action);
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
                        <textarea onChange={onMessageChange} ref={newMessageElement} cols="50" rows="7" value={props.newMessageText}/>
                        <button onClick={addMessage}>Отправить</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;