import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts'


function Profile() {
    return (
        <div>
            <div>
                <img className={classes.mainImg} src='https://i.ytimg.com/vi/tOl6pc1Do1M/maxresdefault.jpg'></img>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
         </div>
    );
}


export default Profile;