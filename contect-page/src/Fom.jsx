import React from "react";
import { MdOutlineMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Service from "./Service.png";
import { useState} from "react";

const Fom = () => {
  let [vamail, setVamail] = useState(false);
  return (
    
    <div className="w-[58.5rem] h-[28.5625rem] mt-[2rem] ml-[12.375rem] gap-[1.4375rem] grid grid-cols-2">
      <form axction="contect" className="w-[29.5rem] h-[28.5625rem] gap-0 ">
        <div className="w-[29.5rem] h-[6.5625rem]  pt-2 mt-5  gap-[1.0625rem] flex-col justify-around items-center">
          <div className="w-[29.5rem] h-[2.3rem] mb-0  mt-[1rem] flex justify-between items-center">
            <button className="w-[13.75rem] h-[2rem]  border rounded-tl-[0.3125rem] rounded-tr-[0.3125rem]   ">
              <div className="w-[13.75rem] h-[2.75rem  gap-0 inline-flex rounded-tl-[0.3125rem rounded-tr-[0.3125rem]rounded-bl-[0.3125rem] rounded-br-[0.3125rem]">
                <div className="">
                  <MdOutlineMessage className="w-[4rem] h-[1.9rem] text-[#FFFFFF] p-1 text-[0.8rem] bg-black rounded-tl-[0.3125rem] rounded-bl-[0.3125rem]" />
                </div>
                <div className="w-[10.25rem] h-[1.9rem] pt-[0.125rem] ml-0 gap-0 text-[#FFFFFF] text-[0.8rem] flex justify-start bg-black rounded-tr-[0.3125rem] rounded-br-[0.3125rem] items-center">
                  VIA SUPPORT CHAT
                </div>
              </div>
            </button>

            <button className="w-[13.75rem] h-[2rem] border rounded-tl-[0.3125rem] rounded-tr-[0.3125rem]   ">
              <div className="w-[13.75rem] h-[2.75rem  gap-0 inline-flex rounded-tl-[0.3125rem rounded-tr-[0.3125rem] rounded-bl-[0.3125rem] rounded-br-[0.3125rem]">
                <div className="">
                  <FaPhoneAlt className="w-[4rem] h-[1.9rem] text-[#FFFFFF] p-2 text-[0.8rem] bg-black rounded-tl-[0.3125rem] rounded-bl-[0.3125rem]" />
                </div>
                <div className="w-[10.25rem] h-[1.9rem] pt-[0.125rem] ml-0 gap-0 text-[#FFFFFF] text-[0.8rem] flex justify-start bg-black rounded-tr-[0.3125rem] rounded-br-[0.3125rem] items-center">
                  VIA CALL
                </div>
              </div>
            </button>
          </div>

        </div>
          <div className="mt-[1rem] " >
            <button type="button"
              className="w-[29.5rem] h-[2.3rem] mt-2 items-center border rounded-tl-[0.3125rem] border-gray-800 rounded-tr-[0.3125rem] inline-flex   justify-center"  
              onClick={()=> setVamail(true)}
            >
              <div className=" inline-flex justify-center items-center">
                <MdOutlineMessage className="w-[4rem] h-[1.9rem] text-[black] p-1 text-[0.8rem] " />
              </div>
              <div className="w-[10.25rem] h-[1.9rem] pt-[0.125rem] ml-0 gap-0 text-[black] text-[1rem] flex justify-center items-center ">
                VIA EMAIL FORM
              </div>
            </button>
          </div>
        <div
          className={`w-[29.7rem] h-[20.5625rem] mt-[2.5rem] gap-[1.0625rem] ml-[-50rem]
          ${vamail ? "ml-[0rem]" : "qwerty"}
            flex flex-col justify-evenly items-center`}
        >
          <div className="relative border-gray-700 border-[1px] ">
            <label
              htmlFor="name"
              className="w-[3.25rem] h-[1.3125rem] ml-[1.2rem] px-[0.25rem] absolute top-[-14px] bg-white"
            >
              Name
            </label>
            <input
              type="text"
              className="w-[29.5em] h-[2.5rem] px-4 focus:outline-none focus:ring-0 border-none"
            />
          </div>

          <div className="relative border-gray-700 border-[1px] mb-4">
            <label
              htmlFor="name"
              className="w-[3.425rem] h-[1.3125rem] ml-[1.2rem] px-[0.25rem] absolute top-[-14px] bg-white"
            >
              E-mail
            </label>
            <input
              type="text"
              className="w-[29.5rem] h-[2.5rem] px-4 focus:outline-none focus:ring-0 border-none"
            />
          </div>

          <div className="relative border-gray-700 border-[1px] mb-4">
            <label
              htmlFor="message"
              className="w-[3.127rem] h-[1.3125rem] ml-[1.2rem] px-[0.25rem] absolute top-[-14px] bg-white"
            >
              Text
            </label>
            <textarea
              id="message"
              className="w-[29.5rem] h-[8rem] px-4 py-2 text-justify focus:outline-none focus:ring-0 border-none resize-none"
            >
              Assalam-o-Alaikum! I am' [designation]
            </textarea>
          </div>
        </div>
      </form>
      <div className="w-[29.5rem] h-[28.5625rem] p-1">
        <img
          src={Service}
          alt="Service 24/7"
          className="w-[29.5rem] h-[28.5625rem] ml-7"
        />
      </div>


    </div>
  );
};

export default Fom;
