import style from './Middle_side.module.css'
import Tweet from './Tweet'
import PostCard from "../../pages/post-card/post-card"
import { userProfiles } from '../../const'
import { newlyAddedPostAtom, loggedInUserAtom } from '../../Recoil'
import { useRecoilState, useRecoilValue } from 'recoil'
import React, { useEffect, useState } from 'react'
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import TwitterIcon from "@mui/icons-material/Twitter";
import TopicIcon from "@mui/icons-material/Topic";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";

export default function Posts() {
    const [userProfileInfo, setUserProfileInfo] = useState(userProfiles)
    const [newPostData, setNewPost] = useRecoilState(newlyAddedPostAtom)
    const loggedInUse = useRecoilValue(loggedInUserAtom)
    const [state, setState] = React.useState({
        left: false

    });

    useEffect(() => {
        if (!newPostData) return
        const updatedPostsData = JSON.parse(JSON.stringify(userProfileInfo))

        updatedPostsData.forEach(post => {
            if (post.id === loggedInUse.id) {
                if (post.tweets) {
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
    }, [newPostData])

    useEffect(() => {
        if (!loggedInUse) return

        const postDetailsCopy = JSON.parse(JSON.stringify(userProfileInfo))
        const existinguserIndex = postDetailsCopy.findIndex(post => post.id == loggedInUse.id)
        if (existinguserIndex != -1) {
            postDetailsCopy.splice(existinguserIndex, 1)
        }
        setUserProfileInfo([
            loggedInUse,
            ...postDetailsCopy
        ])
    }, [loggedInUse])


    //  const handelopen =()=>{
    //     alert("hello")
    //  }


    const item = [
        { icon: <PermIdentityIcon />, name: "Profile" },
        { icon: <TwitterIcon />, name: "Twitter" },
        { icon: <TopicIcon />, name: "Topics" },
        { icon: <BookmarkBorderIcon />, name: "Books" },
        { icon: <ListAltIcon />, name: "Lists" }
    ];
    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            {item.map((data, index) => (
                <div style={{ display: "flex",
                 justifyContent: "space-evenly"
                 ,fontWeight:"900",
                 fontSize:"9x-large",
                 padding:'2rem'
                  }}>
                   <span style={{fontWeight:"1500",
                 fontSize:"xx-large"}}> {data.icon}</span> <span>{data.name}</span>
                </div>
            ))}
        </Box>
    );



    return (
        <section className={style.postWrapper}>
            <header className={style.header1}>
                <p className={style.heading}>
                    <span className={style.home}>Home</span>
                    {/* <span className={style.hii} onClick={toggleDrawer}><img className={style.profilelogo} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUncw5PB5syw9BIoymTrwyOjAqRlTZC1Rkew&usqp=CAU' alt='helo'/></span> */}

                    <span className={style.hii}> <div>
                       
                        {["left"].map((anchor) => (
                            <React.Fragment key={anchor}>
                                <img className={style.profilelogo} onClick={toggleDrawer(anchor,true)} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUncw5PB5syw9BIoymTrwyOjAqRlTZC1Rkew&usqp=CAU' alt='helo'/>
                                <Drawer
                                
                                    anchor={anchor}
                                    open={state[anchor]}
                                    onClose={toggleDrawer(anchor, false)}
                                >

                                     <span><img className={style.profilelogoone}src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUncw5PB5syw9BIoymTrwyOjAqRlTZC1Rkew&usqp=CAU' alt='helo'/></span>
                                     <span style={{marginLeft:"2rem" , fontWeight:"900"}}><h2 style={{marginLeft:"0rem" , fontWeight:"900"}}>Swayam Gaur</h2><h2>Gour@gmail.com</h2></span>
                                    {list(anchor)} 
                                   
                                </Drawer>
                            </React.Fragment>
                        ))}
                    </div></span>
                </p>
                <div className={style.headerOptionWrapper}>
                    <p style={{ marginRight: "0rem" }} className={style.foryou}>For You</p>
                    <p className={style.foryou}>Following</p>
                </div>
            </header>

            <div className={style.postsWrapper}>
                <Tweet />
                {userProfileInfo.map((userProfileInfo) => (
                    <PostCard
                        userProfileInfo={userProfileInfo}
                    />
                ))}
            </div>


        </section>
    )
}