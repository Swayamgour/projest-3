// import { style } from "@mui/system";
// import React,{useEffect} from "react";
// import { useNavigate } from "react-router-dom";
// import { TfiTwitterAlt } from "react-icons/tfi";
// import { useRecoilValue } from "recoil";
// import { isLoginAtom } from "../../Recoil";


// function Home() {
// const isUserLoggedIn = useRecoilValue(isLoginAtom);
//   const nevigate = useNavigate();
// // //  const login=()=>
// useEffect(() => {
//  if (!isUserLoggedIn) {
//    nevigate("/Login");
//  }
// });
// const handelclick=()=>{
// 	nevigate("/Login");
// }

// 	

import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './select.css'
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { useRecoilValue } from "recoil";

import { isLoginAtom } from "../../Recoil";
import profile from '../Middle_side/Images/Aman.png'



export default function BasicSelect() {
	const [age, setAge] = React.useState('');

	const handleChange = (event) => {
		setAge(event.target.value);
	};
	const isUserLoggedIn = useRecoilValue(isLoginAtom);
	const [isLog, setIsLog] = useRecoilState(isLoginAtom);


	const nevigate = useNavigate();
	const logout = () => {

		setIsLog(false);
		alert("log out successfully ✅")
		nevigate('/Login')

	}
	return (
		<div className='logout'>
			<Box sx={{ minWidth: 12, outline: "none" }}>
				<FormControl fullWidth>
					<div style={{
						display: "flex"
						, textAlign: "center",
						borderRadius: "20px",
						outline:"none",
						border:"none"

					}}><InputLabel id="demo-simple-select-label"><img width="30px"
						height="30px"
						style={{ borderReadies: "20px" ,outline:"none",
						border:"none"}}
						src={profile} /> SwayamGaur</InputLabel></div>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={age}
						label="SwayamGaur@gmail.com"
						onChange={handleChange}
					>
						<MenuItem value={10}>SwayamGaur@gmail.com</MenuItem>
						<MenuItem onClick={logout} value={20}><button style={{ outline: "none", border: 'none' }} >Log Out</button></MenuItem>
					</Select>
				</FormControl>
			</Box>
		</div>
	);
}
