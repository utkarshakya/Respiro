import React from "react";

function Card({ heading, description, buttonText = "Check it out" }) {
  return (
    <>
      <div className="relative w-full h-full max-w-[360px] min-h-[180px] p-5 flex flex-col justify-around items-start gap-3 bg-gray-700 rounded">
        <h2 className="font-semibold">{heading}</h2>
        <p className="text-xs text-gray-300">{description}</p>
        <button className="text-xs font-semibold text-blue-300">
          {buttonText} &rarr;
        </button>
        <span className="absolute inset-0 hover:cursor-pointer hover:bg-gray-900/10"></span>
      </div>
    </>
  );
}

export default Card;
