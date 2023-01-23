import { style } from '@mui/system'
import React from 'react'

function StoreData() {
  const img = <img style={{width:'15px',height:'15px'}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/1200px-Twitter_Verified_Badge.svg.png'/>

 const Item =[
    {
        Trending:"Indian Premier League · Trending",
        Name: "#MSDhoni",
        threedot:"img",
        follwer:"2,241 Tweets"
      },
      {
        Trending:"Indian Premier League · Trending",
        Name: "#Ronaldo",
        follwer:"2,241 Tweets"
      },
      {
        Trending:"Indian Premier League · Trending",
        Name: "#N_Modi",
        follwer:"2,241 Tweets"
      },
      {
        Trending:"Indian Premier League · Trending",
        Name: "#ViratKholi",
        follwer:"2,241 Tweets"
      },
      {
        Trending:"Indian Premier League · Trending",
        Name: "#MSDhoni",
        follwer:"2,241 Tweets"
      },
 ]

  return (
   <>
   <div className={style.position}>
   <div style={{marginTop:"3.5rem"}}>
   <h2 style={{marginLeft:"30px", marginTop:"0px"}}>
        What’s happening</h2>
     
       {
        Item.map((Item)=>{
          return(
            <div style={{backgroundColor:'rgb(240,240,240)'}}>
                 <div style={{marginLeft:"15px", marginTop:"0px", fontWeight:400 ,     fontfamily: "Twitter",
                   }}> {Item.Trending}</div>
                 <div style={{marginLeft:"15px", marginTop: "0px" , fontWeight:700}}>{Item.Name} {Item.img}</div>
                  <div style={{marginLeft:"15px", marginTop:"0px",fontWeight:200}}>{Item.follwer}</div>
                
            </div>
            
            )
          })
        }
        <h4 style={{marginLeft:"15px", marginTop:"2px" , color:"rgb(29, 155, 240)"}}>Show more</h4>
        </div>
        </div>
   </>
  )
}

export default StoreData