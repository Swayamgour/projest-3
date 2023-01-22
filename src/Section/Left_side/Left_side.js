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
// import CardArray from './Card_array/CardArray';

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
  

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const  menuItems=[
   
  {
      icon:<HomeIcon/>,
      Name: "Home",
    },
    {
      icon:<TagIcon/>,
      Name:"Explore",
    },
    {
      icon:< GrNotification/>,
      Name:"Notification",
    },
    {
      icon:< FiMail />,
      Name:"Messages ",
    },
    {
      icon:<MdBookmarkBorder/>,
      Name:"Bookmarks",
    },
    {
      icon:< BsCardChecklist />,
      Name:"List",
    },
    {
      icon:<BsPerson/>,
      Name:"Profile",
    } ,
    {
      icon:<CgMoreO/>,
      Name:"More",
    },

]
  return (
    <> 
     <div className={style.position}>
     <TfiTwitterAlt className={style.twitterLogo}/>
       
    
     
    {menuItems.map((menuItems)=>{
    return( 
    <div className={style.main}>
     <span className={style.logo}>{menuItems.icon}</span>
      <span className={style.text}>{menuItems.Name}</span>
    </div>
    )
    })}
    <div className={style.button}>
    <Button  className={style.main1}  style={{ marginRight:"1.9rem" ,width:"12rem",height:"3rem",borderRadius:"2rem",backgroundColor:"#6495ED",color:"white"}}  onClick={handleClickOpen}>
        Tweet
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
         
         <DialogActions style={{width:'25rem', height:'16rem'}} >
        <div className={style.profile}>
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
             
     
       </div>
        </DialogActions>
        
      </BootstrapDialog>
    </div>
    <div >
    <SelectBasicExample  className={style.email}/>
    </div>
    </div>
 
    </>
  )
}
  

export default Left_side;