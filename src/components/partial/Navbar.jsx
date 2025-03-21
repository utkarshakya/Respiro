import React from "react";
import { NavLink } from "react-router";

function Navbar() {
  return (
    <>
      <nav className="w-full max-w-7xl p-5 flex justify-between flex-wrap gap-3 text-xs mx-auto">
        <div className="flex gap-3 flex-wrap font-semibold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${
                isActive ? "cursor-default" : "hover:bg-gray-800 hover:text-white"
              } py-3 px-5 text-gray-300 bg-gray-800/50 rounded-md`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${
                isActive ? "cursor-default" : "hover:bg-gray-800 hover:text-white"
              } py-3 px-5 text-gray-300 bg-gray-800/50 rounded-md`
            }
          >
            About
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/why"
            className={({ isActive }) =>
              `${
                isActive ? "cursor-default" : "hover:bg-gray-800 hover:text-white"
              } hidden md:block py-3 px-5 text-gray-300 bg-gray-800/50 rounded-md italic`
            }
          >
            Why Breaks?
          </NavLink>
          <NavLink
            to="/why"
            className={({ isActive }) =>
              `${
                isActive ? "cursor-default" : "hover:bg-gray-800 hover:text-white"
              } md:hidden py-3 px-5 text-gray-300 bg-gray-800/50 rounded-md italic`
            }
          >
            ?
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
