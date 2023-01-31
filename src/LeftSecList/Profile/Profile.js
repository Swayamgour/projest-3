import React, { Profiler, useState } from 'react'
// import Butten from '../../Atom/Butten'
import style from '../Profile/Profile.module.css'
import Left_side from '../../Section/Left_side/Left_side'
import Right_side from '../../Section/Right_side/Right_side/Right_side'


function Profile(){


    


    return(
        <>
              


            <div className={style.Main}>
    <div className={style.space}></div>
    <div className={style.LeftSide}>
     <Left_side/>
    </div>
    
    
  

    
            <div className={style.middleside}>
            {/* <div className={style.middleside}> */}
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
            <div>
                
                {/* </div> */}
                </div>

            <div className={style.rightside}>
       <Right_side />
    </div>
            </div>
        </>
    )
}
export default  Profile