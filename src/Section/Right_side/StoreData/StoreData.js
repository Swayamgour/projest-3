import { style } from '@mui/system'
import React from 'react'
// import style from './StoreData.module.css'

function StoreData() {
 const Item =[
    {
        Trending:"Indian Premier League · Trending",
        Name: "#MSDhoni",
        follwer:"2,241 Tweets"
      },
      {
        Trending:"Indian Premier League · Trending",
        Name: "#MSDhoni",
        follwer:"2,241 Tweets"
      },
      {
        Trending:"Indian Premier League · Trending",
        Name: "#MSDhoni",
        follwer:"2,241 Tweets"
      },
      {
        Trending:"Indian Premier League · Trending",
        Name: "#MSDhoni",
        follwer:"2,241 Tweets"
      },
      // {
      //   Trending:"Indian Premier League · Trending",
      //   Name: "#MSDhoni",
      //   follwer:"2,241 Tweets"
      // },
 ]

  return (
   <>
   <h2 style={{marginLeft:"30px", marginTop:"0px"}}>
        What’s happening</h2>
     
       {
        Item.map((Item)=>{
          return(
            <div className={style.arrayItam}>
             {/* <h5 style={{marginLeft:"10px", marginTop:"0px"}}>{Item.Trending}</h5> 
             <h3 style={{marginLeft:"10px", marginTop:"0px"}}>{Item.Name}</h3> 
              <h6 style={{marginLeft:"10px", marginTop:"0px"}}>{Item.follwer}</h6> */}
              <ul>
                <ol className={style.arrayItam1}>
                  {Item.Trending}
                  {Item.Name}
                  {Item.follwer}
                </ol>
              </ul>
            </div>
          )
        })
       }

   </>
  )
}

export default StoreData