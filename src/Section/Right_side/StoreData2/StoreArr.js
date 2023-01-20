import React, { useState } from 'react'
// import Butten from '../../Atom/Butten'
import style from '../StoreData2/StoreArr.module.css'


function StoreArr() {

      const[toogle,setToogle]= useState(false)

  const img = <img style={{width:'15px',height:'15px'}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/1200px-Twitter_Verified_Badge.svg.png'/>

  const logo = <img style={{width:'40px',height:'40px' , borderRadius:"50%"}} src = 'https://assets.gqindia.com/photos/625e8bd9fcfaab5b0ecc5ef1/3:2/w_1620,h_1080,c_limit/MS%20Dhoni.jpeg'/>

  const handelclick=()=>{
   setToogle(!toogle);
  }

  const Item = [
    {
       pic:logo,
       name:"M__S__Dhoni",
       verified:img,
       butten:"Follow"

    },
    {
      pic:logo,
      name:"Rahul_Gandhi",
      verified:img,
      butten:"Follow"


   },
   {
    pic:logo,
    name:"Swayansh_gaur",
    verified:img,
    butten:"Follow"


 },
 {
  pic:logo,
  name:"Swayam_Gaur",
  verified:img,
  butten:"Follow"


},
    
  ]
   
  return (
           <>
           <h2 style={{marginLeft:"50px", marginTop:"0px"}}>Who to follow</h2>
           {
            Item.map((Item)=>{
             return(
              <>
              <div className={style.pic}>
              <div className={style.pic1}>{Item.pic}</div> 
              <div  className={style.pic2}>{
               Item.name
              } {Item.verified}</div>
             
              <button className={style.follow} style={{width:"5rem", marginBottom:"22px" , height:"2rem", borderRadius:"20px"}}  onClick={handelclick}>{toogle ? "following" : "follow"}</button>
              </div>
             
              </>
              
             )
            })
           }
          
       
         
         
         </>
  )
}

export default StoreArr