import React, { useState } from 'react'
import Input from '../../Atom/input_field/Input'
import style from './Right_side.module.css'
import { BsSearch } from "react-icons/bs";

 function Right_side() {
    const[search,setSearch]= useState("")
    const searchInput =(e)=>{
        setSearch(e.target.value)
    }

  return (
    <div className={style.display}>
        <BsSearch/>
       <Input  placeholder="  Search Twitter"  value='search' text className={style.input} />
       
    </div>
  )
}

export default Right_side