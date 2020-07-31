import React from 'react';
import classes from './Friend.module.css';


function Friend(props) {
    return (
        <div>
            <div>
                <div className={classes.friendAvaPlace}><img className={classes.friendAvaImg} src={props.ava}></img></div>
                {props.name}, {props.age}</div>
            <div></div>
        </div>
    );
}

export default Friend;