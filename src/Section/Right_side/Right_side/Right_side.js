import React, { useState } from 'react'
import Input from '../../../Atom/input_field/Input'
import style from './Right_side.module.css'
import { BsSearch } from "react-icons/bs";
import StoreData from '../StoreData/StoreData';
import StoreArr from '../StoreData2/StoreArr';
import { margin } from '@mui/system';


 function Right_side() {
   const[toogle,setToogle]= useState(false)
   const[toogle1,setToogle1]= useState(false)
   const[toogle2,setToogle2]= useState(false)
   const[toogle3,setToogle3]= useState(false)

    const[search,setSearch]= useState("")
    const searchInput =(e)=>{
        setSearch(e.target.value)
    }

    const handelclick=()=>{
      setToogle(!toogle);
     }
     const handelclick1=()=>{
      setToogle1(!toogle1);
     }
     const handelclick2=()=>{
      setToogle2(!toogle2);
     }
     const handelclick3=()=>{
      setToogle3(!toogle3);
     }

  return (
    <>
   <div className={style.positoin}>
    <div className={style.display}>
        <BsSearch/>
       <Input     placeholder="  Search Twitter"  value='search' text className={style.input} />
       
    </div>
    <div>
    <div className={style.arrayItem}>
       <StoreData />
    </div>

    </div>
    <div className={style.arraycard}>
    <div className={style.arraystore}>
     <StoreArr/>
     <h6 style={{color:"grey" ,marginRight:"20px"}}>Terms of &nbsp; Service
           Privacy &nbsp;&nbsp;&nbsp;Policy
           Cookie Policy&nbsp;&nbsp;&nbsp;
           Accessibility
           Ads&nbsp;&nbsp;&nbsp; info
           More<br/>
           © 2023 Twitter, Inc.</h6>
    </div>
    <div className={style.tooglebutten}>
    <button className={style.follow} style={{width:"5rem", marginBottom:"12px" , height:"2rem", borderRadius:"20px"}}  onClick={handelclick}>{toogle ? "following" : "follow"}</button>
            <button className={style.follow} style={{width:"5rem", marginBottom:"12px" , height:"2rem", borderRadius:"20px"}}  onClick={handelclick1}>{toogle1 ? "following" : "follow"}</button>
            <button className={style.follow} style={{width:"5rem", marginBottom:"12px" , height:"2rem", borderRadius:"20px"}}  onClick={handelclick2}>{toogle2 ? "following" : "follow"}</button>
            <button className={style.follow} style={{width:"5rem", marginBottom:"20px" , height:"2rem", borderRadius:"20px"}}  onClick={handelclick3}>{toogle3 ? "following" : "follow"}</button>
    </div>
    </div>
    </div>
    </>
  )
}

export default Right_side