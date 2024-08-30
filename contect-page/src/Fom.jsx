import React from 'react'
import { MdOutlineMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Fom = () => {
  return (
    <div className="w-[29.5rem] h-[28.5625rem] top-[1rem] ml-[12.375rem] gap-[1.4375rem] bg-slate-500">
      <form
        axction="contect"
        className="w-[29.5rem] h-[28.5625rem] gap-0 ">
      
        <div className="w-[29.5rem] h-[6.5625rem]  pt-2 mt-5  gap-[1.0625rem] flex-col justify-around items-center bg-red-900">
          <div className="w-[29.5rem] h-[2.3rem] mb-0   flex justify-between items-center bg-fuchsia-700">
          <button className="w-[13.75rem] h-[2rem]  border rounded-tl-[0.3125rem] rounded-tr-[0.3125rem]   ">
              <div className="w-[13.75rem] h-[2.75rem  gap-0 inline-flex rounded-tl-[0.3125rem rounded-tr-[0.3125rem]rounded-bl-[0.3125rem] rounded-br-[0.3125rem]">
                <div className="">
                  <MdOutlineMessage className="w-[4rem] h-[1.9rem] text-[#FFFFFF] p-1 text-[0.8rem] bg-black rounded-tl-[0.3125rem] rounded-bl-[0.3125rem]" />
                </div>
                <div className="w-[10.25rem] h-[1.9rem] pt-[0.125rem] ml-0 gap-0 text-[#FFFFFF] text-[0.8rem] flex justify-start bg-black rounded-tr-[0.3125rem] rounded-br-[0.3125rem]">
                  VIA SUPPORT CHAT
                </div>
              </div>
            </button>

            <button className="w-[13.75rem] h-[2rem] border rounded-tl-[0.3125rem] rounded-tr-[0.3125rem]   ">
              <div className="w-[13.75rem] h-[2.75rem  gap-0 inline-flex rounded-tl-[0.3125rem rounded-tr-[0.3125rem] rounded-bl-[0.3125rem] rounded-br-[0.3125rem]">
                <div className="">
                  <FaPhoneAlt className="w-[4rem] h-[1.9rem] text-[#FFFFFF] p-1 text-[0.8rem] bg-black rounded-tl-[0.3125rem] rounded-bl-[0.3125rem]" />
                </div>
                <div className="w-[10.25rem] h-[1.9rem] pt-[0.125rem] ml-0 gap-0 text-[#FFFFFF] text-[0.8rem] flex justify-start bg-black rounded-tr-[0.3125rem] rounded-br-[0.3125rem]">
                  VIA CALL
                </div>
              </div>
            </button>
          </div>

          <div className=" bg-fuchsia-700">
          <button className="w-[29.5rem] h-[2.3rem] mt-2 items-center border rounded-tl-[0.3125rem] rounded-tr-[0.3125rem] inline-flex   justify-center   ">
              {/* <div className="w-[13.75rem] h-[2.75rem  gap-0 inline-flex rounded-tl-[0.3125rem rounded-tr-[0.3125rem]rounded-bl-[0.3125rem] rounded-br-[0.3125rem]"> */}
                <div className="">
                  <MdOutlineMessage className="w-[4rem] h-[1.9rem] text-[#FFFFFF] p-1 text-[0.8rem] bg-black rounded-tl-[0.3125rem] rounded-bl-[0.3125rem]" />
                </div>
                <div className="w-[10.25rem] h-[1.9rem] pt-[0.125rem] ml-0 gap-0 text-[#FFFFFF] text-[0.8rem] flex justify-start bg-black rounded-tr-[0.3125rem] rounded-br-[0.3125rem]">
                  VIA SUPPORT CHAT
                </div>
              {/* </div> */}
            </button>
          </div>
        </div>
        <div></div>
      </form>
      {/* image */}
    </div>
  );
};

export default Fom
