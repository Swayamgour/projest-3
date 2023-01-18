import React, { useState } from 'react'
import style from './Nextbutten.module.css'
import Butten from '../Atom/Butten'
import { TfiTwitterAlt } from "react-icons/tfi";
// import { GrGoogle } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';


function Login() {
  const[state,setState]=useState("")

   const  handelinput =(e)=>{

     setState(e.target.value)
    
     console.log(e.target.value)
   }

   const nevigate = useNavigate()
      const Forgetpas=()=>{
       
         nevigate('/Forget')
      }
 
    

  return (
    <>

     <div className={style.main}>
      <div className={style.center}>
      &nbsp;
       <TfiTwitterAlt className={style.tfi}/>
       &nbsp;
       <h1 className={style.h2}>Enter your password</h1>
       &nbsp;
       

       
       &nbsp;
       &nbsp;
      
       &nbsp;
      



      
     
              &nbsp;
              <input placeholder='Email,phone, usename' className={style.input} onChange={handelinput}/>
              &nbsp;
              <Butten
       buttenText="Next"
       
       className={style.But} />
       &nbsp;
      
       &nbsp;
       &nbsp; &nbsp;
       
             
            

          

      </div>
      </div>   
    
    
    </>

  )
}

export default Login



































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
