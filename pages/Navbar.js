import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FaAngleDown, FaBars, FaBell, FaEllipsisH, FaFileAlt, FaRegCalendarAlt, FaRegLightbulb, FaRegSun, FaRocket, FaSearch } from "react-icons/fa";

const Navbar = () => {
  const router = useRouter()

  const handleroute =(e)=>{
    e.preventDefault()
        router.push(e.target.href);
  }
  const headeritem = [
    <li key={1}>
      <Link
        className={`${
          router.asPath === "/" ? "bg-slate-500" : "bg-base-100"
        }`}
        href={"/"}
        onClick={handleroute}
      >
        Home
      </Link>
    </li>,
    <li key={2}>
      <a
        className={`${
          router.asPath === "/jobopenings" ? "bg-slate-500" : "bg-base-100"
        }`}
      >
        Job Opennings
        <FaAngleDown></FaAngleDown>
      </a>
      <ul className="p-2" style={{ zIndex: "45545" }}>
        <li className="bg-slate-300 w-48 text-black">
          <Link href={"/jobopenings"} onClick={handleroute}>
            Submenu 1
          </Link>
        </li>
        <li className="bg-slate-300 w-48 text-black">
          <Link href={"/"} onClick={handleroute}>
            Submenu 2
          </Link>
        </li>
      </ul>
    </li>,
    <li key={3}>
      <a
        className={`${
          router.asPath === "/Applications" ? "bg-slate-500" : "bg-base-100"
        }`}
      >
        Candidates
        <FaAngleDown></FaAngleDown>
      </a>
      <ul className="p-2" style={{ zIndex: "45545" }}>
        <li className={`bg-slate-300 w-48 text-black`}>
          <Link href={"/Applications"} onClick={handleroute}>
            Application
          </Link>
        </li>
        <li className="bg-slate-300 w-48 text-black">
          <Link href={"/"}>Submenu 2</Link>
        </li>
      </ul>
    </li>,
    <li key={4}>
      <Link
        className={`${
          router.asPath === "/Interview" ? "bg-slate-500" : "bg-base-100"
        }`}
        href={"/Interview"}
      >
        Interviews
      </Link>
    </li>,
    <li key={5}>
      <Link
        className={`${
          router.asPath === "/clients" ? "bg-slate-500" : "bg-base-100"
        }`}
        href={"/clients"}
      >
        Clients
      </Link>
    </li>,
    <li key={6}>
      <Link
        className={`${
          router.asPath === "/contucts" ? "bg-slate-500" : "bg-base-100"
        }`}
        href={"/contucts"}
      >
        Contacts
      </Link>
    </li>,
    <li key={7}>
      <Link
        className={`${
          router.asPath === "/campaigns" ? "bg-slate-500" : "bg-base-100"
        }`}
        href={"/campaigns"}
      >
        Campaigns
      </Link>
    </li>,
    <li key={8}>
      <Link href={"/"}>
        <FaEllipsisH></FaEllipsisH>
      </Link>
    </li>,
  ];
  return (
    <div className="navbar bg-base-100 p-0 m-0">
      <div className="">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {headeritem}
          </ul>
        </div>
        <a className="btn btn-ghost lg:flex hidden normal-case text-xl">
          <FaBars></FaBars>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal">{headeritem}</ul>
      </div>
      <div className="navbar-end ml-auto">
        <Link className="px-3" href={"/"}>
          <FaSearch className="w-6 h-6"></FaSearch>
        </Link>
        <Link className="px-3" href={"/"}>
          <FaRocket className="w-6 h-6"></FaRocket>
        </Link>
        <Link className="px-3" href={"/"}>
          <FaRegLightbulb className="w-6 h-6"></FaRegLightbulb>
        </Link>
        <Link className="px-3" href={"/"}>
          <FaBell className="w-6 h-6"></FaBell>
        </Link>
        <Link className="px-3" href={"/"}>
          <FaFileAlt className="w-6 h-6"></FaFileAlt>
        </Link>
        <Link className="px-3" href={"/"}>
          <FaRegCalendarAlt className="w-6 h-6"></FaRegCalendarAlt>
        </Link>
        <Link className="pl-3 pr-6" href={"/"}>
          <FaRegSun className="w-6 h-6"></FaRegSun>
        </Link>
        <Link className="pr-3 pl-6 border-l-2 border-slate-500" href={"/"}>
          <div className="avatar">
            <div className="w-12 h-10 rounded-xl">
              <Image
                width={50}
                height={50}
                src="https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="not found"
              />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
