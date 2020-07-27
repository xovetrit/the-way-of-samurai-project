import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts'


function Profile() {
    return (
        <div>
            <div className={classes.mainImg}>
                {/* <img className={classes.mainImg} src='https://wallpaperplay.com/walls/full/2/8/b/57304.jpg'></img> */}
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
         </div>
    );
}


export default Profile;