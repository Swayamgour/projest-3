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


function Profile(){
     const [userProfileInfo , setUserProfileInfo] = useState(userProfiles)
     const [newPostData,setNewPost] = useRecoilState(newlyAddedPostAtom)
     const loggedInUse = useRecoilValue(loggedInUserAtom)
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

    return(
        <>
              


            <div className={style.Main}>
    <div className={style.space}></div>
    <div className={style.LeftSide}>
     <Left_side/>
    </div>
    
    
  

    
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