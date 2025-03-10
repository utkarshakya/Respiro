import React from "react";

function Heading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-3xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-teal-500 to-indigo-500 animate-pulse">
          Pause, Breathe, Create
        </h1>
        <p className="w-full text-sm md:text-xl text-gray-500 font-semibold px-5 italic">
          A reminder that every moment of rest unlocks a spark of creativity and
          renewed energy.
        </p>
      </div>
    </div>
  );
}

export default Heading;
