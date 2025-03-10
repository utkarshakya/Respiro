import React, { useState } from "react";
import {Heading, Nav} from './components'

function App() {

    const [remainingTime, setRemainingTime] = useState(0)
    const [workTime, setWorkTime] = useState('')
    const [breakTime, setBreakTime] = useState('')
    const [cycles, setCycles] = useState('')
    
    function onSubmit(){
        
    }
  return (
    <>
      <div className="h-screen w-screen max-w-7xl flex flex-col items-center gap-5 bg-slate-800 mx-auto">
        <Nav />
        <Heading />

        <div className="w-full max-w-xl px-4 py-10 flex flex-col items-center gap-5 bg-slate-800">
          <div className="w-full text-4xl md:text-5xl text-center">{remainingTime}</div>
          <hr className="w-full h-0.5 text-gray-500"/>
          <input
            type="text"
            placeholder="Work Duration (in minutes)"
            value={workTime}
            onChange={(e) => setWorkTime(e.target.value)}
            required
            className="py-3 px-5 w-full max-w-[480px] text-sm md:text-base bg-gray-900 rounded-lg"
          />
          <input
            type="text"
            placeholder="Break Duration (in minutes)"
            value={breakTime}
            onChange={(e) => setBreakTime(e.target.value)}
            required
            className="py-3 px-5 w-full max-w-[480px] text-sm md:text-base bg-gray-900 rounded-lg"
          />
          <input
            type="text"
            placeholder="No. Of Cycles"
            value={cycles}
            onChange={(e) => setCycles(e.target.value)}
            required
            className="py-3 px-5 w-full max-w-[480px] text-sm md:text-base bg-gray-900 rounded-lg"
          />
          <div className="w-full max-w-[480px] flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setResetButton(true)}
              className="px-7 py-3 text-sm md:text-base bg-gray-900 rounded-lg"
            >
              RESET
            </button>
            <button
              type="button"
              className="px-7 py-3 text-sm md:text-base bg-gray-900 rounded-lg"
            >
              START
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
