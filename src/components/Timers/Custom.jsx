import React, { useEffect, useState } from "react";
import { Navbar, Footer } from "./../partial";
import { useLocation } from "react-router";

function Custom() {
  const [timerInfo, setTimerInfo] = useState({});
  const location = useLocation()

  function getInfo() {
    const query = location.search.split("?");
    query.shift();
    const obj = {};
    query.forEach((element) => {
      const temp = element.split("=");
      obj[temp[0]] = Number(temp[1]);
    });
    setTimerInfo(obj);
  }

  useEffect(() => {
    getInfo()
  }, [location]);

  return (
    <>
      <Navbar />
      <div className="w-screen max-w-7xl flex flex-col items-center gap-5 bg-slate-800 mx-auto px-5 md:px-20">
        <div className="w-full h-full flex flex-col gap-5">
          <p>{timerInfo.work ? timerInfo.work : ""}</p>
          <p>{timerInfo.break ? timerInfo.break : ""}</p>
          <p>{timerInfo.cycle ? timerInfo.cycle : ""}</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Custom;
