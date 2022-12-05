import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight, FaRegListAlt } from "react-icons/fa";
import ApplicationsFooter from "./ApplicationsFooter";
import Sidebar from "./Sidebar";
import Upbar from "./Upbar";



const Applicationlayout = ({ children }) => {
    const [open, setOpen] = useState('block')

    const handledraw = ()=>{
        if(open === 'block'){
            setOpen('hidden')
        }else{
            setOpen('block')
        }
    }
  return (
    <div>
      {/* Upbar in your candidate page */}
      <Upbar></Upbar>
      <div className="flex justify-between relative">
        <button
          onClick={handledraw}
          className={`bg-slate-500 h-12 absolute top-1/2 rounded-r ${
            open === "block" ? "left-80" : "left-0"
          }`}
          style={{ zIndex: "66" }}
        >
          {open === "block" ? (
            <FaAngleLeft></FaAngleLeft>
          ) : (
            <FaAngleRight></FaAngleRight>
          )}
        </button>
        <div
          className={`w-80 bg-slate-100 text-black h-[80vh] border-r-2 border-slate-400 p-6 ${open}`}
        >
          {/* Side bar in your candidate page  */}
          <Sidebar></Sidebar>
        </div>

        <div
          className={`flex-1 bg-slate-200 text-black h-[80vh] ${
            open === "hidden" ? "px-12" : "px-0"
          }`}
          style={{ overflow: "auto" }}
        >
          {children}
        </div>
      </div> 
      {/* candidate page footer */}
      <ApplicationsFooter></ApplicationsFooter>
    </div>
  );
};

export default Applicationlayout;
