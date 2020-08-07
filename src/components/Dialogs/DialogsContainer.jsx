import React from 'react';
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

function DialogsContainer(props) {

    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyActionCreator(body));
    }


    return (
        <Dialogs updateNewMessageBody={onNewMessageChange}
            sendMessage={onSendMessageClick}
            dialogsPage={state} />
    );
}

export default DialogsContainer;