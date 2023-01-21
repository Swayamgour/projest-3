// import { style } from '@mui/system'
import React from 'react'
import style from '../Middle_side/Middle_side.module.css'
import { HiPhotograph,HiChat } from "react-icons/hi";
import { BsEmojiSmile ,BsFillChatTextFill ,BsApple } from "react-icons/bs";
import CardArray from './Card_array/CardArray';
// import { HiOutlineGif } from "react-icons/hi";

// import image from '../image.png'

function Middle_side() {
  return (
    <>
    <div className={style.navbar}>
     <div className={style.header}><h3 style={{marginLeft:"2rem"}}>Home</h3></div> 
     <div className={style.headersmall}> <h4 className={style.For}>For you</h4>
      <h4  className={style.For}>following</h4></div>
      </div>  

       <div className={style.scrool}>
        <div className={style.profile}>
       <img style={{width:'3rem',height:'3rem' ,padding:'.3rem', borderRadius:"50%" }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxI8k6VYzsB5fNKN-6mrFfvNgoDQkWppXR4Q&usqp=CAU'></img>
       <input className={style.input} placeholder='what,s happening?'/> 
        </div> 
       <div className={style.profile1}>
        
        <HiPhotograph className={style.logo}/>
       <HiChat className={style.logo1}/>
       <BsEmojiSmile className={style.logo1}/>
       <BsFillChatTextFill className={style.logo1}/>
       <BsApple className={style.logo1}/>
       <button className={style.butten}>Tweet</button>
             
     
       </div>
       &nbsp;
       
       
       <CardArray  className={style.Cardarray}/>
       &nbsp;
       <CardArray  className={style.Cardarray}/>
       &nbsp;

       <CardArray  className={style.Cardarray}/>
       &nbsp;
        
       <CardArray  className={style.Cardarray}/>
       &nbsp;
        
       <CardArray  className={style.Cardarray}/>

       </div>
       </>
   
  )
}

export default Middle_side