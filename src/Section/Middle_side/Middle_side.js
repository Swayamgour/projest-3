import style from './Middle_side.module.css'
import Tweet from './Tweet'
import PostCard from "../../pages/post-card/post-card"
import { userProfiles } from '../../const'
import { newlyAddedPostAtom ,loggedInUserAtom} from '../../Recoil'
import { useRecoilState, useRecoilValue } from 'recoil'
import { useEffect, useState } from 'react'

export default function Posts () {
    const [userProfileInfo , setUserProfileInfo] = useState(userProfiles)
    const [newPostData,setNewPost] = useRecoilState(newlyAddedPostAtom)
    const loggedInUse = useRecoilValue(loggedInUserAtom)

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


 const handelopen =()=>{
    alert("hello")
 }


    
    return(
        <section className={style.postWrapper}>
            <header className={style.header1}>
                <p className={style.heading}>
                    <span  className={style.home}>Home</span>
                    <span className={style.hii} onClick={handelopen}><img className={style.profilelogo} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUncw5PB5syw9BIoymTrwyOjAqRlTZC1Rkew&usqp=CAU' alt='helo'/></span></p>
                <div className={style.headerOptionWrapper}>
                    <p style={{marginRight:"0rem"}} className={style.foryou}>For You</p>
                   <p  className={style.foryou}>Following</p> 
                </div>
            </header>

            <div className={style.postsWrapper}>
                <Tweet />
                {userProfileInfo.map((userProfileInfo) => (
                    <PostCard
                        userProfileInfo = {userProfileInfo}
                    />
                ))}
            </div>
            

        </section>
    )
}