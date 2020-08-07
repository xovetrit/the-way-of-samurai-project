const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

let initialState = {
    dialogs: [
        { id: 1, name: 'Томас', ava: 'https://i.pinimg.com/originals/34/99/06/349906ada2cbe6f41788a932157c9eb8.jpg' },
        { id: 2, name: 'Артур', ava: 'https://i.pinimg.com/originals/cc/06/20/cc0620c464debcbcec3bdd726a21e7d8.jpg' },
        { id: 3, name: 'Джон', ava: 'https://img.wallpapersafari.com/desktop/1280/1024/61/31/0nqywC.jpg' },
        { id: 4, name: 'Финн', ava: 'https://www.denofgeek.com/wp-content/uploads/2019/07/peaky_blinders_finn_shelby-1.jpg' },
        { id: 5, name: 'Майкл', ava: 'https://i03.fotocdn.net/s122/ceee516083391539/public_pin_l/2788002124.jpg' }
    ],
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your React the way of samurai course?' },
        { id: 3, message: ':)' }
    ],
    newMessageBody: ""
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.messages.push({ id: 4, message: body });
            state.newMessageBody = '';
            return state;
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({
    type: SEND_MESSAGE
});

export const updateNewMessageBodyActionCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
})

export default dialogsReducer;