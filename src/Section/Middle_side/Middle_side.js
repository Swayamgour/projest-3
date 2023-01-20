// import { style } from '@mui/system'
import React from 'react'
import style from '../Middle_side/Middle_side.module.css'

function Middle_side() {
  return (
    <div className={style.navbar}>
     <div className={style.header}><h3 style={{marginLeft:"2rem"}}>Home</h3></div> 
     <div className={style.headersmall}> <h4 className={style.For}>For you</h4>
      <h4  className={style.For}>following</h4></div>

       <div className={style.scrool}>

       </div>
    </div>
  )
}

export default Middle_side