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
     
     <TfiTwitterAlt className={style.tfi}/>
       
    
     
    {menuItems.map((menuItems)=>{
    return( 
    <div className={style.main}>
     <span className={style.logo}>{menuItems.icon}</span>
      <span className={style.text}>{menuItems.Name}</span>
    </div>
    )
    })}
    <div className={style.button}>
    <Button   style={{ marginRight:"1.9rem" ,width:"12rem",height:"3rem",borderRadius:"2rem",backgroundColor:"#6495ED",color:"white"}}  onClick={handleClickOpen}>
        Tweet
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
         
         <DialogActions style={{width:"40rem", height:"20rem"  }}>
           
        </DialogActions>
        
      </BootstrapDialog>
    </div>
    <div >
    <SelectBasicExample  className={style.email}/>
    </div>
 
    </>
  )
}
  

export default Left_side;