import React from "react";


function Nav() {
  return (
    <>
      <div className="w-full py-3 px-5 flex justify-between text-xs/loose border-b border-gray-500">
        <div className="flex gap-3 font-semibold">
            <button className="py-2 px-5 bg-gray-900/50 text-gray-300 rounded-md">Home</button>
            <button className="py-2 px-5 bg-gray-900/50 text-gray-300 rounded-md italic">Why Breaks?</button>
            <button className="py-2 px-5 bg-gray-900/50 text-gray-300 rounded-md">About</button>
        </div>
      </div>
    </>
  );
}

export default Nav;
