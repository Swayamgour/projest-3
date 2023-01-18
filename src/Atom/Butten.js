import React from 'react'

function Butten({buttenText ,onClick ,className ,text}) {
  return (
    <div>
       <button
        onClick={onClick}
        className ={className}
        > 
        {buttenText}
        {text}
       </button>
        </div>
  )
}

export default Butten