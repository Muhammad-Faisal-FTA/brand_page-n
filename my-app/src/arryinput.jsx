import React from 'react'
import { useState } from 'react'

const Arr = () => {
    const  [item, setItem] = useState("");
    function clickh(){
      console.log(item);
      <h1>{item}</h1>
      setItem("");
      <Arr />
    }
    return (
      <div className='mt-20 ml-10'>
       <input type="text" onChange={(e)=>{setItem(e.target.value)}} value ={item}/>
       <button onClick={clickh}>Add</button>
    </div>
  )
}

export default Arr
