import React from 'react'
import style from '../Card_array/CardArray.module.css';

function CardArray() {
  return (
    <div className={style.card}>
      <img style={{width:'3rem',height:'3rem' ,padding:'.3rem', borderRadius:"50%" }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7egMR33OazQTuQOuH0Lrs8C8FKnIDHvOpww&usqp=CAU'></img>
     <span className={style.h4}>Lukesh Saini <br/>
     Predict Virat Kholi score in 2nd ODI with one will get 2000Ru. Paytm.</span>
     <br/>
     <img style={{width:'20rem',height:'13rem' ,paddingLeft:'5rem', borderRadius:"10px" }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbRXccWzi-m7602NA4qAZWmMv6PxOBQuD-8A&usqp=CAU'/>
    
  </div>
  )
}

export default CardArray