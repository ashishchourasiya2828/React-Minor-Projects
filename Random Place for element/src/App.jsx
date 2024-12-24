import React, { useEffect, useState } from 'react'
import Box from './Box'

const App = () => {
  const [positon, setpositon] = useState({x:0,y:0})

  useEffect(()=>{

   const interval = setInterval(() => {
      const one = Math.floor(Math.random()*(window.innerWidth - 100))
      const two = Math.floor(Math.random()*(window.innerHeight - 100))
      setpositon({x:one,y:two});
    
    }, 1000);

    return () => {
      clearInterval(interval);
    }
      },[])

  return (
    <div className='h-screen w-screen relative bg-zinc-800' > 
    <Box positon={positon} />
    </div>  
  )
}

export default App