import React from 'react';
import classes from './FriendsList.module.css';
import Friend from './Friend/Friend';

function FriendsList(props) {

    let friendsListElements = props.state.friends.map( f => <Friend ava={f.ava} name={f.name} age={f.age} id={f.id} />);

    return (
        <div>
            <div>{friendsListElements}</div>            
        </div>
    );
}


export default FriendsList;