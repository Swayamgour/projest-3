import React, { useState } from 'react'
import style from './Singnewpage.module.css'
import Butten from '../Atom/Butten'
import { TfiTwitterAlt } from "react-icons/tfi";
import { validEmail, validPassword , validusername} from './regex1';




function Singnewpage() {
  const[butten,setButten]=useState([])
   const[phone,setPhone]=useState("")
   const[password,setPassword]=useState("")
   const[usename,setUsername]=useState("")
  
   const [emailErr, setEmailErr] = useState(false);
   const [usernm, setUsernm] = useState(false);
   const [pwdError, setPwdError] = useState(false);
 
   const Submit = () => {
      if (!validEmail.test(phone)) {
         setEmailErr(true);
      }
      if (!validusername.test(usename)) {
         setUsernm(true);
      }
      if (!validPassword.test(password)) {
         setPwdError(true);
      }

      if(phone === "" || usename === "" || password=== ""){
        alert("please fill all the field something")
       }
      localStorage.setItem("NameRegister",usename)
      localStorage.setItem("EmailRegister",phone)
      localStorage.setItem("PasswordRegister",password)
      setButten(' ')
   };
  

 
    

  return (
    <>

     <div className={style.main}>
      <div className={style.center}>
     
       <TfiTwitterAlt className={style.tfi}/>
      
       <h1 className={style.h2}>Sign in to Twitter</h1>
       &nbsp;
      
       
              &nbsp;
             
              <input placeholder='Name' className={style.input} type="name" onChange={(e) => setUsername(e.target.value)}/>
           <br/>
           <br/>

           <input placeholder='Phone' className={style.inpu} type="email" onChange={(e) => setPhone(e.target.value)}/>
                <br/>
                <br/>
              <input placeholder='Password' className={style.inpu}  type="password" onChange={(e) => setPassword(e.target.value)}/>
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
              <div className={style.div}><input placeholder='Month' className={style.inp1} />
              
              <input placeholder='Day' className={style.inp2} />
              <input placeholder='Year' className={style.inp3} /></div>
               
           <br/>
           <Butten
       buttenText="Submit"
       onClick={Submit}
       className={style.But} />
        </div>
      </div>   
    
    
    </>

  )
}

export default Singnewpage



































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
