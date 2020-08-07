import React from 'react';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';


function Profile(props) {

    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    );
}


export default Profile;