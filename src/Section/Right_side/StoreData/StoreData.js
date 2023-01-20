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
   <h2 style={{marginLeft:"30px", marginTop:"0px"}}>
        What’s happening</h2>
     
       {
        Item.map((Item)=>{
          return(
            <div style={{backgroundColor:'rgb(240,240,240)'}}>
             {/* <h5 style={{marginLeft:"10px", marginTop:"0px"}}>{Item.Trending}</h5> 
             <h3 style={{marginLeft:"10px", marginTop:"0px"}}>{Item.Name}</h3> 
              <h6 style={{marginLeft:"10px", marginTop:"0px"}}>{Item.follwer}</h6> */}
             
                
                 <div style={{marginLeft:"15px", marginTop:"0px", fontWeight:400 ,     fontfamily: "Twitter",
                   }}> {Item.Trending}</div>
                 <div style={{marginLeft:"15px", marginTop: "0px" , fontWeight:700}}>{Item.Name}</div>
                  <div style={{marginLeft:"15px", marginTop:"0px",fontWeight:200}}>{Item.follwer}</div>
                
            </div>
            
            )
          })
        }
        <h4 style={{marginLeft:"15px", marginTop:"2px" , color:"rgb(29, 155, 240)"}}>Show more</h4>

   </>
  )
}

export default StoreData