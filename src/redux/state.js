const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Если предали один раз - то это первый раз, если предали еще - то это уже второй раз', ava: 'https://www.province.ru/pskov/media/k2/items/cache/080b4dffeeea98952b99d2915da0b69c_L.jpg', likesCount: 254 },
                { id: 2, message: 'Работа не волк, работа это ворк', ava: 'https://www.province.ru/pskov/media/k2/items/cache/080b4dffeeea98952b99d2915da0b69c_L.jpg', likesCount: 290 },
                { id: 3, message: 'Лучше иметь друга, чем друг друга', ava: 'https://www.province.ru/pskov/media/k2/items/cache/080b4dffeeea98952b99d2915da0b69c_L.jpg', likesCount: 364 }
            ],
            newPostText: 'Розы любят воду, пацаны свободу, розы гибнут на газонах, пацаны на зонах'
        },
        dialogsPage: {
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
        },
        friendsListPage: {
            friends: [
                { id: 1, name: 'Томас', age: 26, ava: 'https://i.pinimg.com/originals/34/99/06/349906ada2cbe6f41788a932157c9eb8.jpg' },
                { id: 2, name: 'Артур', age: 30, ava: 'https://i.pinimg.com/originals/cc/06/20/cc0620c464debcbcec3bdd726a21e7d8.jpg' },
                { id: 3, name: 'Джон', age: 23, ava: 'https://img.wallpapersafari.com/desktop/1280/1024/61/31/0nqywC.jpg' },
                { id: 4, name: 'Финн', age: 19, ava: 'https://www.denofgeek.com/wp-content/uploads/2019/07/peaky_blinders_finn_shelby-1.jpg' },
                { id: 5, name: 'Майкл', age: 20, ava: 'https://i03.fotocdn.net/s122/ceee516083391539/public_pin_l/2788002124.jpg' }
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) { // type: 'ADD-POST'
            let newPost = {
                id: 4,
                message: this._state.profilePage.newPostText,
                ava: 'https://www.province.ru/pskov/media/k2/items/cache/080b4dffeeea98952b99d2915da0b69c_L.jpg',
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
        else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        }
        else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.messages.push({id: 4, message: body});
            this._state.dialogsPage.newMessageBody = '';
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
// то же самое что тут addPostActionCreator = () => ({type: ADD_POST});
// export const addPostActionCreator = () => {
//     return {
//         type: ADD_POST
//     }
// }

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
});

export const sendMessageActionCreator = () => ({
    type: SEND_MESSAGE
});

export const updateNewMessageBodyActionCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
})

export default store;
window.store = store; //console написать store