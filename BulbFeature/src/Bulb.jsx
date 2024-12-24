import React, { useState } from 'react';
import { useRef } from 'react';

const Bulb = () => {
  const [isOn, setIsOn] = useState(false);

  const BulbRef = useRef(null)
  const ButtonbRef = useRef(null)

  const BulbHandler = ()=>{
    if(!isOn){
        BulbRef.current.style.backgroundColor = "yellow"
        BulbRef.current.style.boxShadow = "0 0 15px yellow"
        ButtonbRef.current.innerText = "Turn off"
        setIsOn(true);
    }
    else{
        BulbRef.current.style.backgroundColor = "#52525b"
        BulbRef.current.style.boxShadow = "0 0 0 yellow"
        ButtonbRef.current.innerText = "Turn Onn"
        setIsOn(false);
    }

    
  }
  return (
    <div>

    <div ref={BulbRef} className="bg-zinc-600 h-40 translate-y-[-50%] w-40 rounded-full  "></div>
    <button ref={ButtonbRef} onClick={BulbHandler}  className='px-4 py-2 rounded-md absolute top-1/2 left-1/2 translate-x-[-50%] text-black font-semibold bg-zinc-200' >Turn On</button>

    </div>

  );
};

export default Bulb;