import React, { useEffect } from 'react'
import style from '../Home/Home.module.css'
import Right_side from '../Section/Right_side/Right_side/Right_side'
import Left_side from '../Section/Left_side/Left_side'
import Middle_side from '../Section/Middle_side/Middle_side'
import Profile from '../LeftSecList/Profile/Profile'
import { useRecoilValue } from 'recoil'
import { TfiTwitterAlt } from "react-icons/tfi";
import { isLoginAtom } from '../Recoil'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import { GrNotification, } from 'react-icons/gr'
import { BsPerson } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { MdBookmarkBorder } from "react-icons/md";
import { BsCardChecklist } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";
import Tweet from '../Section/Middle_side/Tweet'
import { margin } from '@mui/system'
import { SlHome  } from "react-icons/sl";





function Home() {



  const isLogin = useRecoilValue(isLoginAtom)
  const nevigate = useNavigate()
  const [open, setOpen] = React.useState(false);

 
  //  checcking if user is Loggedin OR not .
  // if loggedIn will show home page .
  //  if not will ask him to login/register .

  useEffect(() => {
    if (!isLogin) {
      nevigate('/Login')
    }
  }, [isLogin])


  const menuItems = [

    {
      id: 1,
      icon:  <span onClick={() => nevigate("/Home")}><SlHome /></span>,
     
    },
   
    
    {
      id: 4,
      icon: < FiMail />,
     
    },
   
   
    {
      id: 7,
      icon:<spam onClick={() => nevigate("/Profile")}> <BsPerson /></spam>,
     
      
    },
    {
      id: 8,
      icon: <CgMoreO />,
      
    },

  ]

  const  menuItem=[
   
    {
      id:1,
        icon: <span onClick={() => nevigate("/Home")}><HomeIcon style={{fontSize:"xx-large"}}/></span>
    //   Name: <spam  onClick={() => nevigate("/Home")}> Home</spam>,
      },
      {
      id:2,
        icon:<TagIcon  style={{fontSize:"xx-large"}}/>,
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
        icon:    <spam  onClick={() => nevigate("/Profile")}> <BsPerson/></spam>,
        // Name: <spam  onClick={() => nevigate("/Profile")}> Profile</spam>,
  
      } ,
      {
        id:8,
        icon:<CgMoreO/>,
        Name:"More",
      },
  
  ]

  const handleClose =()=>{
   setOpen(false)
  }
 
  const handeltweeticon = () => {
    setOpen(true);
  };



 

  return (
    <>
      <div className={style.Main}>
        <div className={style.space}></div>
        <div className={style.LeftSide}>
          <Left_side />
        </div>


        <div className={style.space1}>
     <TfiTwitterAlt className={style.twitterLogo}  onClick={() => nevigate("/Home")}/>
        
        {menuItem.map((icon)=>{
        return(
            <div className={style.logossss} style={{paddingTop:"2rem", fontSize:"xx-large"}}>{icon.icon}</div>
        )
        })}
          <img  width="80%" style={{borderRadius:"50%" , marginTop:"40%"}} className={style.twittlogo} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2CegLFFVM4D6mLcomEJfIgrjw3sofI8yVFw&usqp=CAU'/>

    </div>

        <div className={style.middleside}>

      
      

          <>
            <div className={style.iconsss}>
              {menuItems.map((icons) => {
                return (
                  <div style={{  fontWeight:"900"}}>{icons.icon}</div>
                )
              })}

            </div>
          </>

          <div>
          <img   onClick={handeltweeticon}className={style.twittprofilelogo} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2CegLFFVM4D6mLcomEJfIgrjw3sofI8yVFw&usqp=CAU'/>
      
     <div className={style.DialBox}>
      <Dialog 
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title"  sty>
         {<Tweet style={{width:"100%"}}/>}
        </DialogTitle>
       
      
      </Dialog>
      </div>
    </div>

    
          <Middle_side />
        </div>




        <div className={style.rightside}>
          <Right_side />
        </div>




      </div>

    </>
  )
}

export default Home