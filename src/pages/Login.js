import React, { useState } from 'react'
import style from './Login.module.css'
import Butten from '../Atom/Butten'
import { TfiTwitterAlt } from "react-icons/tfi";
import { GrGoogle } from "react-icons/gr";
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


      const Nextbutten=()=>{
        

        (state=="")?(alert("plese fill the input field")):
        nevigate('/Nextbutten')
     }
    

  return (
    <>

     <div className={style.main}>
      <div className={style.center}>
      &nbsp;
       <TfiTwitterAlt className={style.tfi}/>
       &nbsp;
       <h2 className={style.h2}>Sign in to Twitter</h2>
       &nbsp;
       <Butten 
       buttenText = {<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPk8LCyciAEO1xe9r6k8ytnbjm65WDCp9Dag&usqp=CAU' width='15rem' className={style.img}></img> }
       
       text = "Sign in with Google"
       className={style.Butten}

       />
       &nbsp;
       &nbsp;
       <Butten  
       buttenText={<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JUouL0b9o9YXJ2jL2totavkrnRtndw6tXQ&usqp=CAU" width="15ren" className={style.img}></img>}
       text="Sign in with Apple"
       className={style.Butten} />
       &nbsp;
      
       <div className={style.or}>
              <p className={style.line}>_________________</p>
              Or
              <p className={style.line}>_________________</p>
              </div>
              &nbsp;
              <input placeholder='Email,phone, usename'  className={style.input} onChange={handelinput}/>
              &nbsp;
              <Butten
       buttenText="Next"
       onClick={Nextbutten}
       className={style.But} />
       &nbsp;
       <Butten
       buttenText="Forgot password?"
       onClick={Forgetpas}
       className={style.Butt} />
       &nbsp;
       &nbsp; &nbsp;
       <h5 className={style.h5}>Don't have an account? <a href='Singup' className={style.a}>Singup</a></h5>
             
            

          

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
