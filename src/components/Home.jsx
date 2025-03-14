import React from "react";
import { CardSection, Heading, Navbar } from "./partial";

function Home() {
  return (
    <>
      <div className="w-full h-full flex flex-col gap-5">
        <Navbar />
        <Heading />
        <CardSection />
      </div>
    </>
  );
}

export default Home;
