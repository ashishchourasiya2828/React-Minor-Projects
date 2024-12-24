import React from 'react'

const Box = ({positon}) => {
    console.log(positon);
    
  return (
    <div style={{left:positon.x,top:positon.y}} className='h-32 w-32 bg-zinc-200 rounded-full absolute' ></div>
  )
}

export default Box