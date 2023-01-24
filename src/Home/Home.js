import React, { useState } from 'react'
import style from '../Home/Home.module.css'
import Right_side from '../Section/Right_side/Right_side/Right_side'
import Left_side from '../Section/Left_side/Left_side'
import Middle_side from '../Section/Middle_side/Middle_side'
import Profile from '../LeftSecList/Profile/Profile'


function Home() {
  const[toogle, setToogle]= useState(false)
  return (
   <>
   <div className={style.Main}>
    <div className={style.space}></div>
    <div className={style.LeftSide}>
     <Left_side/>
    </div>
    <div className={style.middleside}>
       <Middle_side />

    </div>
    <div className={style.rightside}>
       <Right_side />
    </div>




   </div>
   
   
   </>
  )
}

export default Home