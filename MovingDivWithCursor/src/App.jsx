import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'

const App = () => {
  const divRef = useRef(null)
  const [position, setposition] = useState({x:0,y:0})
  const movemouse = (e)=>{
    // console.log(e.clientX);
    setposition({x:e.clientX, y:e.clientY})
    // 
    // divRef.current.getBoundingClientRect().left = position.left
    // divRef.current.getBoundingClientRect().top = position.top
    
  }
  // console.log(position.y);
  
  return (
    <div onMouseMove={(e)=>{movemouse(e)}} className='h-screen w-screen bg-zinc-800 relative ' >
      <div ref={divRef} style={{  top: position.y,
          left: position.x,}} className={`h-10 w-10 bg-yellow-500 absolute  rounded-full`} ></div>
    </div>
  )
}

export default App