import React from 'react';
import { FaComments, FaRegClock, FaRegCopy, FaRegQuestionCircle, FaSearch, FaTv, FaUserAlt, FaUsers } from 'react-icons/fa';

const ApplicationsFooter = () => {
    return (
      <div className="bg-slate-200 text-black border-t-2 border-slate-300 flex px-2 py-1">
        <div className="lg:w-[310px] w-full flex justify-between px-3 border-r-2 border-slate-300 ">
          <div className="flex flex-col text-slate-400 justify-center items-center">
            <FaComments className="w-5 h-5"></FaComments>
            <p>Chats</p>
          </div>
          <div className="flex flex-col text-slate-400 justify-center items-center">
            <FaUsers className="w-5 h-5"></FaUsers>
            <p>Channels</p>
          </div>
          <div className="flex flex-col text-slate-400 justify-center items-center">
            <FaUserAlt className="w-5 h-5"></FaUserAlt>
            <p>Contucts</p>
          </div>
        </div>
        <div className=" lg:flex hidden text-slate-400 items-center mx-3 ">
          Your Chat will be here
        </div>
        <div className=" lg:flex hidden ml-auto items-center">
          <div className="flex border-l-2 p-2 border-slate-400">
            <FaTv className="w-5 h-5 text-slate-600"></FaTv>
          </div>
          <div className="flex border-l-2 p-2 border-slate-400">
            <FaRegClock className="w-5 h-5 text-slate-600"></FaRegClock>
          </div>
          <div className="flex items-center border-l-2 p-2 border-slate-400">
            <FaRegQuestionCircle className="w-5 h-5 text-slate-600"></FaRegQuestionCircle>{" "}
            <span className="text-slate-600">Need Help!</span>
          </div>
          <div className="flex border-l-2 p-2 border-slate-400">
            <FaRegCopy className="w-5 h-5 text-slate-600"></FaRegCopy>
          </div>
          <div className="flex border-x-2 p-2 border-slate-400">
            <FaSearch className="w-5 h-5 text-slate-600"></FaSearch>
          </div>
        </div>
      </div>
    );
};

export default ApplicationsFooter;