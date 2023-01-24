import { style } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import { TfiTwitterAlt } from "react-icons/tfi";

const App = () => {
	
	
  const nevigate = useNavigate()
  const login =()=>{
    nevigate('/Login')
  }
	return (
		<>
			<div  >
				<select style={{width:"13rem", height:"2rem" , marginLeft:"2rem" , marginTop:"3rem", borderRadius:"20px"}} className={style.email} onChange={login} >

					<option>    {<TfiTwitterAlt/>}  
                     Swayam@gmail.com</option>
					<option>Log Out</option>
				</select>
        </div>
		</>
	);
};

export default App;
