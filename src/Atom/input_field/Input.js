import React from 'react'

function Input({ onChange ,className ,placeholder}) {
  return (
    <div>
        <input 
         onChange={onChange}
         className ={className}
          placeholder={placeholder}
         />
        
    </div>
  )
}

export default Input