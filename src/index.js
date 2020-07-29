import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
  { id: 1, message: 'Если предали один раз - то это первый раз, если предали еще - то это уже второй раз', ava: 'https://www.province.ru/pskov/media/k2/items/cache/080b4dffeeea98952b99d2915da0b69c_L.jpg', likesCount: 254 },
  { id: 2, message: 'Работа не волк, работа это ворк', ava: 'https://www.province.ru/pskov/media/k2/items/cache/080b4dffeeea98952b99d2915da0b69c_L.jpg', likesCount: 290 },
  { id: 3, message: 'Лучше иметь друга, чем друг друга', ava: 'https://www.province.ru/pskov/media/k2/items/cache/080b4dffeeea98952b99d2915da0b69c_L.jpg', likesCount: 364 }
];

let messages = [
  { message: 'Hi' },
  { message: 'How is your React the way of samurai course?' },
  { message: ':)' }
];

let dialogs = [
  { id: 1, name: 'Томас' },
  { id: 2, name: 'Артур' },
  { id: 3, name: 'Джон' },
  { id: 4, name: 'Финн' },
  { id: 5, name: 'Майкл' },
];

ReactDOM.render(<App posts={posts} messages={messages} dialogs={dialogs}/>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
