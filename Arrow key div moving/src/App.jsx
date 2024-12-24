import React, { useState, useEffect } from "react";

const App = () => {

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const moveHandler = (e) => {
    if (e.key === "ArrowRight") {
      setPosition((prev) => ({ ...prev, x: prev.x + 10 }));
    }
    else if (e.key === "ArrowLeft") {
      setPosition((prev) => ({ ...prev, x: Math.max(prev.x - 10, 0) })); 
    }
    else if (e.key === "ArrowUp") {
      setPosition((prev) => ({ ...prev, y: Math.max(prev.y - 10, 0) })); 
    }
    else if (e.key === "ArrowDown") {
      setPosition((prev) => ({ ...prev, y: prev.y + 10 }));
    }
  };

  useEffect(()=>{
    window.addEventListener("keydown",moveHandler)

    return ()=>{
      window.removeEventListener("keydown",moveHandler)
    }
  },[])


  return (
    <div className="h-screen w-screen bg-gray-200 relative">
      <div
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
        className="h-16 w-16 bg-blue-500 rounded-full transition-transform duration-200"
      ></div>
    </div>
  );
};

export default App;
