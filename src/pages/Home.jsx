import React from "react";
import {
  Card,
  CustomTimer,
  Footer,
  HeroSection,
  Navbar,
} from "../components";
import { NavLink } from "react-router";

const cardDetails = [
  {
    uri: `/pomodoro`,
    heading: `1) Pomodoro Technique ⏳`,
    description: `Work for 25 minutes, then take a 5-minute break to refresh. After completing four cycles, take a longer break (15 to 30 minutes). This helps maintain focus while preventing burnout.`,
    buttonText: `Let's Go`,
  },
  {
    uri: `52by17`,
    heading: `2) 52/17 Method 🔥`,
    description: `Work for 52 minutes with full concentration, then take a 17-minute break to recharge. Based on studies of highly productive people, this method optimizes deep work while preventing mental fatigue.`,
    buttonText: `Let's Go`,
  },
  {
    uri: `ultradian`,
    heading: `3) Ultradian Work Cycle ⚡`,
    description: `Work for 90 minutes in deep focus, then take a 30-minute break to align with the body's natural energy rhythms. This technique maximizes productivity and avoids cognitive overload.`,
    buttonText: `Let's Go`,
  },
];

function Home() {
  return (
    <>
      <Navbar />
      <div className="w-screen max-w-7xl flex flex-col items-center gap-5 bg-slate-800 mx-auto px-5 md:px-20">
        <div className="w-full h-full flex flex-col gap-5">
          {/* Hero Section HeroSection */}
          <HeroSection />

          {/* Main Section (Card Section) */}
          <div className="flex flex-col gap-5 py-10">
            <div className="m-auto text-center font-semibold">
              <h1 className="md:text-4xl text-2xl text-slate-300">
                Quick Start
              </h1>
              <p className="text-xs md:text-base text-slate-400 italic">
                From these renowned techniques
              </p>
            </div>
            <div className="flex flex-wrap gap-5 justify-center">
              {cardDetails.map((card) => {
                return (
                  <NavLink to={card.uri} key={card.uri}>
                    <Card
                      heading={card.heading}
                      description={card.description}
                      buttonText={`Let's Go`}
                    />
                  </NavLink>
                );
              })}
            </div>
          </div>
          <CustomTimer />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
