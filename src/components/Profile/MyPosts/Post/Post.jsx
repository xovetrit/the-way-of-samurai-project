import React from 'react';
import classes from './Post.module.css';

function Post() {
    return (
        <div className={classes.item}>
            <img src='https://i.pinimg.com/originals/fa/53/70/fa53700cf063de7ed2eaa8b469c8df3e.gif'></img>
            Post 1
            <div className={classes.like}>
                <span>&#10084;</span>
            </div>
        </div>
    );
}


export default Post;