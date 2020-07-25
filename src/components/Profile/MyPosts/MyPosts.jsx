import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts() {
    return (
            <div>
                My posts
                <div>
                    <textarea name="" id="" cols="80" rows="5"></textarea>
                    <button>Add post</button>
                </div>
                <div className={classes.posts}>
                    <Post />
                    <Post />
                </div>
            </div>
    );
}


export default MyPosts;