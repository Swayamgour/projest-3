import React, { useState } from 'react'
import style from './Login.module.css'
import Butten from '../../Atom/Butten'
import { TfiTwitterAlt } from "react-icons/tfi";
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { isLoginAtom } from '../../Recoil';



 export default function Login() {

   let list =  JSON.parse(localStorage.getItem("list"))
   console.log(list)


  const[email,setEmail]=useState("")
  
   
   const setlogin = useRecoilState(isLoginAtom)
   
    

   const  handelinput =(e)=>{
    setEmail(e.target.value)

   }

   const nevigate = useNavigate()
      const Forgetpas=()=>{
        nevigate('/Forget')
      }



       const Nextbutten=()=>{
       let MatchData = list.filter((x)=>x.email===email)
       if(MatchData.length > 0){
         alert("you email is valid ")
         nevigate('/Nextbutten')
       }
       else if(email === ""){
        alert("please fill Email fild ⚠️")
       }
       else{
        alert("register First")
       }

       
      }   
         
       const navigrateignuppage =()=>{
        nevigate('/Singup')
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
              <input placeholder='Email'  className={style.input} onChange={handelinput}/>
              {/* {phone && <p>Your email is invalid</p>} */}
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
      
         <h5 className={style.h5}>Don't have an account?  
           <span  style={{color
          :"blue"}} onClick={navigrateignuppage}> Singup</span> </h5>
        
         </div>
      </div>  
    </>
     )
}