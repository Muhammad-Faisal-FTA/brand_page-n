import React from 'react'
import logo from "./logo.png"
function  Header() {
  return (
    <div className="w-[81rem] h-[4.5rem] gap-0 inline-flex  justify-between items-center p-9 md:">
        <img src={logo} alt="Logo-Code_Tech" className='w-[6rem] h-[6rem] top-[0.25rem] left-[5.6875rem]' />

       <ul className='w-[14.4375rem] h-[1.5rem] top-[1.5rem] left-[70.5rem] gap-[1.5rem] inline-flex'>
        <li className='font-[Poppins] text-[1rem] font-semibold leading-[1.5rem] text-center '>Home</li>
        <li className='font-[Poppins] text-[1rem] font-semibold leading-[1.5rem] text-center '>About</li>
        <li className='font-[Poppins] text-[1rem] font-semibold leading-[1.5rem] text-center '>Contact</li>
       </ul>

    </div>
  );
}

export default Header

