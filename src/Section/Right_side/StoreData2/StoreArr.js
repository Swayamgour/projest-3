import React, { useState } from 'react'
// import Butten from '../../Atom/Butten'
import style from '../StoreData2/StoreArr.module.css'


function StoreArr() {

    

  const img = <img style={{width:'15px',height:'15px'}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/1200px-Twitter_Verified_Badge.svg.png'/>

  const logo = <img style={{width:'40px',height:'40px' , borderRadius:"50%"}} src = 'https://assets.gqindia.com/photos/625e8bd9fcfaab5b0ecc5ef1/3:2/w_1620,h_1080,c_limit/MS%20Dhoni.jpeg'/>

  const logo1 = <img style={{width:'40px',height:'40px' , borderRadius:"50%"}} src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWdyUU1HiHVhrir8Zt3dv4m3BrfOh8NFNmHw&usqp=CAU'/>

  const logo2 = <img style={{width:'40px',height:'40px' , borderRadius:"50%"}} src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrhSXpTLlkXIq5B3Ukn6FKg7TEl5pmrqSupA&usqp=CAU'/>

  const logo3 = <img style={{width:'40px',height:'40px' , borderRadius:"50%"}} src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS2mPVMGN9Vi3Zylub1jXgeQX14AzCiX7U0A&usqp=CAU'/>


 

  const Item = [
    {
       pic:logo,
       name:"M__S__Dhoni",
       verified:img,
       butten:"Follow"

    },
    {
      pic:logo1,
      name:"Rahul_Gandhi",
      verified:img,
      butten:"Follow"


   },
   {
    pic:logo2,
    name:"Swayansh_gaur",
    verified:img,
    butten:"Follow"


 },
 {
  pic:logo3,
  name:"Swayam_Gaur",
  verified:img,
  butten:"Follow"


},
    
  ]
   
  return (
           <>
           <div className={style.storecard}>
           <h3 style={{marginLeft:"30px", marginTop:"-20px"}}>Who to follow</h3>
           {
            Item.map((Item)=>{
             return(
              <>
              <div className={style.pic}>
              <div className={style.pic1}>{Item.pic}</div> 
              <div  className={style.pic2}>
              { Item.name}
               {Item.verified}</div>
             
              </div>
              
             
              
              </>
              
             )
            })
           }
          
       
          </div>
           
         
         </>
  )
}

export default StoreArr