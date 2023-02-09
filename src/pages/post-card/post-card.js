import style from './post-card.module.css'
import profile from '../../Section/Middle_side/Images/Aman.png'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FooterIcons from '../../Home/footer-icon/footer-icon';
import { Fragment } from 'react';
import { userProfiles } from '../../const'
import { newlyAddedPostAtom ,loggedInUserAtom } from '../../Recoil'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
 import {userProfileInfos} from '../../Recoil'
 import {forPassingid} from '../../Recoil'

export default function PostCard({userProfileInfo}) {
    const navigate = useNavigate()
    const [newProfile, setNewProfile] = useRecoilState(userProfileInfos);
    const setId = useSetRecoilState(forPassingid)

   console.log(setId , "i am ")
    const {
        name = '',
        handlerName = '',
        organization = '',
        tweets = [],
        profilePic 
    } = userProfileInfo || {}

    if(!tweets.length){    
        return null
    }


    // const picClick=()=>{
        function picClick(dataName) {
           console.log(newProfile)
           console.log(dataName , "i am  clkick")
            setNewProfile(dataName);
            const paramsValue = dataName.handlerName.replace("@", "");
            // alert("hello")
            navigate(`/Profile2/${paramsValue}`);
             setId(dataName);
          }
        // navigate('/Profile2')
    

    return (
        <Fragment>
        { 
          userProfiles?.map((tweet,i) => (

            <div className={style.wrapper}>

            <div className={style.cardWrapper}>
                <img
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
                        <p>{tweet.tweets[0].tweetText}</p>
                        <img  style={{width:"25vw", height:"50vh"}} src={tweet.tweets[0].tweetPic} alt="propfile pic" />
                        <p>{organization}</p>
                    </Fragment>
                </p>
            { tweet.refRenceLink && <a
                    href='https://www.google.com' 
                    style={{ textDecoration: 'none' }} 
                    target='_blank'>
                    https://www.google.com
                </a>}
            </div>

            <div className={style.hashtags}>
                {  [...tweet.hastags? [tweet.hastags] : []].map(tag => (
                    <span>{tag}</span>
                ))}
            </div>

            {tweet.tweetPic && <div
                className={style.tweetPic}
            >
                <img
                    src = {tweet.tweetPic}
                    height='100%'
                    width='100%'
                />
            </div>}

            <FooterIcons  
                data = {tweet}
            />
        </div>

        ))
        }

        </Fragment>

    )
}