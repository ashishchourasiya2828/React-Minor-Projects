import React from 'react'
import axios from "axios"
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import Status from './Status'

const App =  () => {
const [user, setuser] = useState([])

const [Storyopen, setStoryopen] = useState(false)
const [storyImage, setstoryImage] = useState("")

const [imageStory, setimageStory] = useState(["https://plus.unsplash.com/premium_photo-1732776567041-885234fdc3c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8","https://images.unsplash.com/photo-1734532873375-574fd74045c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8","https://images.unsplash.com/photo-1734390151133-f6b8e8abceb0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8","https://images.unsplash.com/photo-1734365294861-3f6df6a6af89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1734881368192-b71a88293b78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D"])

const BarRef = useRef(null)
let grow=0;

const abc = async ()=>{
  const response = await axios.get("https://randomuser.me/api/?results=5")
  setuser(response.data.results)
}

  useEffect(()=>{
    abc()
  },[])

  const StoryHandler =(idx)=>{
    setStoryopen(true)  // open the story
    setstoryImage(imageStory[idx]) //;



    const interval = setInterval(()=>{
      if(grow<=100){
        grow+=1;
        BarRef.current.style.width = `${grow}%`
      }
     
    },50)
    
    setTimeout(() => {
      clearInterval(interval)
      setStoryopen(false) 
      setstoryImage(""); 
    }, 5000);
  }


  const CloseHandler =()=>{
    setStoryopen(false) // close the story
    setstoryImage("") // reset the image url
  }

  return (
    <div className='h-screen flex items-center justify-center  w-screen bg-zinc-800' >
      <div className={`h-96 w-72 border-2 border-zinc-500 bg-green-800 ${Storyopen ? "hidden" :""}  rounded-md`} >
      <h1 className='text-2xl font-semibold text-zinc-100  m-2' >WhatsApp</h1>
      <div className='story w-full  h-[87.4%] flex flex-col  overflow-y-auto   ' >
        {
          user.map( (user,idx) =>{
            return <Status key={idx} idx={idx} StoryHandler={StoryHandler} name={{first:user.name.first,second:user.name.last}}  thumbnail={user.picture.large} />
            
          } )
        }
      </div>

      </div>

      <div className={`h-96 w-72 border-2 border-zinc-500 relative  overflow-hidden  ${!Storyopen ? "hidden": ""} rounded-md`} >
        <div className='absolute mt-1 rounded-lg px-1  h-2 w-full  border-zinc-600' >
          <div ref={
            BarRef
          } className='h-full w-0 bg-zinc-800 rounded-lg ' ></div>
        </div>
        <img className='h-full w-full object-cover'  src={storyImage} alt="" />
        <button onClick={CloseHandler} className='px-3 py-1  text-white top-4 right-2 text-zinc-700 font-bold  rounded-md absolute' >Close</button>

      </div>

    </div>
  )
}

export default App