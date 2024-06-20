import React from "react";
import { FaHome, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";
import NavLink from "./NavLink"; // Import the NavLink component

const Sidebar = ({ fixed, onSignOut }) => {
  const positionClass = fixed ? "fixed" : "sticky";

  return (
    <div className={`${positionClass} top-0 h-screen w-[244px] bg-white shadow-lg border-r border-gray-300 overflow-auto`}>
      <div className="p-5 px-[40px] border-b border-gray-200 mb-4">
        <h1 className="text-gray-800 font-dm-sans font-medium text-2xl">My App</h1>
      </div>
      <ul className="space-y-2 p-0 m-0">
        <NavLink Icon={FaHome} text="Dashboard" path="dashboard" onSignOut={onSignOut}/>
        <NavLink Icon={FaUser} text="Profile" path="profile" onSignOut={onSignOut}/>
        <NavLink Icon={FaCog} text="Settings" path="settings" onSignOut={onSignOut}/>
        <NavLink Icon={FaSignOutAlt} text="Logout" path="" onSignOut={onSignOut} />
      </ul>
    </div>
  );
};

export default Sidebar;
