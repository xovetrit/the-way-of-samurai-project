import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts() {

    return (
            <div>
                My posts
                <div>
                    <textarea name="" id="" cols="80" rows="5"></textarea>
                    <button>Add post</button>
                </div>
                <div className={classes.posts}>
                    <Post message='Если предали один раз - то это первый раз, если предали еще - то это уже второй раз' ava='https://fotodes.ru/upload/img1340201879.jpg' likesCount='254'/>
                    <Post message='Работа не волк, работа это ворк' ava='https://i.pinimg.com/736x/88/5e/ba/885eba4f83dea7b259fb270bb5f3d027--black-roses-red-roses.jpg' likesCount='290'/>
                    <Post message='Лучше иметь друга, чем друг друга' ava='https://avatars.mds.yandex.net/get-pdb/2349661/7dc021fd-e0e4-465c-88e9-c78103a477c2/s1200?webp=false' likesCount='364'/>
                </div>
            </div>
    );
}


export default MyPosts;