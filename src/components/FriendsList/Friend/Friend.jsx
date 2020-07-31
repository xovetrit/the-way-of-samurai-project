import React from 'react';
import classes from './Friend.module.css';


function Friend(props) {
    return (
        <div className={classes.container}>
            <div className={classes.FriendsListAll}>
                <div className={classes.friendAvaPlace}><img className={classes.friendAvaImg} src={props.ava}></img></div>
                <div className={classes.friendNameAge}><p>{props.name}, {props.age} <span className={classes.OnlineStatus}>&bull;</span></p></div>
            </div>
        </div>
    );
}

export default Friend;