import React from "react";
import { NavLink } from "react-router";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/why", label: "Why?", mobileLabel: "?" },
];

const Navbar = () => {
  const linkClasses = ({ isActive }) =>
    `py-3 px-5 rounded-md font-semibold text-gray-300 bg-gray-800/50 ${
      isActive ? "cursor-default" : "hover:bg-gray-800 hover:text-white"
    }`;

  return (
    <nav className="w-full max-w-7xl p-5 flex justify-between flex-wrap gap-3 mx-auto">
      <ul className="flex gap-x-3 gap-y-1">
        {links.slice(0, 2).map((link) => (
          <li key={link.to}>
            <NavLink to={link.to} className={linkClasses}>
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
      <ul className="flex">
        <li className="hidden md:block">
          <NavLink to="/why" className={linkClasses}>
            Why?
          </NavLink>
        </li>
        <li className="md:hidden">
          <NavLink to="/why" className={linkClasses}>
            ?
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
