import React from 'react'

const Arr = () => {
    // let a = ["Apple ", " Book ", " Pen ", " Chair "];
    let  furits = [
        { name:"Apple", price:"100/Kg"},
        { name:"Mango", price:"100/Kg"},
        { name:"Banana", price:"100/Kg"},
        { name:"PineApple", price:"100/Kg" , e:""},
    ];
  return (
    <div>
     
        {furits.map((furit)=>(
        <h1>
           <li key = {furits.names}>
            {""}
            {furit.name} {furit.price}</li>
        </h1>
        ))}
    </div>
  )
}

export default Arr
