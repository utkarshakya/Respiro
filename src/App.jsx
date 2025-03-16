import React from "react";
import { About, Custom, FiftyTwoBySeventeen, Home, Pomodoro, Ultradian, Why } from "./components";
import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="why" element={<Why />} />
        <Route path="pomodoro" element={<Pomodoro />} />
        <Route path="fifty-two-by-seventeen" element={<FiftyTwoBySeventeen />} />
        <Route path="ultradian" element={<Ultradian />} />
        <Route path="custom" element={<Custom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
