import React from 'react'
import brand_logo from './brand_logo.png'

const Header = () => {
  return (
    <>
      <div className='w-[1340px] h-[72px] flex justify-evenly items-center'>
            <img src= {brand_logo} alt="logo" className='w-[76px] h-[42.75px] flex top-[15px] left-[85px] ' />
            <ul className='w-[333px] h-6 top-6 left-[553px] gap-6 flex justify-center items-center'>
                <li>MENU</li>
                <li>LOCATION</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
            </ul>
            <div className='w-[75px] h-[35px] p-[6px_16px_6px_16px] flex gap-6  text-white bg-[#D01C28]'>
              <button onClick={() => {alert("This is login button.")}}>Login</button>
            </div>
      </div>
    </>
  )
}

export default Header
