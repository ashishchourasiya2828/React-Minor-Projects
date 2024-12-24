import React, { useEffect, useRef, useState } from 'react'
import axios from "axios"
import Card from './card';
const Home = () => {
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
    <div className='h-screen w-screen flex items-center flex-wrap justify-center gap-10 p-10 overflow-y-auto bg-zinc-100' >
        {
            data.map((user,idx)=>{
                return <Card key={idx} image={user.picture.large} name={user.name} />
                
            })
        }
    </div>
  )
}

export default Home