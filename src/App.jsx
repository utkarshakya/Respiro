import React, { useState } from "react";
import {Main, Navbar} from './components'

function App() {

    const [remainingTime, setRemainingTime] = useState(0)
    const [workTime, setWorkTime] = useState('')
    const [breakTime, setBreakTime] = useState('')
    const [cycles, setCycles] = useState('')
    
    function onSubmit(){
        
    }
  return (
    <>
      <div className="w-screen max-w-7xl flex flex-col items-center gap-5 bg-slate-800 mx-auto px-5 md:px-20">
        <Navbar />
        <Main />
      </div>
    </>
  );
}

export default App;
