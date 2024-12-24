import React from 'react'
import { useState } from 'react'

const Story = ({thumbnail,StoryHandler,idx}) => {

  return (
    <div  className='h-20 bg-red-300 w-20 rounded-full p-1 oveflow-hidden  shrink-0' >
        <img onClick={()=>{StoryHandler(idx)}}  className='h-full w-full object-cover rounded-full ' src={thumbnail} alt="" />
    </div>
  )
}

export default Story