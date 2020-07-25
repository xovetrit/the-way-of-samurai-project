import React from 'react';
import classes from './Profile.module.css';

function Profile() {
    return (
        <div className={classes.content}>
            <div>
                <img src='https://cdna.artstation.com/p/assets/images/images/005/514/686/large/gabriel-loo-carre-envdsn-cybpnkstreets-01.jpg?1491586828'></img>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div>
                    <div>
                        Post 1
                    </div>
                    <div>
                        Post 2
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Profile;