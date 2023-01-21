import React, { useState } from 'react'
import Input from '../../../Atom/input_field/Input'
import style from './Right_side.module.css'
import { BsSearch } from "react-icons/bs";
import StoreData from '../StoreData/StoreData';
import StoreArr from '../StoreData2/StoreArr';
import { margin } from '@mui/system';


 function Right_side() {
    const[search,setSearch]= useState("")
    const searchInput =(e)=>{
        setSearch(e.target.value)
    }

  return (
    <>
   
    <div className={style.display}>
        <BsSearch/>
       <Input     placeholder="  Search Twitter"  value='search' text className={style.input} />
       
    </div>
    <div>
    <div className={style.arrayItem}>
       <StoreData />
    </div>
    </div>
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
    </>
  )
}

export default Right_side