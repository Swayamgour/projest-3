import React from 'react'
import HomeIcon from '@mui/icons-material/Home'; 
import style from './Lift_side.module.css'
import TagIcon from '@mui/icons-material/Tag';
import {  GrNotification, } from 'react-icons/gr'
import {BsPerson} from "react-icons/bs";
import { FiMail} from "react-icons/fi";
import { MdBookmarkBorder} from "react-icons/md";
import {BsCardChecklist } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';   
import DialogActions from '@mui/material/DialogActions';
import { TfiTwitterAlt } from "react-icons/tfi";
import SelectBasicExample from './SelectBasicExample'
import { HiPhotograph,HiChat } from "react-icons/hi";
import { BsEmojiSmile ,BsFillChatTextFill ,BsApple } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import Tweet from '../Middle_side/Tweet';

  function Left_side() {
  const [open, setOpen] = React.useState(false);
  
  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));
   const nevigate = useNavigate()
  const login =()=>{
    nevigate('/Profile')
  }
  

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const  menuItems=[
   
  {
    id:1,
      icon:<HomeIcon/>,
    Name: <spam  onClick={() => nevigate("/Home")}> Home</spam>,
    },
    {
    id:2,
      icon:<TagIcon/>,
      Name:"Explore",
    },
    { 
    id:3,
      icon:< GrNotification/>,
      Name:"Notification",
    },
    {
      id:4,
      icon:< FiMail />,
      Name:"Messages ",
    },
    {
      id:5,
      icon:<MdBookmarkBorder/>,
      Name:"Bookmarks",
    },
    {
      id:6,
      icon:< BsCardChecklist />,
      Name:"List",
    },
    {
      id:7,
      icon:<BsPerson/>,
      Name: <spam  onClick={() => nevigate("/Profile")}> Profile</spam>,

    } ,
    {
      id:8,
      icon:<CgMoreO/>,
      Name:"More",
    },

]
  return (
    <> 
     <div className={style.position}>
     <TfiTwitterAlt className={style.twitterLogo}  onClick={() => nevigate("/Home")}/>
       
    
     
    {menuItems.map((menuItems)=>{
    return( 
    <div className={style.main} >
  
     <span className={style.logo}  >{menuItems.icon}</span>
      <span className={style.text} >{menuItems.Name}</span>
    </div>
    )
    })}
    <div className={style.button}>
    <Button  style={{ marginLeft:"1.7rem" ,width:"30%",height:"25%",borderRadius:"2rem",backgroundColor:"#6495ED",color:"white"}}  onClick={handleClickOpen}>
        Tweet
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
         
         <DialogActions style={{width:'100%', height:'16rem'}} >
        {/* <div className={style.profile}>
         <img style={{width:'3rem',height:'3rem' ,padding:'.3rem', borderRadius:"50%" }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxI8k6VYzsB5fNKN-6mrFfvNgoDQkWppXR4Q&usqp=CAU'></img>
       <input className={style.input} placeholder='what,s happening?'/> 
        </div> 
       <div className={style.profile1}>
        
        <HiPhotograph className={style.logo2}/>
       <HiChat className={style.logo1}/>
       <BsEmojiSmile className={style.logo1}/>
       <BsFillChatTextFill className={style.logo1}/>
       <BsApple className={style.logo1}/>
       <button className={style.butten}>Tweet</button>
             
     
       </div> */}
       <Tweet  style={{width:"100%" , height:"20vh"}} />
        </DialogActions>
        
      </BootstrapDialog>
    </div>
    <div className={style.profilediv} >
    <SelectBasicExample  className={style.email}/>
    </div>
    </div>
 
    </>
  )
}
  

export default Left_side;