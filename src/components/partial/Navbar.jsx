import React from "react";
import { NavLink } from "react-router";

function Navbar() {
  return (
    <>
      <nav className="w-full max-w-7xl p-5 flex justify-between flex-wrap gap-3 text-xs mx-auto">
        <div className="flex gap-3 flex-wrap font-semibold">
          <NavLink to="/">
            <button className="py-3 px-5 bg-gray-800/50 text-gray-300 cursor-pointer hover:bg-gray-800 hover:text-white rounded-md">
              Home
            </button>
          </NavLink>
          <NavLink to="/about">
            <button className="py-3 px-5 bg-gray-800/50 text-gray-300 cursor-pointer hover:bg-gray-800 hover:text-white rounded-md">
              About
            </button>
          </NavLink>
        </div>
        <div>
          <NavLink to="/why-breaks-are-important">
            <button className="hidden md:block py-3 px-5 bg-gray-800/50 text-gray-300 cursor-pointer hover:bg-gray-800 hover:text-white rounded-md italic">
              Why Breaks?
            </button>
            <button className="md:hidden py-3 px-5 bg-gray-800/50 text-gray-300 cursor-pointer hover:bg-gray-800 hover:text-white rounded-md italic">
              ?
            </button>
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
