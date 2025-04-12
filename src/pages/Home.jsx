import React from "react";
import { CardSection, CustomTimer, Footer, Heading, Navbar } from "../components";

function Home() {
  return (
    <>
      <Navbar />
      <div className="w-screen max-w-7xl flex flex-col items-center gap-5 bg-slate-800 mx-auto px-5 md:px-20">
        <div className="w-full h-full flex flex-col gap-5">
          <Heading />
          <CardSection />
          <CustomTimer />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
