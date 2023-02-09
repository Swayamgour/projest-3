import { useEffect, useState } from 'react'
import style from './Singnewpage.module.css'
import Butten from '../../Atom/Butten'
import { TfiTwitterAlt } from "react-icons/tfi";
// import { validEmail, validPassword , validusername} from '../regex1';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
// import { isSineinupatom } from '../../Recoil';  
import { isLoginAtom } from '../../Recoil';
import { ValidEmail} from '../../Helper'
import {validatPassword } from '../../Helper'
import {validusername } from '../../Helper'



function Singnewpage() {
 
   const[password,setPassword]=useState('')
   const[email,setEmail]=useState('')
   const [username, setusername] = useState("");
   const [message, setMessage] = useState("");
   const [pwmessage, setPwMessage] = useState("");
   const [uMes, setUMes] = useState("");
   const[data,setData]=useState([])
  //  const [show, setShow] = useState(false)
   const [isLog, setIsLog] = useRecoilState(isLoginAtom);
 
    const isLogin = useRecoilState(isLoginAtom) 
      const Nav = useNavigate()
      console.log(isLog)
      useEffect(()=>{
        if (localStorage.getItem('list')) {
          let data1 = JSON.parse(localStorage.getItem('list'));
          setData(data1);
        }
      },[])
       
      const userEmailAdd = (e)=>{
        setEmail(e.target.value)
        const validation  = ValidEmail(email)
        setMessage(validation)
      }
      const userPassword=(e)=>{
        setPassword(e.target.value)
        const validation = validatPassword(password) 
        setPwMessage(validation)
      }
    
    const UserNAme1 =(e)=>{
      setusername(e.target.value)
      const validation = validusername(username)
      setUMes(validation)
    }
    const Submit =()=>{
      if (message === "true"  && uMes === "true" && pwmessage === "true"){
        const obj = {
          name: username,
          password: password,
          email: email,
        };
        data.push(obj)
        setData([...data])
        localStorage.setItem("list" , JSON.stringify(data))
        // alert("Congratulations! You have successfully signed up!  🎉");
          setIsLog(true)
           Nav('/')
      }else{
        alert("Enter correct Ditial")
      }

    }
 
    

  return (
    <>

     <div className={style.main}>
      <div className={style.center}>
     
       <TfiTwitterAlt className={style.tfi}/>
      
       <h1 className={style.h2}>Sign in to Twitter</h1>
       &nbsp;
      
       
              &nbsp;
             
             
              <input className={style.input}
              type="name" 
              placeholder='Name' 
              value={username}
               onChange={UserNAme1}/>
               <span style={{color:"white"}}>{uMes }</span>
           <br/>
           <br/>

           <input  className={style.inpu} 
            type="email"
            placeholder='email'
            value={email}
             onChange={userEmailAdd}/>
             <span style={{color:"white"}}>{message}</span>
                <br/>
                <br/>
              <input className={style.inpu} 
               placeholder='Password'
                type="password"
                value={password} 
                onChange={userPassword}/>
                <span style={{color:"white"}}>{pwmessage}</span>
              <br/>
              <h5 className={style.h2}>Date of birth</h5>
              <ul className={style.li}>
                <li > 
                This will not be shown publicly. Swayam Gaur own age, even if this  
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
