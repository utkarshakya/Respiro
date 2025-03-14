import React from "react";
import { CardSection, CustomTimer, Heading, Navbar } from "./partial";

function Home() {
  return (
    <>
      <div className="w-full h-full flex flex-col gap-5">
        <Navbar />
        <Heading />
        <CardSection />
        <CustomTimer />
      </div>
    </>
  );
}

export default Home;
