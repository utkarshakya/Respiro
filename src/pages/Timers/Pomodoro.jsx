import React from "react";
import { CardForInfo } from "../../components";
import useTimer from "../../hooks/useTimer";

function Pomodoro() {
  const { formatTime, start, pause, reset, isRunning } = useTimer(20 * 60);

  const { hours, minutes, seconds } = formatTime();

  return (
    <>
      <div className="w-screen max-w-7xl flex flex-col items-center gap-5 bg-slate-800 mx-auto p-5 md:px-20">
        {/* Introduction */}
        <div className="">
          <h1>Pomodoro</h1>
        </div>

        {/* Timer */}
        <div className="w-fit mx-auto grid grid-cols-3 text-center mb-10 gap-5">
          <div className="grid grid-rows-2 gap-3">
            <span className="text-5xl">{hours}</span>
            <span className="text-sm">Hours</span>
          </div>
          <div className="grid grid-rows-2 gap-3">
            <span className="text-5xl">{minutes}</span>
            <span className="text-sm">Minutes</span>
          </div>
          <div className="grid grid-rows-2 gap-3">
            <span className="text-5xl">{seconds}</span>
            <span className="text-sm">Seconds</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="w-fit mx-auto flex gap-5">
          <button
            className="w-fit mx-auto mb-10 rounded-full px-10 hover:px-12 transition-padding ease-in-out duration-300 cursor-pointer py-3 font-semibold bg-pink-500 hover:bg-pink-600"
            onClick={!isRunning ? start : pause}
          >
            {!isRunning ? "Start" : "Pause"}
          </button>
          <button
            className="w-fit mx-auto mb-10 rounded-full px-10 hover:px-12 transition-padding ease-in-out duration-300 cursor-pointer py-3 font-semibold bg-pink-500 hover:bg-pink-600"
            onClick={reset}
          >
            {"Reset"}
          </button>
        </div>

        {/* Key Features */}
        <div className="flex flex-col">
          <h3 className="font-bold text-3xl">Key Features</h3>
          <div>
            <CardForInfo
              title={`25-Minute Focus`}
              description={`Dive into a single task for a dedicated 25-minute work session. This “Pomodoro” window trains your brain to concentrate without interruptions.`}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Pomodoro;
