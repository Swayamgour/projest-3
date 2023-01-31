import { style } from "@mui/system";
import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { TfiTwitterAlt } from "react-icons/tfi";
import { useRecoilValue } from "recoil";
import { isLoginAtom } from "../../Recoil";


function Home() {
    // const isUserLoggedIn = useRecoilValue(isLoginAtom);
      const nevigate = useNavigate();
    // // //  const login=()=>
    // useEffect(() => {
    //  if (!isUserLoggedIn) {
    //    nevigate("/Login");
    //  }
    // });
	const handelclick=()=>{
		nevigate("/Login");
	}

	return (
		<>
			<div  >
				<select style={{width:"13rem", height:"2rem" , marginLeft:"2rem" , marginTop:"3rem", borderRadius:"20px"}} className={style.email}  >

					<option>    
                     Swayam@gmail.com</option>
					<option onClick={handelclick}>Log Out</option>
				</select>
        </div>
		</>
	);
};

export default Home;
