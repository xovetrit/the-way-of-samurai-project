import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts() {

    let postsData = [
        { message: 'Если предали один раз - то это первый раз, если предали еще - то это уже второй раз', ava: 'https://www.province.ru/pskov/media/k2/items/cache/080b4dffeeea98952b99d2915da0b69c_L.jpg' ,likesCount: 254},
        { message: 'Работа не волк, работа это ворк', ava: 'https://www.province.ru/pskov/media/k2/items/cache/080b4dffeeea98952b99d2915da0b69c_L.jpg' ,likesCount: 290},
        { message: 'Лучше иметь друга, чем друг друга', ava: 'https://www.province.ru/pskov/media/k2/items/cache/080b4dffeeea98952b99d2915da0b69c_L.jpg' ,likesCount: 364}
    ];

    return (
        <div className={classes.MyPostsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea name="" id="" cols="80" rows="5"></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                <Post message={postsData[0].message} ava={postsData[0].ava} likesCount={postsData[0].likesCount} />
                <Post message={postsData[1].message} ava={postsData[1].ava} likesCount={postsData[1].likesCount} />
                <Post message={postsData[2].message} ava={postsData[2].ava} likesCount={postsData[2].likesCount} />
            </div>
        </div>
    );
}


export default MyPosts;