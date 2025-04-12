import React from "react";
import Card from "./Card";
import { NavLink } from "react-router";

function CardSection() {
  return (
    <>
      <div className="flex flex-col gap-5 py-10">
        <div className="m-auto text-center font-semibold">
          <h1 className="md:text-4xl text-2xl text-slate-300">Quick Start</h1>
          <p className="text-xs md:text-base text-slate-400 italic">
            From these renowned techniques
          </p>
        </div>
        <div className="flex flex-wrap gap-5 justify-center">
          <NavLink to="/pomodoro">
            <Card
              heading={`1) Pomodoro Technique ⏳`}
              description={`Work for 25 minutes, then take a 5-minute break to refresh. After completing four cycles, take a longer break (15–30 minutes). This helps maintain focus while preventing burnout.`}
              buttonText={`Let's Go`}
            />
          </NavLink>
          <NavLink to="fifty-two-by-seventeen">
            <Card
              heading={`2) 52/17 Method 🔥`}
              description={`Work for 52 minutes with full concentration, then take a 17-minute break to recharge. Based on studies of highly productive people, this method optimizes deep work while preventing mental fatigue.`}
              buttonText={`Let's Go`}
            />
          </NavLink>
          <NavLink to="ultradian">
            <Card
              heading={`3) Ultradian Work Cycle ⚡`}
              description={`Work for 90 minutes in deep focus, then take a 30-minute break to align with the body's natural energy rhythms. This technique maximizes productivity and avoids cognitive overload.`}
              buttonText={`Let's Go`}
            />
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default CardSection;
