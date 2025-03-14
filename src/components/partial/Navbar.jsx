import React from "react";

function Navbar() {
  return (
    <>
      <div className="w-full py-5 flex justify-between flex-wrap gap-3 text-xs border-b border-gray-500">
        <div className="flex gap-3 flex-wrap font-semibold">
          <button className="py-3 px-5 bg-gray-900/50 text-gray-300 cursor-pointer hover:bg-gray-900 hover:text-white rounded-md">
            Home
          </button>
          <button className="py-3 px-5 bg-gray-900/50 text-gray-300 cursor-pointer hover:bg-gray-900 hover:text-white rounded-md">
            About
          </button>
        </div>
        <div>
          <button className="hidden md:block py-3 px-5 bg-gray-900/50 text-gray-300 cursor-pointer hover:bg-gray-900 hover:text-white rounded-md italic">
            Why Breaks?
          </button>
          <button className="md:hidden py-3 px-5 bg-gray-900/50 text-gray-300 cursor-pointer hover:bg-gray-900 hover:text-white rounded-md italic">
            ?
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
