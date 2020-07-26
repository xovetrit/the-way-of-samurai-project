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
                    <Post message='Если предали один раз - то это первый раз, если предали еще - то это уже второй раз' ava='https://i.ytimg.com/vi/4VZwmnfi3Gs/maxresdefault.jpg' likeNum='254'/>
                    <Post message='Работа не волк, работа это ворк' ava='https://i.ytimg.com/vi/4VZwmnfi3Gs/maxresdefault.jpg' likeNum='290'/>
                    <Post message='Лучше иметь друга, чем друг друга' ava='https://i.ytimg.com/vi/4VZwmnfi3Gs/maxresdefault.jpg' likeNum='364'/>
                </div>
            </div>
    );
}


export default MyPosts;