import React from 'react'
import { useRef } from 'react'

const App = () => {
  const Img1 = useRef(null)
  const Img2 = useRef(null)


  const SwapHandler = ()=>{
    const copy = Img1.current.src;
    Img1.current.src = Img2.current.src;
    Img2.current.src = copy;
  }

  
  return (
    <div className='h-screen w-screen flex items-center p-2 gap-4 flex-col bg-zinc-800' >
      <div className='h-1/2 w-1/2 bg-red-400 rounded-md overflow-hidden ' >
      <img ref={Img1} className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1734426561130-9e060ae9b03c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
      <button onClick={SwapHandler} className='px-3 py-2 bg-blue-600 rounded-md text-white font-semibold  ' >Click To Swap</button>
      <div className='h-1/2 w-1/2 bg-green-400 rounded-md overflow-hidden' >
      <img ref={Img2} className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1734375119887-460f4b97dfaa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
    </div>
  )
}

export default App