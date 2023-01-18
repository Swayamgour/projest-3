import React, { useState } from 'react'
import style from './Nextbutten.module.css'
import Butten from '../Atom/Butten'
import { TfiTwitterAlt } from "react-icons/tfi";
// import { GrGoogle } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';
import {  validPassword } from './regex1';



function Login() {
  const[state,setState]=useState("")
  const[password,setPassword]=useState(false)

   const  handelinput =(e)=>{

     setState(e.target.value)
    
     console.log(e.target.value)
   }
 const Forget=()=>{
  if (!validPassword.test(password)) {
    setPassword(true);

 }
 localStorage.setItem("PasswordRegister",password)
 if( localStorage.getItem('PasswordLogin') === localStorage.getItem('PasswordRegister') ){
  return  alert("Login sucessful ✅")
}else{
  return alert("Login unsucessful ⚠️")
}

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
              <input placeholder='password' className={style.input} onChange={handelinput}/>
              &nbsp;
              <Butten
       buttenText="Next"
       onClick={Forget}
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
