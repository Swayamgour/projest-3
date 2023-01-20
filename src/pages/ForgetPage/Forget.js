import React, { useState } from 'react'
import style from './Forget.module.css'
import Butten from '../../Atom/Butten'
import { TfiTwitterAlt } from "react-icons/tfi";
import { useNavigate } from 'react-router-dom';


function Forget() {
  const[state,setState]=useState("")

   const  handelinput =(e)=>{

     setState(e.target.value)
    
     console.log(e.target.value)
   }

  //  const nevigate = useNavigate()
  //     const handleclick=()=>{
       
  //        nevigate('/Input')
  //     }
  
    

  return (
    <>

     <div className={style.main}>
      <div className={style.center}>
      &nbsp;
       <TfiTwitterAlt className={style.tfi}/>
       &nbsp;
       <h1 className={style.h2}>Find your Twitter account</h1>
       <li className={style.h6}>Enter the email, phone number, or swayam gaur associated with your account to </li>
       <li className={style.h6}>change your password.</li>
       &nbsp;
      <br/>
       &nbsp;
      
       
              &nbsp;
              <input placeholder='Email,phone, usename' className={style.input} onChange={handelinput}/>
              &nbsp;
              
       &nbsp;
       &nbsp; &nbsp;
       <br/>
       <br/>

       <br/>

       <br/>

       <br/>
       <br/>

        <br/>

        <br/>  
        <br/>
       <br/>

       
             
            

      <Butten
       buttenText="Next"
      // onClick={handleclick}
       className={style.But} />

      </div>
      </div>   
    
    
    </>

  )
}

export default  Forget




































// function Login() {
//   return (
//    <>
//     <h2 className={style.h2}>
//         welcome to Login pages
//     </h2>


//    </>
//   )
// }

// export default Login
// import * as React from 'react';

// import Dialog from '@mui/material/Dialog';
// import Box from '@mui/material/Box';
// import DialogContentText from '@mui/material/DialogContentText';
// import Input from '../Input/Input';


// export default function AlertDialog() {
//   const [open, setOpen] = React.useState(true);

 

//   return (
//     <div>
      
//       <Dialog
//         open={open}
//          >
//             <input className={style.input} placeholder='keyboard'/>
//             <br/>
//             <br/>
//             <input placeholder='keyboard'/>
        
//     <span> <h2>welcome to twitter</h2> 
    
//     <input placeholder='keyboard'/>
//      <h5>welcome</h5></span>
     
//       </Dialog>
//     </div>
//   );
// }
