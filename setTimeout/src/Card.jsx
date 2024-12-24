import React, { useRef } from 'react'
import { useState } from 'react'

const Card = ({image,name}) => {
    console.log(name);
    let check =0;
    const buttonRef = useRef(null)
    // const [first, setfirst] = useState(second)
    const requestHandler =()=>{
       buttonRef.current.innerText = "Requesting"
       buttonRef.current.style.backgroundColor = "orange"

      if(check === 0){
      
       setTimeout(() => {
        buttonRef.current.innerText = "Remove"
        buttonRef.current.style.backgroundColor = "green"
        check = 1;
       }, 1500);
    }
     else{
       buttonRef.current.innerText = "Add Friend+"
       buttonRef.current.style.backgroundColor = "#2563EB"
       check = 0;
     }}

    
  return (
    <div className=' bg-zinc-300 text-center flex m-2 flex-col itmes-center justify-center py-5 px-10 rounded-md ' >
        <div className='h-32 w-32 bg-red-300 m-auto overflow-hidden rounded-md mb-10 mt-5' >
            <img className='h-full w-full object-cover' src={image} alt="" />
        </div>
        <h1  className='text-2xl text-black font-semibold w-full mb-10' >{name.first},{name.last}</h1>
        <button ref={buttonRef} onClick={requestHandler}  className='px-4 py-2 w-[15vw] text-white bg-blue-600 mb-4 rounded-md' >Add Friend+</button>
    </div>
  )
}

export default Card