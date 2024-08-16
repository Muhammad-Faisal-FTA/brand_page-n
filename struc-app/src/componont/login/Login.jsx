import React, { useState } from "react"
import "./login.scss"
const Login = () => {
  const [a, setA] = useState();
  const [i, setI] = useState();
  const [message,setMessage]=useState()

    return (
    <div className='login-wrapper'>
        <div className="heading">
          <h1>Sumit the Form</h1>
          <h3>Name:</h3>
          <input type="text" placeholder="ur name" required  onChange={(e)=> {setA(e.target.value)}}/>
          <h3>ID:</h3>
          <input type="text" placeholder="15-digits X X X-X X-X X X X-X X X X X X X-x" onChange={(e)=> {setI(e.target.value)}}/>
          <button onClick={() => {
            setMessage(`${a}\n${i}`);
        }}>Submit</button>
          <p>DETAILS: {message}</p>
          
        </div>
        <div className="login-form">form</div>
         <div className="login-form">form</div> 
      
    </div>
  )
}

export default Login
