import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineHelpOutline } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { LuSearch } from "react-icons/lu";
import { BiDownload } from "react-icons/bi";
import { TbArrowsSort } from "react-icons/tb";
import Table from "./Table";

const Dashboard = () => {
  return (
    <div className="flex flex-col bg-gray-200 h-full px-6 py-6">
      {/* TOP */}
      <div className="flex flex-col gap-5">
        <div className="flex justify-between">
          <h1 className="font-bold tracking-wide text-lg">Overview</h1>
          <button className="bg-white rounded-[5px] flex items-center gap-1 px-3 py-1 border-2 border-gray-400 text-gray-700 text-[13px]">
            This Month
            <IoIosArrowDown fontSize={17} />
          </button>
        </div>
        <div className="flex gap-5">
          <div
            style={{ backgroundColor: "#146eb4" }}
            className="rounded-md text-white w-2/6 shadow-md"
          >
            <div className="p-4">
              <div className="flex items-center gap-1 items-center">
                <p className="text-sm">Next Payout</p>
                <MdOutlineHelpOutline fontSize={15} />
              </div>
              <div className="flex justify-between mt-3">
                <p className="text-[25px] font-semibold">₹ 2,312.23</p>
                <div className="flex items-center">
                  <p className="underline text-[13px]">23 orders</p>
                  <IoIosArrowForward fontSize={15} />
                </div>
              </div>
            </div>
            <div
              style={{ backgroundColor: "#0e4f82" }}
              className="flex items-center justify-between px-4 py-1.5 rounded-md"
            >
              <p className="text-[13px]">Next payment date:</p>
              <p className="text-[13px]">Today, 04:00PM</p>
            </div>
          </div>

          <div className="w-2/6 bg-white rounded-md shadow-md p-4 h-[102px]">
            <div className="flex items-center gap-1 items-center">
              <p className="text-sm">Amount Pending</p>
              <MdOutlineHelpOutline fontSize={15} />
            </div>
            <div className="flex justify-between mt-3">
              <p className="text-[25px] font-semibold">₹ 92,312.20</p>
              <div className="flex items-center text-cyan-800 font-bold">
                <p className="underline text-[13px]">13 orders</p>
                <IoIosArrowForward fontSize={15} />
              </div>
            </div>
          </div>
          <div className="w-2/6 bg-white rounded-md shadow-md p-4 h-[102px]">
            <div className="flex items-center gap-1 items-center">
              <p className="text-sm">Amount Processed</p>
              <MdOutlineHelpOutline fontSize={15} />
            </div>
            <p className="text-[25px] font-semibold mt-3">₹ 23,92,312.19</p>
          </div>
        </div>
      </div>

      {/* MIDDLE */}
      <div className="mt-6">
        <h1 className="text-lg font-bold mb-4"> Transactions | This Month</h1>
        <span className="text-[13px] bg-gray-300 text-gray-600 rounded-[25px] py-1 px-3 font-semibold mr-2">
          Payouts (22)
        </span>
        <span
          style={{ backgroundColor: "#146eb4" }}
          className="text-[13px] text-gray-300 rounded-[25px] py-1 px-3 font-semibold"
        >
          Refunds (6)
        </span>
      </div>

      {/* TABLE */}
      <div className="bg-white mt-6 rounded-md p-2 shadow-md">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 px-2 py-1.5 border-[1px] border-slate-300 rounded-[3px] text-gray-500 w-56 ">
            <LuSearch fontSize={16} />
            <input
              type="text"
              placeholder="Order ID or transaction ID"
              className="text-[13px] w-full outline-none bg-white"
            />
          </div>
          <div className="flex items-center gap-2.5 text-gray-600">
            <div className="flex items-center gap-2 border-[1px] border-slate-300 rounded-[3px] px-3 py-1 font-semibold cursor-pointer"><p className="text-sm">Sort</p><TbArrowsSort fontSize={16}/></div>
            <div className=" border-[1px] border-slate-300 rounded-[3px] p-1 cursor-pointer"><BiDownload fontSize={20}/></div>
          </div>
        </div>
        <Table />
      </div>
    </div>
  );
};

export default Dashboard;
