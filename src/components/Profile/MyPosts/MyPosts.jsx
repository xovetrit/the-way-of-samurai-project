import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts(props) {

    let postsElements = props.posts.map( p => <Post message={p.message} ava={p.ava} likesCount={p.likesCount} /> )

    return (
        <div className={classes.MyPostsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea name="" id="" cols="80" rows="5"></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                { postsElements }
            </div>
        </div>
    );
}


export default MyPosts;