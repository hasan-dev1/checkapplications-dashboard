import Link from 'next/link';
import React from 'react';
import { FaBars, FaCopy, FaEllipsisH, FaFilter, FaPlus, FaPrint, FaRegCalendarAlt } from 'react-icons/fa';

const Upbar = () => {
    return (
      <div className="flex lg:justify-between px-2 bg-slate-500">
        <div className="flex lg:justify-start justify-between items-center my-3 w-full">
          <h1 className=" pr-6 pb-1 text-2xl lg:border-r-2">
            <FaCopy className="inline"></FaCopy> Applications
          </h1>
          <select className="select text-xl bg-inherit border-0 pl-6 focus:outline-none">
            <option className="text-black">All Applications</option>
            <option className="text-black">Homer</option>
            <option className="text-black">Marge</option>
            <option className="text-black">Bart</option>
            <option className="text-black">Lisa</option>
            <option className="text-black">Maggie</option>
          </select>
          <div className="dropdown relative">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBars></FaBars>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content shadow absolute top-12 right-6 text-white rounded-box"
            >
              <li>
                <Link
                  className=" bg-slate-400 flex justify-center items-center rounded px-6 py-3 text-xl"
                  href="/"
                >
                  <FaPlus></FaPlus> <span className="mx-2">Plus</span>
                </Link>
              </li>
              <li>
                <Link
                  className=" bg-slate-400 flex justify-center items-center rounded px-6 py-3 text-xl"
                  href="/"
                >
                  <FaEllipsisH></FaEllipsisH> <span className="mx-2">Plus</span>
                </Link>
              </li>
              <li>
                <Link
                  className=" bg-slate-400 flex justify-center items-center rounded px-6 py-3 text-xl"
                  href="/"
                >
                  <FaRegCalendarAlt></FaRegCalendarAlt>{" "}
                  <span className="mx-2">Plus</span>
                </Link>
              </li>
              <li>
                <Link
                  className=" bg-slate-400 flex justify-center items-center rounded px-6 py-3 text-xl"
                  href="/"
                >
                  <FaPrint></FaPrint> <span className="mx-2">Plus</span>
                </Link>
              </li>
              <li>
                <Link
                  className=" bg-slate-400 flex justify-center items-center rounded px-6 py-3 text-xl"
                  href="/"
                >
                  <FaFilter></FaFilter> <span className="mx-2">Plus</span>
                </Link>
              </li>
            </ul>
          </div>
          {/* <div className="lg:hidden justify-end items-center my-3">
            <FaBars></FaBars>
          </div> */}
        </div>
        <div className="lg:flex hidden justify-start items-center my-3">
          <Link
            className="w-8 h-8 bg-slate-400 flex justify-center items-center rounded  lg:ml-4 lg:mr-2"
            href="/"
          >
            <FaPlus></FaPlus>
          </Link>
          <Link
            className="w-8 h-8 bg-slate-400 flex justify-center items-center rounded  mx-2"
            href="/"
          >
            <FaEllipsisH></FaEllipsisH>
          </Link>
          <Link
            className="w-8 h-8 bg-slate-400 flex justify-center items-center rounded  lg:ml-4 lg:mr-2"
            href="/"
          >
            <FaRegCalendarAlt></FaRegCalendarAlt>
          </Link>
          <Link
            className="w-8 h-8 bg-slate-400 flex justify-center items-center rounded  mx-1"
            href="/"
          >
            <FaPrint></FaPrint>
          </Link>
          <Link
            className="w-8 h-8 bg-slate-400 flex justify-center items-center rounded  lg:ml-4 lg:mr-2"
            href="/"
          >
            <FaFilter></FaFilter>
          </Link>
        </div>
      </div>
    );
};

export default Upbar;