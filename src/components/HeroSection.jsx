import React from "react";

function HeroSection() {
  return (
    <div className="flex items-center justify-center py-40">
      <div className="text-center">
        <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-rose-500 to-violet-500 animate-pulse">
          Pause, Breathe, Create
        </h1>
        <p className="w-full text-sm md:text-xl text-gray-500 font-semibold px-5 mt-2 italic">
          A reminder that every moment of rest unlocks a spark of creativity and
          renewed energy.
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
