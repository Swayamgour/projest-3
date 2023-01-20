import React from 'react'
import Input from '../Atom/input_field/Input'
import style from '../Home/Home.module.css'
import Right_side from '../Section/Right_side/Right_side'
import Left_side from '../Section/Left_side/Left_side'


function Home() {
  return (
   <>
   <div className={style.Main}>
    <div className={style.space}></div>
    <div className={style.LeftSide}>
     <Left_side/>
    </div>
    <div className={style.middleside}>

    </div>
    <div className={style.rightside}>
       <Right_side />
    </div>




   </div>
   
   
   </>
  )
}

export default Home