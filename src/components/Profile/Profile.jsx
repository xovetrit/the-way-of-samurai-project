import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts'


function Profile() {
    return (
        <div className={classes.content}>
            <div>
                <img src='https://www.indiewire.com/wp-content/uploads/2018/07/103_sdr_4k_tiff_121217_0099419.jpg'></img>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
         </div>
    );
}


export default Profile;