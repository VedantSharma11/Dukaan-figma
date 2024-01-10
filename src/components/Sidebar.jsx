import React from "react";
import logo from '../images/logo.png';
import { IoIosArrowDown } from "react-icons/io";
import { GrHomeRounded } from "react-icons/gr";
import { GoChecklist } from "react-icons/go";
import { TbTruckDelivery } from "react-icons/tb";
import { LuUsers } from "react-icons/lu";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { IoColorPaletteOutline } from "react-icons/io5";
import { TbDiscount2 } from "react-icons/tb";
import { MdOutlinePayments } from "react-icons/md";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { PiSpeakerHighBold } from "react-icons/pi";
import { FiGrid } from "react-icons/fi";
import { IoWalletOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div  style={{backgroundColor:"#1e2640"}} className="flex flex-col h-screen w-72 px-2 py-3 text-white fixed">
      <div className="flex items-center justify-between mx-1">
        <div className="flex items-center">
            <img src={logo} alt="logo-img" className="w-11 h-10 rounded-[5px] mr-2"/>
            <div>
                <h3 className="text-[15px] tracking-wider">Nishyan</h3>
                <p className="text-[13px] text-gray-400 underline tracking-wider">Visit store</p>
            </div>
        </div>
        <IoIosArrowDown fontSize={20} />
      </div>

      {/* TOP */}
      <div className="flex-1 mt-4 text-gray-400 space-y-0.5">
        <div className="flex items-center hover:bg-slate-700 hover:text-white px-4 rounded-[5px] cursor-pointer">
          <GrHomeRounded fontSize={21}/>
          <span className="ml-3 text-sm my-2 font-semibold tracking-wider">Home</span>
        </div>
        <div className="flex items-center hover:bg-slate-700 hover:text-white px-4 rounded-[5px] cursor-pointer">
          <GoChecklist fontSize={23}/>
          <span className="ml-3 text-sm my-2 font-semibold tracking-wider">Orders</span>
        </div>
        <div className="flex items-center hover:bg-slate-700 hover:text-white px-4 rounded-[5px] cursor-pointer">
          <FiGrid fontSize={23}/>
          <span className="ml-3 text-sm my-2 font-semibold tracking-wider">Products</span>
        </div>
        <div className="flex items-center hover:bg-slate-700 hover:text-white px-4 rounded-[5px] cursor-pointer">
          <TbTruckDelivery fontSize={23}/>
          <span className="ml-3 text-sm my-2 font-semibold tracking-wider">Delivery</span>
        </div>
        <div className="flex items-center hover:bg-slate-700 hover:text-white px-4 rounded-[5px] cursor-pointer">
          <PiSpeakerHighBold fontSize={23}/>
          <span className="ml-3 text-sm my-2 font-semibold tracking-wider">Marketing</span>
        </div>
        <div className="flex items-center hover:bg-slate-700 hover:text-white px-4 rounded-[5px] cursor-pointer">
          <TbBrandGoogleAnalytics fontSize={23}/>
          <span className="ml-3 text-sm my-2 font-semibold tracking-wider">Analytics</span>
        </div>
        <div className="flex items-center hover:bg-slate-700 hover:text-white px-4 rounded-[5px] cursor-pointer">
          <MdOutlinePayments fontSize={23}/>
          <span className="ml-3 text-sm my-2 font-semibold tracking-wider">Payouts</span>
        </div>
        <div className="flex items-center hover:bg-slate-700 hover:text-white px-4 rounded-[5px] cursor-pointer">
          <TbDiscount2 fontSize={23}/>
          <span className="ml-3 text-sm my-2 font-semibold tracking-wider">Discounts</span>
        </div>
        <div className="flex items-center hover:bg-slate-700 hover:text-white px-4 rounded-[5px] cursor-pointer">
          <LuUsers fontSize={23}/>
          <span className="ml-3 text-sm my-2 font-semibold tracking-wider">Audience</span>
        </div>
        <div className="flex items-center hover:bg-slate-700 hover:text-white px-4 rounded-[5px] cursor-pointer">
          <IoColorPaletteOutline fontSize={23}/>
          <span className="ml-3 text-sm my-2 font-semibold tracking-wider">Appearance</span>
        </div>
        <div className="flex items-center hover:bg-slate-700 hover:text-white px-4 rounded-[5px] cursor-pointer">
          <AiOutlineThunderbolt fontSize={23}/>
          <span className="ml-3 text-sm my-2 font-semibold tracking-wider">Plugins</span>
        </div>
      </div>

      {/* BOTTOM */}
      <div style={{backgroundColor:"#353c53"}} className="flex rounded-md items-center p-2 gap-3 mx-1">
        <div style={{backgroundColor:"#494f64"}} className="rounded-md p-1"><IoWalletOutline fontSize={25}/></div>
         <div>
            <p className="text-[13px] text-gray-300">Available credits</p>
            <p className="text-sm font-bold">222.10</p>
         </div>
      </div>
    </div>
  );
};

export default Sidebar;
