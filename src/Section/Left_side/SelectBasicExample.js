import React from "react";
import { useNavigate } from "react-router-dom";

const App = () => {
	const options = ['One', 'Two', 'Three', 'Four', 'Five'];
	const onOptionChangeHandler = (event) => {
		console.log("User Selected Value - ", event.target.value)
	}
  const nevigate = useNavigate()
  const login =()=>{
    nevigate('/Login')
  }
	return (
		<>
			
				<select  onChange={login} >

					<option>Swayam@gmail.com</option>
					<option>Log Out</option>
				</select>
		</>
	);
};

export default App;
