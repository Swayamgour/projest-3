// // import './App.css';
// import Butten from './Atom/Butten';
//
// // import Input from './Input/Input';


// function App() {
  

//    const nevigate = useNavigate()
//    const GetStart=()=>{
    
//       nevigate('/Login')
//    }
     
//     const registration=()=>{
//     alert ("welcome to registration")
//   }
//   return (
//     <>
//     <div className='main'>
//       <h2>Welcome to twitter</h2>
//      <Butten 
//      buttenText = "Get start"
//      onClick = {GetStart}
//      />
   
//     <Butten 
//     buttenText ="registration"
//     onClick = {registration}
//     />
//     </div>

    
    
//     </>
//   );
// }

// export default App;



import React, { useState } from 'react'
import style from './Singup.module.css'
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
     
      const signnewpage =()=>{
       
         nevigate('/Singnewpage')
      }
 
    

  return (
    <>

     <div className={style.main}>
      <div className={style.center}>
      &nbsp;
       <TfiTwitterAlt className={style.tfi}/>
       &nbsp;
       <h1 className={style.h2}>Join Twitter today</h1>
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
       &nbsp;
       &nbsp;

      
       <div className={style.or}>
              <p className={style.line}>_________________</p>
              Or
              <p className={style.line}>_________________</p>
              </div>
            
              <Butten
       buttenText="Sign up with Phone or email"
       onClick={signnewpage}
       className={style.But} />
       &nbsp;
       <ul>
     <li className={style.li}> By signing up, you agree to the Terms of Service </li>
    <li  className={style.li}>  and Privacy Policy, including Cookie Use.</li>
    </ul> 
       &nbsp;
       &nbsp; &nbsp;
       <h5 className={style.h5}>Have an account already? <a href='Login' className={style.a}>Login</a></h5>
             
            

          

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
