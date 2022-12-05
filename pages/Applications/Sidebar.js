import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Sidebar = () => {
    return (
      <div>
        <h3 className="text-slate-500 text-xl mb-6 flex justify-between items-center">
          <span>Filter Applications By</span>
          <span><FaSearch></FaSearch></span>
        </h3>

        <div>
          <div className="pb-2 border-b-2 border-slate-300">
            <div className="flex justify-start items-center my-2">
              <input
                type="checkbox"
                className="checkbox border-2 border-slate-500"
              />
              <p className="text-xl mx-2 mb-1">Posting Title</p>
            </div>
            <div className="flex justify-start items-center my-2">
              <input
                type="checkbox"
                className="checkbox border-2 border-slate-500"
              />
              <p className="text-xl mx-2 mb-1">Applications Status</p>
            </div>
          </div>

          <div className="pt-2">
            <div className="flex justify-start items-center my-2">
              <input
                type="checkbox"
                className="checkbox border-2 border-slate-500"
              />
              <p className="text-xl mx-2 mb-1">To-Dos</p>
            </div>
            <div className="flex justify-start items-center my-2">
              <input
                type="checkbox"
                className="checkbox border-2 border-slate-500"
              />
              <p className="text-xl mx-2 mb-1">Notes</p>
            </div>
            <div className="flex justify-start items-center my-2">
              <input
                type="checkbox"
                className="checkbox border-2 border-slate-500"
              />
              <p className="text-xl mx-2 mb-1">Attachment Categories</p>
            </div>
            <div className="flex justify-start items-center my-2">
              <input
                type="checkbox"
                className="checkbox border-2 border-slate-500"
              />
              <p className="text-xl mx-2 mb-1">Rating</p>
            </div>
            <div className="flex justify-start items-center my-2">
              <input
                type="checkbox"
                className="checkbox border-2 border-slate-500"
              />
              <p className="text-xl mx-2 mb-1">Last Name</p>
            </div>
            <div className="flex justify-start items-center my-2">
              <input
                type="checkbox"
                className="checkbox border-2 border-slate-500"
              />
              <p className="text-xl mx-2 mb-1">Hiring Pipeline</p>
            </div>
            <div className="flex justify-start items-center my-2">
              <input
                type="checkbox"
                className="checkbox border-2 border-slate-500"
              />
              <p className="text-xl mx-2 mb-1">Application ID</p>
            </div>
            <div className="flex justify-start items-center my-2">
              <input
                type="checkbox"
                className="checkbox border-2 border-slate-500"
              />
              <p className="text-xl mx-2 mb-1">Account Manager</p>
            </div>
            <div className="flex justify-start items-center my-2">
              <input
                type="checkbox"
                className="checkbox border-2 border-slate-500"
              />
              <p className="text-xl mx-2 mb-1">Application Owner</p>
            </div>
            <div className="flex justify-start items-center my-2">
              <input
                type="checkbox"
                className="checkbox border-2 border-slate-500"
              />
              <p className="text-xl mx-2 mb-1">Application Source</p>
            </div>
            <div className="flex justify-start items-center my-2">
              <input
                type="checkbox"
                className="checkbox border-2 border-slate-500"
              />
              <p className="text-xl mx-2 mb-1">Assigned Recruiter (s)</p>
            </div>
            <div className="flex justify-start items-center my-2">
              <input
                type="checkbox"
                className="checkbox border-2 border-slate-500"
              />
              <p className="text-xl mx-2 mb-1">Associated Tags</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Sidebar;