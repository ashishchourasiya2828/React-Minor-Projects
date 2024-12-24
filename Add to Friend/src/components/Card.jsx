import React, { useRef } from 'react'

const Card = ({image,name}) => {

    

    const buttonRef = useRef(null);

    let check = 0;

    function friendHandler(){
        if(check===0){
            buttonRef.current.innerText = "Added"
            buttonRef.current.style.backgroundColor = "green"
            check = 1;
        }
        else{
            buttonRef.current.innerText = "Add Friend+"
            buttonRef.current.style.backgroundColor = "#2563EB"
            check=0;
        }
    }
    // console.log(buttonRef);
    
  return (
    <div className=' bg-zinc-300 text-center flex m-2 flex-col itmes-center justify-center py-5 px-10 rounded-md ' >
        <div className='h-32 w-32 bg-red-300 m-auto overflow-hidden rounded-md mb-10 mt-5' >
            <img className='h-full w-full object-cover' src={image} alt="" />
        </div>
        <h1  className='text-2xl text-black font-semibold w-full mb-10' >{name.first} {name.last}</h1>
        <button ref={buttonRef} onClick={friendHandler} className='px-4 py-2 text-white bg-blue-600 rounded-md' >Add Friend+</button>
    </div>
  )
}

export default Card