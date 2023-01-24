import React, { Profiler, useState } from 'react'
// import Butten from '../../Atom/Butten'
import style from '../Profile/Profile.module.css'



function Profile(){
    return(
        <>
            <div className={style.userprofilecontainer}>
                <div className={style.cover}></div>
                <div className={style.userprofile}>
                    <div className={style.useractions}>
                        <div className={style.avatar}></div>
                        <div className={style.actionbuttons}>
                            <button className={style.morebtn}>
                                <span>
                                &middot;&middot;&middot;
                                </span>
                            </button>
                            <button className={style.followbtn}>Follow</button>
                        </div>
                    </div>
                    <div className={style.displayname}>
                        <b>Swayam Gaur</b>
                        <span>☑</span>
                    </div>
                    <div className={style.username}>
                        @nytimes
                    </div>
                    <div className={style.description}>
                         <span>News tips? Share them here: </span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default  Profile