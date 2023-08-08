import React from 'react'
import { useNavigate } from 'react-router-dom'

const NabarLeft = () => {
  const navigate = useNavigate();
  return (
    <div  onClick={()=>navigate("/")}  className='text-6xl cursor-pointer'> 
      SedefShopping
    </div>
  )
}

export default NabarLeft
