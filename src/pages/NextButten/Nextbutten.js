import React, { useState } from 'react'
import style from './Nextbutten.module.css'
import Butten from '../../Atom/Butten'
import { TfiTwitterAlt } from "react-icons/tfi";
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
// import { isSineinupatom } from '../../Recoil';  
import { isLoginAtom } from '../../Recoil';


 
    // const isLogin = useRecoilState(isLoginAtom) 
    //   const nevigate = useNavigate()
    //   console.log(isLog)
    //     const Submit = () => {
   
    //       // if (validEmail.test(phone)) {
    //         // nevigate('/Home')
    //         // setEmailErr(true);
    //         // if(!isLogin == true) {
    //          setIsLog(true);
    //          console.log(isLog)
    //           // alert("adddd")
    //           nevigate('/')


function Nextbutten() {
  const[state,setState]=useState("")
const [isLog, setIsLog] = useRecoilState(isLoginAtom);


  // const setLogin = useRecoilState(isSineinupatom)
   const isLogin = useRecoilState(isLoginAtom)
 

  const  handelinput =(e)=>{
    setState(e.target.value)
  }
  
  const nevigate = useNavigate()
      const Forget=()=>{
        setIsLog(true);
            // alert("adddd")
              nevigate('/')
        

          localStorage.setItem("Password",state)
          
          if( localStorage.getItem('Password') === localStorage.getItem('PasswordRegister') ){
            
            return alert("Login unsucessful ⚠️")
          }else{
            return  alert("Login sucessful ✅")
        
         
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
              <input placeholder='password'  type='password' className={style.input} onChange={handelinput}/>
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

export default Nextbutten



































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
