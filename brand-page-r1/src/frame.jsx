import React from 'react'
import amazon from './amazon.png'
import flipkart from './flipkart.png'
import shoe_image from './shoe_image.png'


const Frame = () => {
  return (
    <div className='grid grid-cols-2 ml-10'>
      <div className='w-[595px] h-[613px] gap-[36px] ml-6 inline'>
        <div className='w-[595px] h-[306px]  font-extrabold text-[100px] text-[#000000] size-[108px] leading-[102px] '>
        YOUR FEET 
        DESERVE
        THE BEST
        </div>
        <div className='w-[404px] h-[91px] font-semibold text-[16px] leading-6 mt-9 text-[#5A5959]'>
        YOUR FEET DESERVE THE BEST AND WE’RE HERE 
        TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE 
        THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
        </div>
        <div className='w-[331px] h-[41px] inline-flex gap-20 mt-8'>
          <div className='w-[150px] h-[41px] p-[6px_16px] inline gap-[10px] text-white bg-[#D01C28]' >
            <button onClick={()=>{alert("This is shope now.")}} className='w-[118px] h-[29px] font-inter font-semibold size-[24px] leading-[29.5px] text-[#FFFFFF] '>Shope Now</button>
          </div>
          <div className='w-[141px] h-[41px] p-[6px_16px] inline gap-[10px] align-middle text-[#] border border-[#000000]'>
          <button onClick={()=>{alert("Thanks for visit now.")}} className='w-[109px] h-[29px] font-inter font-semibold size-[24px] leading-[29.05px] text-[#5A5959] '>Category</button>
          </div>
        </div>
      <div className='w-[131px] h-[67px] inline gap-[46px]'>
        <div className='w-[131px] h-[19px] font-inner font-normal size-4 leading-[19.36px] text-[#5A5959] mt-5'>Also Available On</div>
        <div className='flex mt-1 '>
          <img src={flipkart} alt="flipkart" className='w-8 h-8  scale-100' />
          <img src={amazon} alt="amazom" className='w-8 h-8  scale-100' />
        </div>
      </div>
      </div>
      <div>
        <img src={shoe_image} alt="" lassName='w-[530px] h-[487.06px] drop-shadow  scale-100'/>
      </div>
    </div>
  )
}

export default Frame
