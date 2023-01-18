import React, { useState } from 'react'
import style from './Singnewpage.module.css'
import Butten from '../Atom/Butten'
import { TfiTwitterAlt } from "react-icons/tfi";
// import { GrGoogle } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


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
      const Nextbutten=()=>{
       
        nevigate('/Nextbutten')
     }
    
    

  return (
    <>

     <div className={style.main}>
      <div className={style.center}>
     
       <TfiTwitterAlt className={style.tfi}/>
      
       <h1 className={style.h2}>Sign in to Twitter</h1>
       &nbsp;
      
       
              &nbsp;
             
              <input placeholder='Name' className={style.input} onChange={handelinput}/>
           <br/>
           <br/>

           <input placeholder='Phone' className={style.inpu} onChange={handelinput}/>
                <br/>
                <br/>
              <input placeholder='Password' className={style.inpu} onChange={handelinput}/>
              <br/>
              <h5 className={style.h2}>Date of birth</h5>
              <ul className={style.li}>
                <li > 
                This will not be shown publicly. Confirm your own age, even if this  
                </li>
                <li>
                business, a pet, or something else.
                </li>
              </ul>
              <div className={style.div}><input placeholder='Month' className={style.inp1} onChange={handelinput}/>
              
              <input placeholder='Day' className={style.inp2} onChange={handelinput}/>
              <input placeholder='Year' className={style.inp3} onChange={handelinput}/></div>
               
           <br/>
           <Butten
       buttenText="Submit"
      
       className={style.But} />
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
