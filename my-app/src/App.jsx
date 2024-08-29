import './App.css';
import { useState } from 'react';
import { IoEyeOutline } from "react-icons/io5";
import { GoEyeClosed } from "react-icons/go";


function App() {
  let [status , setStatus] =useState(false)
  return (
    <>
     <div className='flex'>
     {
      (status)?
      <p>Welcome !</p> : '* * * * * *         \u00A0\u00A0\u00A0'
     }
      <button onClick={() => setStatus(!status)}> {(status)? <GoEyeClosed /> : <IoEyeOutline />} </button>
     </div>
    </>
  );
}

export default App;
