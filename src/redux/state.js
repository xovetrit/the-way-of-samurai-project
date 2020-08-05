let rerenderEntireTree = () => {
}
let state = {

    profilePage: {

        posts: [
            { id: 1, message: 'Если предали один раз - то это первый раз, если предали еще - то это уже второй раз', ava: 'https://www.province.ru/pskov/media/k2/items/cache/080b4dffeeea98952b99d2915da0b69c_L.jpg', likesCount: 254 },
            { id: 2, message: 'Работа не волк, работа это ворк', ava: 'https://www.province.ru/pskov/media/k2/items/cache/080b4dffeeea98952b99d2915da0b69c_L.jpg', likesCount: 290 },
            { id: 3, message: 'Лучше иметь друга, чем друг друга', ava: 'https://www.province.ru/pskov/media/k2/items/cache/080b4dffeeea98952b99d2915da0b69c_L.jpg', likesCount: 364 }
        ],
        newPostText : 'Розы любят воду, пацаны свободу, розы гибнут на газонах, пацаны на зонах'
    },

    dialogsPage: {
        messages: [
            { message: 'Hi' },
            { message: 'How is your React the way of samurai course?' },
            { message: ':)' }
        ],
        dialogs: [
            { id: 1, name: 'Томас', ava: 'https://i.pinimg.com/originals/34/99/06/349906ada2cbe6f41788a932157c9eb8.jpg' },
            { id: 2, name: 'Артур', ava: 'https://i.pinimg.com/originals/cc/06/20/cc0620c464debcbcec3bdd726a21e7d8.jpg' },
            { id: 3, name: 'Джон', ava: 'https://img.wallpapersafari.com/desktop/1280/1024/61/31/0nqywC.jpg' },
            { id: 4, name: 'Финн', ava: 'https://www.denofgeek.com/wp-content/uploads/2019/07/peaky_blinders_finn_shelby-1.jpg' },
            { id: 5, name: 'Майкл', ava: 'https://i03.fotocdn.net/s122/ceee516083391539/public_pin_l/2788002124.jpg' }
        ],
        newMessageText : "We're good, thx for asking!"

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
}

// window.state = state; //console написать state


export const addPost = () => {
    let newPost = {
        id: 4,
        message: state.profilePage.newPostText,
        ava: 'https://www.province.ru/pskov/media/k2/items/cache/080b4dffeeea98952b99d2915da0b69c_L.jpg',
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const addMessage = () => {
    let newMessage = {
        message: state.dialogsPage.newMessageText
    };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
}

export const updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;