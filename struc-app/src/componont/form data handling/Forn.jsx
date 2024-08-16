import React, { useState, useEffect } from 'react'

const Forn = () => {
    const [color, setColor] = useState("blue");
 const click = ()=>{
}
setColor("color");
useEffect(()=>{
   document.body.style.backgroundColor = color
},[color])
  return (
    <div>
      <button onClick={click()}>O</button>
    </div>
  )
}

export default Forn
