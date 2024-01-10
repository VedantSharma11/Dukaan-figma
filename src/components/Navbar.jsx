import React from 'react'
import { IoChatboxEllipses } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa6";
import { LuSearch } from "react-icons/lu";
import { MdOutlineHelpOutline } from "react-icons/md";

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-6 py-2 shadow-lg '>
       <div className='flex items-center gap-3'>
        <h1 className='font-bold text-lg'>Payouts</h1>
        <div className='flex items-center text-gray-800 font-semibold'>
        <MdOutlineHelpOutline fontSize={14}/>
          <p className='text-[9px] ml-1'>How it works</p>
        </div>
        
       </div>
       <div style={{backgroundColor:"#e6e6e6"}} className='flex items-center gap-2 p-2 rounded-[5px] text-gray-500 w-96'>
        <LuSearch fontSize={18}/>
        <input type='text' placeholder='Search features, tutorials, etc.' className='text-sm w-full outline-none' style={{backgroundColor:"#e6e6e6"}}/>
       </div>
       <div className='flex items-center gap-2 text-zinc-700'>
       <div style={{backgroundColor:"#e6e6e6"}} className='rounded-[50px] p-1.5'>  <IoChatboxEllipses fontSize={20}/></div>
       <div  style={{backgroundColor:"#e6e6e6"}} className='rounded-[50px] p-1.5'> <FaCaretDown fontSize={20}/></div>
        
       </div>
    </div>
  )
}

export default Navbar