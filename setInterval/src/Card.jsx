import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'

const Card = () => {

  const Buttonref = useRef(null)
  const WidthRef = useRef(null)
  const Textref = useRef(null)

  let grow=0;

  const downloadhandler = ()=>{
    if(grow<=100){
      const interval = setInterval(() => {
        grow+=1;
        WidthRef.current.style.width= `${grow}%`
        Textref.current.innerText= grow+"%"
        
      }, 50);

      Buttonref.current.style.backgroundColor="orange"
      Buttonref.current.innerText="Downloading.."

      setTimeout(()=>{
        Buttonref.current.innerText= "Downloaded" 
        Buttonref.current.style.backgroundColor= "Green" 
        clearInterval(interval)
      },5000)
    }
  }
  

  return (
    <div className='h-48 w-[35vw] flex bg-red-300 overflow-hidden rounded-lg' >
        <div className='h-full w-1/4 bg-red-500 overflow-hidden ' >
        <img className='h-full w-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-MoYXgomYFLg-j9f3TGMbXr9LIk-3l4RdsQ&s" alt="" />
        </div>
        <div className='h-full w-3/4 bg-yellow-500' >
        <div className='h-1/2 w-full bg-zinc-100 p-4' >
        <h1 className='text-zinc-500 font-semibold text-xl  ' >Backend Domination  </h1>
        <h1 className='text-zinc-400 font-semibold text-xl  ' >Full Pirated By : <span className='text-2xl text-zinc-500 font-bold' >Salman Khan</span> </h1>
        </div>
        <div className='h-1/2 relative  w-full p-4 pt-1   bg-zinc-100' >
        <h1 ref={Textref} className='absolute right-4 bottom-10 text-zinc-800 font-bold ' ></h1>
        <button ref={Buttonref} onClick={downloadhandler} className='px-3 py-1 mb-6 bg-blue-600 font-medium rounded text-white  ' >Click To Download</button>
        <div className='h-2 border-2  border-zinc-700 w-full' >
            <div ref={WidthRef} className='h-full w-0  bg-zinc-700' ></div>
        </div>
        </div>
        </div>

    </div>
  )
}

export default Card