// import { style } from '@mui/system'
// import React, { useState } from 'react'
// import { BsThreeDots } from "react-icons/bs";

// function StoreData() {

//   const Item = [
//     {
//       id:1,
//       Trending: "Indian Premier League · Trending",
//       Name: "#MSDhoni",
//       threedot: "img",
//       follwer: "2,241 Tweets"
//     },
//     {
//       id:2,
//       Trending: "Indian Premier League · Trending",
//       Name: "#MSDhoni",
//       follwer: "2,241 Tweets"
//     },
//     {
      
//       id:3,

//       Trending: "Indian Premier League · Trending",
//       Name: "#MSDhoni",
//       follwer: "2,241 Tweets"
//     },
//     {
//       id:4,

//       Trending: "Indian Premier League · Trending",
//       Name: "#MSDhoni",
//       follwer: "2,241 Tweets"
//     },

//   ]

//   const [data, setData] = useState(false);

//   const [Items, setItems] = useState(Item);
//   const img = <img style={{ width: '15px', height: '15px' }} src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/1200px-Twitter_Verified_Badge.svg.png' />


//   const handelclick = () => {
//     setData(true)
//     alert("pleasee")
//   }

 

//   const handleSelect = (option)=>{
//     const filteredItems = Items.filter((data)=>data.id!=option.id);

//     setItems(filteredItems);
//   }

//   return (
//     <>
//       <div className={style.position}>
//         <div style={{ marginTop: "3.5rem" }}>
//           <h2 style={{ marginLeft: "30px", marginTop: "0px" }}>
//             What’s happening</h2>

//           {
//             Items.map((Item) => {
//               return (
//                 <div style={{ backgroundColor: 'rgb(240,240,240)' }}>
//                   <div style={{
//                     marginLeft: "15px", marginTop: "0px", fontWeight: 400, fontfamily: "Twitter",
//                   }}> {Item.Trending}</div>
//                   <div style={{ marginLeft: "15px", marginTop: "0px", fontWeight: 700 }}>{Item.Name} {Item.img}

//                     {data?
//                     <select  onClick={handleSelect}style={{ width: "5rem", height: "2rem", marginLeft: "2rem", marginTop: "3rem", borderRadius: "20px" }} className={style.email}  >

//                       <option>   
//                         not interested</option>
//                       <option>Log Out</option>
//                     </select>
//                     :null}


//                     {!data?<button onClick={handelclick}><BsThreeDots style={{ marginLeft: '10rem' }} /></button>:null}
//                     </div>
//                   <div style={{ marginLeft: "15px", marginTop: "0px", fontWeight: 200 }}>{Item.follwer}</div>

//                 </div>

//               )
//             })
//           }
//           <h4 style={{ marginLeft: "15px", marginTop: "2px", color: "rgb(29, 155, 240)" }}>Show more</h4>
//         </div>
//       </div>
//     </>
//   )
// }

// export default StoreData



import React from "react";
import { useState } from "react";
import style from "./StoreData.module.css";

import Dialog2 from "../StoreData/DialogBox2";

const Trends = () => {
  const [isNotIntrested, setIsNotIntrested] = useState([
    {
      id: 1,
      isNotIntrested: false,
      country: "Trending in India",
      keyword: "#Ms Dhoni",
      totalKeywords: "8000k Tweets",
    },
    {
      id: 2,
      isNotIntrested: false,
      country: "Trending in India",
      keyword: "#Virat kohli",
      totalKeywords: "6000k Tweets",
    },
    {
      id: 3,
      isNotIntrested: false,
      country: "Trending in Sports",
      keyword: "#RohitSharma",
      totalKeywords: "2560k Tweets",
    },
    {
      id: 4,
      isNotIntrested: true,
      country: "Trending in Sports",
      keyword: "#ViratKohli",
      totalKeywords: "2000k Tweets",
    },
    {
      id: 5,
      isNotIntrested: false,
      country: "Trending in Sports",
      keyword: "#sachin",
      totalKeywords: "2000k Tweets",
    },
  ]);
  const [selectedId, setSelectedId] = useState(null);
  const updateId = (id) => setSelectedId(id);
  const HandleClick = () => {
    const tempArr = [];

    isNotIntrested.forEach((x) => {
      if (x.id !== selectedId) {
        tempArr.push(x);
      }
    });

    console.log("temp arr ", tempArr);
    setIsNotIntrested(tempArr);
  };

  return (
    <div className={style.keywords}>
      <div className={style.key}>
        <div className={style.keyword__heading}>
          <h4 className={style.heading4}>What's happening</h4>
        </div>
        {isNotIntrested.map((keyword) => {
          return (
            <div
              className={style.container}
              onClick={() => {
                updateId(keyword.id);
              }}
            >
              <div key={keyword.id}>
                <div className={style.country}>{keyword.country}</div>
                <div className={style.keyword__name}>
                  <strong>{keyword.keyword}</strong>
                </div>
                <div className={style.keyword__tweets}>
                  {keyword.totalKeywords}
                </div>
              </div>
              <div className={style.btn}>
                <Dialog2 onClick={HandleClick} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trends;