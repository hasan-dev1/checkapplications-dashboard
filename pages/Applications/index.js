import React from 'react';
import { FaThLarge } from 'react-icons/fa';
import Applicationlayout from './Applicationlayout';

//fetching fake data for map
export const getStaticProps = async()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json()

    return {
        props:{
            data,
        }
    }
}
const Application = ({ data }) => {
  return (
    <Applicationlayout>

      {/* this code show as a children in application layout page */}
      <div className="">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="bg-slate-200 text-[16px] text-slate-500 rounded-0 py-6">
                <FaThLarge></FaThLarge>{" "}
              </th>
              <th className="bg-slate-200 text-[16px] text-slate-500 rounded-0 py-6">
                Rating
              </th>
              <th className="bg-slate-200 text-[16px] text-slate-500 rounded-0 py-6">
                Applications Name
              </th>
              <th className="bg-slate-200 text-[16px] text-slate-500 rounded-0 py-6">
                Hiring Pipeline
              </th>
              <th className="bg-slate-200 text-[16px] text-slate-500 rounded-0 py-6">
                Applications Status
              </th>
              <th className="bg-slate-200 text-[16px] text-slate-500 rounded-0 py-6">
                Applications ID
              </th>
              <th className="bg-slate-200 text-[16px] text-slate-500 rounded-0 py-6">
                Posting Title
              </th>
            </tr>
          </thead>
          <tbody>
            {data ? (
              data.slice(0, 10).map((curentelem, idx) => (
                <tr key={idx} className=" border-slate-300 border-b-2">
                  <th className="bg-slate-100">{idx + 1}</th>
                  <td className="bg-slate-100">not available</td>
                  <td className="bg-slate-100">Name not available</td>
                  <td className="bg-slate-100">not set</td>
                  <td className="bg-slate-100">good</td>
                  <td className="bg-slate-100">32136</td>
                  <td className="bg-slate-100">not collected</td>
                </tr>
              ))
            ) : (
              <tr className=" border-slate-300 border-b-2">
                <th className="bg-slate-100"></th>
                <td className="bg-slate-100"></td>
                <td className="bg-slate-100"></td>
                <td className="bg-slate-100"></td>
                <td className="bg-slate-100">Not Applications Found</td>
                <td className="bg-slate-100"></td>
                <td className="bg-slate-100"></td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="text-end">
          <select
            defaultValue={"10 Record per page"}
            className="bg-slate-200 text-black border-2 rounded border-slate-400 focus:outline-none m-5"
          >
            <option defaultValue={"5 Record per page"}>
              5 Record per page
            </option>
            <option defaultValue={"10 Record per page"}>
              10 Record per page
            </option>
            <option defaultValue={"15 Record per page"}>
              15 Record per page
            </option>
            <option defaultValue={"20 Record per page"}>
              20 Record per page
            </option>
          </select>
        </div>
      </div>
    </Applicationlayout>
  );
};

export default Application;