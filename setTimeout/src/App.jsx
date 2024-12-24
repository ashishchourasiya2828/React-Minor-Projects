import React from 'react'
import Card from './Card'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios"

const App = () => {

  const [data, setdata] = useState([])
  const dataHanlder = async ()=>{
      const response = await axios.get('https://randomuser.me/api/?results=5'); // Fetch 5 random users
      // console.log(response.data.results);
      
      setdata(response.data.results)
      
  }
  // console.log(data[0].picture.large);

  useEffect(()=>{
      dataHanlder();
  },[])

  return (
    <div className='h-screen flex flex-wrap overflow-y-auto py-10 items-center justify-center w-screen bg-zinc-800 ' >
      {
        data.map((user,idx)=>{
          return <Card key={idx} image={user.picture.large} name={user.name} />
        })
      }
    </div>
  )
}

export default App