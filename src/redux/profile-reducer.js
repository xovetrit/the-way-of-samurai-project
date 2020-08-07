const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                message: state.newPostText,
                ava: 'https://www.province.ru/pskov/media/k2/items/cache/080b4dffeeea98952b99d2915da0b69c_L.jpg',
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
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


export default profileReducer;