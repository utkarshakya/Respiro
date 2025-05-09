import React, { useEffect, useState } from "react";
import { Navbar, Footer } from "../../components";
import { useLocation } from "react-router";
import { clockDigit, getTimerInfoFromURL } from "../../scripts/functions";

function Custom() {
  const [timerInfo, setTimerInfo] = useState({
    work: null,
    break: null,
    cycle: null,
  });
  const [showTimer, setShowTimer] = useState(null);
  const [showTimerHeroSection, setShowTimerHeroSection] = useState("Work With Focus");
  const [isBreak, setIsBreak] = useState(false)
  const location = useLocation();

  function setTimer(isWork = true) {
    let interval;
    let timer;

    if(!isWork){
      timer = (timerInfo.break)*60
    }else{
      timer = (timerInfo.work)*60;
    }

    function updateTimer() {
      const hours = Math.floor(timer / 3600);
      const minutes = Math.floor(timer / 60);
      const seconds = timer % 60;
      setShowTimer(
        `${clockDigit(hours)}:${clockDigit(minutes)}:${clockDigit(seconds)}`
      );

      if (timer > 0) {
        timer--;
      } else {
        clearInterval(interval);
        setIsBreak(true)
      }
    }
    updateTimer()

    interval = setInterval(updateTimer, 1000);

  }

  useEffect(() => {
    if (timerInfo.work) {
      setTimer();
    }
    if(isBreak){
      setTimer(false)
    }
  }, [timerInfo, isBreak]);

  useEffect(() => {
    if (location.search.includes("?")) {
      setTimerInfo(getTimerInfoFromURL(location.search));
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="w-screen max-w-7xl flex flex-col items-center gap-5 bg-slate-800 mx-auto px-5 md:px-20 py-40">
        <div className="w-full flex flex-col items-center gap-1">
          <h3 className="font-semibold text-gray-400 md:text-2xl">
            {showTimerHeroSection}
          </h3>
          <p className="font-bold text-4xl text-gray-300 md:text-7xl">
            {showTimer ?? "00:00:00"}
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Custom;
