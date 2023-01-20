import Form from 'react-bootstrap/Form';
import React from "react";
import {AiFillSketchCircle  } from "react-icons/ai";
import './select.css'
import { TfiTwitterAlt } from "react-icons/tfi";
import { Avatar } from '@mui/material';


function SelectBasicExample() {
    return (
      <Form.Select  className= 'select' style={{width :"15rem", marginTop:"2rem",
       borderRadius:"50px" ,
       textAlign:"center",
       border:'1px white',
       backgroundColor:"rgb(232,232,232)",
       
       
       height:"4rem"}} aria-label="Default select example">
        <option>
        <Avatar alt='akkc' src = 'https://assets.gqindia.com/photos/625e8bd9fcfaab5b0ecc5ef1/3:2/w_1620,h_1080,c_limit/MS%20Dhoni.jpeg'/>
            swayamGaur@gmail.com....
           </option>
        <option value="1">Swayam@gmail.com</option>
        <option value="2">Aman@gmail.com</option>
        <option value="3">Add Another Account</option>
      </Form.Select>
    );
  }
  
  export default SelectBasicExample;