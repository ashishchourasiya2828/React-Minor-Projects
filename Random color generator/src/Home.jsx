import React from 'react'
import { useRef } from 'react';

const Home = () => {
    const boxRef = useRef(null)

    const changeHandler = ()=>{
        const one = Math.floor(Math.random()*256);
        const two = Math.floor(Math.random()*256);
        const three = Math.floor(Math.random()*256);
        boxRef.current.style.backgroundColor = `rgb(${one},${two},${three})`
        
        
    }
  return (
    <div className='h-screen w-screen flex items-center justify-center pt-20  bg-zinc-200 ' >
        <div className='p-10 flex flex-col items-center justify-center gap-5 rounded-md  bg-zinc-800 mt-[-8vw] ' >
            <button  onClick={changeHandler} className='px-4  py-2 rounded-md bg-red-600 text-white' >Click To Change</button>
            <div ref={boxRef} className='h-[15vw] w-[15vw] mt-20 mx-14 bg-red-300 rounded-md' ></div>
        </div>
    </div>
  )
}

export default Home