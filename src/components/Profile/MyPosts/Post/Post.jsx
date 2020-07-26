import React from 'react';
import classes from './Post.module.css';

function Post(props) {

    return (
        <div className={classes.item}>
            <img src={props.ava}></img>
            {props.message}
            <div className={classes.like}>
                <span>&#10084; {props.likeNum}</span>
            </div>
        </div>
    );
}


export default Post;