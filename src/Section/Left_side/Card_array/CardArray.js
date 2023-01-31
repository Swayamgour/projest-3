import React, { useState } from 'react'
import style from '../Card_array/CardArray.module.css';
import {BiMessageRounded} from 'react-icons/bi';
import {IoMdRepeat} from 'react-icons/io';
import {BsSuitHeart} from 'react-icons/bs';
import {BiBarChart} from 'react-icons/bi';

function CardArray() {

  const [count ,setCout] =useState(345)
  const [count1 ,setCout1] =useState(9876)
  const [count2 ,setCout2] =useState(798)
  const [count3 ,setCout3] =useState(39)
  
  function counter(){
    setCout(count +1)
  }
  function counter1(){
    setCout1(count1 +1)
  }
  function counter2(){
    setCout2(count2 +1)
  }
  function counter3(){
    setCout3(count3 +1)
  }

  return (
    <div className={style.main} >
        <div  className={style.body}>
            <img  className={style.img} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbVqw5Re2vr2uzxuTNcRzeG2ScfIi5uM3egQ&usqp=CAU' alt="Profile" />
            <h2>Narendra modi</h2>
            <h6>@Immodi</h6>
      </div>
      <div className={style.para}>
        <p>रोजगार मेले से जहां युवाओं का सशक्तिकरण हो रहा है, वहीं देश के विकास में उनकी भागीदारी भी सुनिश्चित हो रही है। इसी कड़ी में 10.30 बजे वीडियो कॉन्फ्रेंसिंग के जरिए सरकारी पदों पर चयनित करीब 71,000 युवाओं को नियुक्ति पत्र सौंपने का सौभाग्य प्राप्त होगा।</p>
      </div>
      <div>
        <img  className={style.Img2} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbVqw5Re2vr2uzxuTNcRzeG2ScfIi5uM3egQ&usqp=CAU' alt="Modi"/>
      </div>
      <div className={style.icon}>
        <button className={style.button} onClick={counter}><BiMessageRounded/><span>{count}</span> </button>
        <button className={style.button} onClick={counter1}><IoMdRepeat/><span>{count1}</span> </button>
        <button className={style.button} onClick={counter2}><BsSuitHeart/><span>{count2}</span> </button>
        <button className={style.button} onClick={counter3}><BiBarChart/><span>{count3}</span> </button>

        {/* <button className={style.follow} style={{width:"5rem", marginBottom:"12px" , height:"2rem", borderRadius:"20px"}}  onClick={handelclick}>{toogle ? "following" : "follow"}</button> */}
            {/* <button className={style.follow} style={{width:"5rem", marginBottom:"12px" , height:"2rem", borderRadius:"20px"}}  onClick={handelclick1}>{toogle1 ? "following" : "follow"}</button> */}
            {/* <button className={style.follow} style={{width:"5rem", marginBottom:"12px" , height:"2rem", borderRadius:"20px"}}  onClick={handelclick2}>{toogle2 ? "following" : "follow"}</button> */}
            {/* <button className={style.follow} style={{width:"5rem", marginBottom:"20px" , height:"2rem", borderRadius:"20px"}}  onClick={handelclick3}>{toogle3 ? "following" : "follow"}</button> */}
      
      </div>
    </div>
  )
}

export default CardArray























// import Image2 from  '../../../Assest/Image/Modi.jpeg'
