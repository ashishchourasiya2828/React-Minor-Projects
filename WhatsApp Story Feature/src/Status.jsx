import React from 'react'
import { useState } from 'react'

const Status = ({thumbnail,StoryHandler,idx,name}) => {
    // console.log(name);
    

  return (
    <div className='w-full flex items-center  justify-between bg-zinc-500 border-t-2 border-zinc-400' >

    <div  className='h-20  bg-zinc-800 w-20  rounded-full p-1 m-1 oveflow-hidden  shrink-0' >
        <img onClick={()=>{StoryHandler(idx)}}  className='h-full w-full object-cover rounded-full ' src={thumbnail} alt="" />
    </div>
        <h1 className='text-white font-semibold mt-[-1vw] text-xl mr-4' >{name.first} {name.second}</h1>
    </div>

  )
}

export default Status