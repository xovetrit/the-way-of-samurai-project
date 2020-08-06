import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { updateNewPostText } from '../../../redux/state';


function MyPosts(props) {
    let postsElements = props.posts.map(p => <Post message={p.message} ava={p.ava} likesCount={p.likesCount} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        // props.addPost();
        props.dispatch( { type: 'ADD-POST'} );
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        // props.updateNewPostText(text);
        let action = { type: 'UPDATE-NEW-POST-TEXT', newText : text };
        props.dispatch(action);

    }

    return (
        <div className={classes.MyPostsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} cols="80" rows="5"
                        value={props.newPostText} />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    );
}


export default MyPosts;