import Form from 'react-bootstrap/Form';
import React from "react";
import {AiFillSketchCircle  } from "react-icons/ai";
import './select.css'
import { TfiTwitterAlt } from "react-icons/tfi";


function SelectBasicExample() {
    return (
      <Form.Select  className= 'select' style={{width :"15rem", marginTop:"2rem",
       borderRadius:"50px" ,
       textAlign:"center",
       border:'1px white',
       
       
       height:"4rem"}} aria-label="Default select example">
        <option> <TfiTwitterAlt />
            swayamGaur@gmail.com....
           </option>
        <option value="1">Swayam@gmail.com</option>
        <option value="2">Aman@gmail.com</option>
        <option value="3">Add Another Account</option>
      </Form.Select>
    );
  }
  
  export default SelectBasicExample;