let initialState = {
    friends: [
        { id: 1, name: 'Томас', age: 26, ava: 'https://i.pinimg.com/originals/34/99/06/349906ada2cbe6f41788a932157c9eb8.jpg' },
        { id: 2, name: 'Артур', age: 30, ava: 'https://i.pinimg.com/originals/cc/06/20/cc0620c464debcbcec3bdd726a21e7d8.jpg' },
        { id: 3, name: 'Джон', age: 23, ava: 'https://img.wallpapersafari.com/desktop/1280/1024/61/31/0nqywC.jpg' },
        { id: 4, name: 'Финн', age: 19, ava: 'https://www.denofgeek.com/wp-content/uploads/2019/07/peaky_blinders_finn_shelby-1.jpg' },
        { id: 5, name: 'Майкл', age: 20, ava: 'https://i03.fotocdn.net/s122/ceee516083391539/public_pin_l/2788002124.jpg' }
    ]
}

const friendsListReducer = (state = initialState, action ) => {
    return state;
}


export default friendsListReducer;