import React from "react";

function CustomTimer() {
  return (
    <>
      <div className="w-full flex flex-col items-center gap-5 py-10">
        <h1 className="text-2xl md:text-4xl font-semibold text-slate-300">
          Set Custom Timer
        </h1>
        <div className="w-full flex flex-col sm:flex-row gap-y-2 gap-x-5 justify-center">
          <div className="w-full max-w-sm flex flex-col items-center gap-3 bg-gray-700/30 p-5 rounded">
            <input
              type="number"
              placeholder="Working Duration (in minutes)"
              className="w-full bg-gray-700 px-5 py-3 rounded outline-none"
            ></input>
            <input
              type="number"
              placeholder="Breaks Duration (in minutes)"
              className="w-full bg-gray-700 px-5 py-3 rounded outline-none"
            ></input>
            <input
              type="number"
              placeholder="No. Of Cycles"
              className="w-full bg-gray-700 px-5 py-3 rounded outline-none"
            ></input>
            <button className="w-full mt-2 px-8 py-2 bg-blue-700 hover:bg-blue-700/80 rounded cursor-pointer font-semibold">
              Let's Get Start
            </button>
          </div>
          <div className="w-full max-w-sm flex flex-col gap-3 bg-gray-700/30 p-5 text-sm text-slate-400 cursor-default rounded">
            <h3 className="text-xl">Note:</h3>
            <p>
              1. <span className="font-semibold">Working Duration</span> is the
              maximum time you can work continuously in one sitting.
            </p>
            <p>
              2. <span className="font-semibold">Breaks Duration</span> as name
              suggests is the duration of a break.
            </p>
            <p>
              3. <span className="font-semibold">No. Of Cycles</span> are the
              total number of sittings you want to complete your work.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomTimer;
