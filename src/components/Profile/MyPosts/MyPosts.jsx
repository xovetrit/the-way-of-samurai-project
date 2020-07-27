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
                    <Post message='Работа не волк, работа это ворк' ava='https://fotodes.ru/upload/img1340201879.jpg' likesCount='290'/>
                    <Post message='Лучше иметь друга, чем друг друга' ava='https://fotodes.ru/upload/img1340201879.jpg' likesCount='364'/>
                </div>
            </div>
    );
}


export default MyPosts;