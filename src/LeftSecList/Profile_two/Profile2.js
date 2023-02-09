import React, { Profiler, useState } from 'react'
import style from '../Profile/Profile.module.css'
import Left_side from '../../Section/Left_side/Left_side'
import Right_side from '../../Section/Right_side/Right_side/Right_side'
import profile from '../../Section/Middle_side/Images/Aman.png'
import Tweet from '../../Section/Middle_side/Tweet'
import PostCard from '../../pages/post-card/post-card'
import Middle_side from '../../Section/Middle_side/Middle_side'
import { userProfiles } from '../../const'
import { newlyAddedPostAtom, loggedInUserAtom } from '../../Recoil'
import { useRecoilState, useRecoilValue } from 'recoil'
import { useEffect } from 'react'
import CardArray from '../../Section/Middle_side/Card_array/CardArray'
import { forPassingid } from '../../Recoil'


function Profile2() {
    const [userProfileInfo, setUserProfileInfo] = useState(userProfiles)
    const [newPostData, setNewPost] = useRecoilState(newlyAddedPostAtom)
    const loggedInUse = useRecoilValue(loggedInUserAtom)
    const profileInfo = useRecoilValue(forPassingid)
    console.log(newPostData)



    return (
        <>



            <div className={style.Main}>
                <div className={style.space}></div>
                <div className={style.LeftSide}>
                    <Left_side />
                </div>





                <div className={style.middleside}>
                    {/* <div className={style.middleside}> */}
                    <div className={style.cover}></div>
                    <div className={style.userprofile}>
                        <div className={style.useractions}>
                            <div className={style.avatar}><img
                                width="94px" height="90px"
                                src={profileInfo.tweets[0].profilePic} alt='nscjk'
                                style={{ borderRadius: "100%" }}
                            ></img></div>

                        </div>
                        <div className={style.displayname}>
                            <b>{profileInfo.name}</b>
                            <span>☑</span>
                        </div>
                        <div className={style.username}>
                            {profileInfo.handlerName}
                        </div>
                        <div className={style.description}>
                            <span>News tips? Share them here: </span>
                        </div>
                        <p>{profileInfo.tweets[0].tweetText}</p>
                        <div>
                            <section className={style.postWrapper}>
                                <img style={{ width: "35vw", height: "70vh", padding: "5rem" }} src={profileInfo.tweets[0].tweetPic} />
                                <div className={style.wrapper}>
                                   <span style={{marginRight:"3rem"}}> {profileInfo.tweets[0].tweetCount}   </span>
                                   <span  style={{marginRight:"4rem"}}> {profileInfo.tweets[0].retweetCount}</span>
                                   <span  style={{marginRight:"5rem"}}>{profileInfo.tweets[0].likesCount}</span>
                                   <span  style={{marginRight:"3rem"}}> {profileInfo.tweets[0].viewsCount}</span>
                                    {/* <span>{profileInfo.followers}</span>   */}
                                    {/* {profileInfo.followings} */}
                                    {/* {profileInfo.profilePic} */}

                                    {/* <div className={style.cardWrapper}>
                  <       img
        src={tweet.profilePic || profile}
        className={style.imgWrapper}

                    onClick={()=>picClick({
                        name: tweet.name,
                        handlerName: tweet.handlerName,
                        organization: tweet.organization,
                        tweetText: tweet.tweetText,
                        tweetPic: tweet.tweetPic,
                        tweetCount: tweet.tweetCount,
                        retweetCount: tweet.retweetCount,
                        likesCount: tweet.likesCount,
                        viewsCount: tweet.viewsCount,
                        followers: tweet.followers,
                        followings: tweet.followings,
                        tweets: tweet.tweets,
                        index: i,
                    })} />
    <div className={style.nameWrapper}>
        <p className={style.name}>{tweet.name}</p>
        <p className={style.name}>{tweet.handlerName}</p>
    </div>
    <MoreHorizIcon
        className={style.moreIcon}
    />
</div>

<div className={style.container}>
    <p className={style.tweetText}>
        <Fragment>
            <img src={tweet.tweets[0].tweetPic} alt="propfile pic" />
            <p>{organization}</p>
        </Fragment>
    </p>
           
                      */}
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
export default Profile2