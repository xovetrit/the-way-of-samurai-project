import React from 'react';
import classes from './Dialogs.module.css';

function Dialogs(props){
    return(
        <div>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    <div className={classes.dialog + ' ' + classes.active}>
                        Томас
                    </div>
                    <div className={classes.dialog}>
                        Артур
                    </div>
                    <div className={classes.dialog}>
                        Джон
                    </div>
                    <div className={classes.dialog}>
                        Майкл
                    </div>
                    <div className={classes.dialog}>
                        Финн
                    </div>
                </div>
                <div className={classes.messages}>
                    <div className={classes.message}>Hi!</div>
                    <div className={classes.message}>How is your React the way of samurai?</div>
                    <div className={classes.message}>Sir</div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;