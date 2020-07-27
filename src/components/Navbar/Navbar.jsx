import React from 'react';
import classes from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <a href='/profile'>Профиль</a>
      </div>
      <div className={`${classes.item} ${classes.active}`}>
        <a href='/dialogs'>Сообщения</a>
      </div>
      <div className={classes.item}>
        <a href='/news'>Новости</a>
      </div>
      <div className={classes.item}>
        <a href='/music'>Музыка</a>
      </div>
      <div className={classes.item}>
        <a href='/settings'>Настройки</a>
      </div>
    </nav>
  );
}


export default Navbar;