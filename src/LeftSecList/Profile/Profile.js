 import React, { Profiler, useState } from 'react'
  import style from '../Profile/Profile.module.css'
import Left_side from '../../Section/Left_side/Left_side'
 import Right_side from '../../Section/Right_side/Right_side/Right_side'
 import profile from '../../Section/Middle_side/Images/Aman.png'
 import Tweet from '../../Section/Middle_side/Tweet'
 import PostCard from '../../pages/post-card/post-card'
import Middle_side from '../../Section/Middle_side/Middle_side'
 import { userProfiles } from '../../const'
import { newlyAddedPostAtom ,loggedInUserAtom} from '../../Recoil'
import { useRecoilState, useRecoilValue } from 'recoil'
import { useEffect} from 'react'
import CardArray from '../../Section/Middle_side/Card_array/CardArray'
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
// import SelectBasicExample from '../../Section/Left_side/SelectBasicExample
import { HiPhotograph,HiChat } from "react-icons/hi";
import { BsEmojiSmile ,BsFillChatTextFill ,BsApple } from "react-icons/bs";
import { useNavigate } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home'; 
// import style from './Lift_side.module.css'
import TagIcon from '@mui/icons-material/Tag';
import { SlHome  } from "react-icons/sl";

// import { useNavigate } from 'react-router-dom';
// import Tweet from '../Middle_side/Tweet';


function Profile(){
     const [userProfileInfo , setUserProfileInfo] = useState(userProfiles)
     const [newPostData,setNewPost] = useRecoilState(newlyAddedPostAtom)
     const loggedInUse = useRecoilValue(loggedInUserAtom)

     const nevigate=useNavigate()
      console.log(newPostData)

    useEffect( () => {
        if(!newPostData) return
        const updatedPostsData = JSON.parse(JSON.stringify(userProfileInfo))

        updatedPostsData.forEach(post => {
            if(post.id === loggedInUse.id){
                if(post.tweets){
                    post.tweets.unshift(
                        newPostData
                    )
                    return
                }
                post.tweets = [
                    newPostData
                ]
            }
        })
        setNewPost(null)
        setUserProfileInfo(updatedPostsData)
    },[newPostData])

    useEffect (() => {
        if(!loggedInUse) return

        const postDetailsCopy = JSON.parse(JSON.stringify(userProfileInfo))
        const existinguserIndex = postDetailsCopy.findIndex(post => post.id == loggedInUse.id)
        if(existinguserIndex != -1){
            postDetailsCopy.splice(existinguserIndex,1)
        }
        setUserProfileInfo([
            loggedInUse,
            ...postDetailsCopy
        ])
    },[loggedInUse])

    const menuItem = [

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

    const  menuItems=[
   
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
            icon:<BsPerson/>,
            Name: <spam  onClick={() => nevigate("/Profile")}> Profile</spam>,
      
          } ,
          {
            id:8,
            icon:<CgMoreO/>,
            Name:"More",
          },
      
      ]
       

    return(
        <>
              


            <div className={style.Main}>
    <div className={style.space1}></div>
    <div className={style.LeftSide}>
     <Left_side/>
    </div>
    
    <div className={style.space}>
     <TfiTwitterAlt className={style.twitterLogo}  onClick={() => nevigate("/Home")}/>
        
        {menuItems.map((icon)=>{
        return(
            <div style={{paddingTop:"2rem", fontSize:"xx-large"}}>{icon.icon}</div>
        )
        })}
          <img    className={style.twittlogo} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2CegLFFVM4D6mLcomEJfIgrjw3sofI8yVFw&usqp=CAU'/>

    </div>
  
    <>
            <div className={style.iconsss}>
              {menuItem.map((icons) => {
                return (
                  <div style={{  fontWeight:"900"}}>{icons.icon}</div>
                )
              })}

            </div>
          </>
    
            <div className={style.middleside}>

           

            {/* <div className={style.middleside}> */}
                <div className={style.cover}></div>
                <div className={style.userprofile}>
                    <div className={style.useractions}>
                        <div className={style.avatar}><img
                        width="94px" height="90px"
                        src={profile}
                        style={{borderRadius:"100%"}}
                        ></img></div>
                       
                    </div>
                    <div className={style.displayname}>
                        <b>Swayam Gaur</b>
                        <span>☑</span>
                    </div>
                    <div className={style.username}>
                        @nytimes
                    </div>
                    <div className={style.description}>
                         <span>News tips? Share them here: </span>
                    </div>
                    <div>
                    <section className={style.postWrapper}>
           
                     <div className={style.postsWrapper}>
                <Tweet />
                {userProfileInfo.map((userProfileInfo) => (
                    <CardArray
                        userProfileInfo = {userProfileInfo}
                    />
                ))}
            </div>

        </section>
                    </div>
                </div>
            </div>
            <div>
                
                {/* </div> */}
                </div>

            <div className={style.rightside}>
       <Right_side />
    </div>
            </div>
        </>
    )
}
export default  Profile







// import React, { useEffect } from 'react'
// import style from '../../Home/Home.module.css'
// import Right_side from '../Section/Right_side/Right_side/Right_side'
// import Left_side from '../Section/Left_side/Left_side'
// import Middle_side from '../Section/Middle_side/Middle_side'
// import Profile from '../LeftSecList/Profile/Profile'
// import { useRecoilValue } from 'recoil'


// import { isLoginAtom } from '../../Recoil'
// import { useNavigate } from 'react-router-dom'
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogTitle from '@mui/material/DialogTitle';
// import HomeIcon from '@mui/icons-material/Home';
// import TagIcon from '@mui/icons-material/Tag';
// import { GrNotification, } from 'react-icons/gr'
// import { BsPerson } from "react-icons/bs";
// import { FiMail } from "react-icons/fi";
// import { MdBookmarkBorder } from "react-icons/md";
// import { BsCardChecklist } from "react-icons/bs";
// import { CgMoreO } from "react-icons/cg";
// // import Tweet from '../Section/Middle_side/Tweet'
// import { margin } from '@mui/system'
// import { SlHome  } from "react-icons/sl";





// function Home() {



//   const isLogin = useRecoilValue(isLoginAtom)
//   const nevigate = useNavigate()
//   const [open, setOpen] = React.useState(false);

 
  

//   useEffect(() => {
//     if (!isLogin) {
//       nevigate('/Login')
//     }
//   }, [isLogin])


//   const menuItems = [

//     {
//       id: 1,
//       icon:  <span onClick={() => nevigate("/Home")}><SlHome /></span>,
     
//     },
   
    
//     {
//       id: 4,
//       icon: < FiMail />,
     
//     },
   
   
//     {
//       id: 7,
//       icon:<spam onClick={() => nevigate("/Profile")}> <BsPerson /></spam>,
     
      
//     },
//     {
//       id: 8,
//       icon: <CgMoreO />,
      
//     },

//   ]

//   const handleClose =()=>{
//    setOpen(false)
//   }
 
//   const handeltweeticon = () => {
//     setOpen(true);
//   };



 

//   return (
//     <>
//       <div className={style.Main}>
//         <div className={style.space}></div>
//         <div className={style.LeftSide}>
//           <Left_side />
//         </div>


//         <div className={style.middleside}>

//                <div className={style.cover}></div>
//                 <div className={style.userprofile}>
//                     <div className={style.useractions}>
//                        <div className={style.avatar}><img
//                        width="94px" height="90px"
//                         src={profile}
//                         style={{borderRadius:"100%"}}
//                        ></img></div>
                       
//                   </div>
//                   <div className={style.displayname}>
//                       <b>Swayam Gaur</b>
//                       <span>☑</span>
//                   </div>
//                   <div className={style.username}>
//                       @nytimes
//                   </div>
//                   <div className={style.description}>
//                        <span>News tips? Share them here: </span>
//                   </div>
//       </div>


//           <>
//             <div className={style.iconsss}>
//               {menuItems.map((icons) => {
//                 return (
//                   <div style={{  fontWeight:"900"}}>{icons.icon}</div>
//                 )
//               })}

//             </div>
//           </>

//           <div>
//           <img   onClick={handeltweeticon}className={style.twittlogo} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2CegLFFVM4D6mLcomEJfIgrjw3sofI8yVFw&usqp=CAU'/>
      
//      <div className={style.DialBox}>
//       <Dialog 
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//       >
//         <DialogTitle id="alert-dialog-title"  sty>
//          {<Tweet style={{width:"100%"}}/>}
//         </DialogTitle>
       
      
//       </Dialog>
//       </div>
//     </div>

    
          
//         </div>




//         <div className={style.rightside}>
//           <Right_side />
//         </div>




//       </div>

//     </>
//   )
// }

// export default Home