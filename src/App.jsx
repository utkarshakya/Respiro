import React from "react";
import {
  About,
  Custom,
  FiftyTwoBySeventeen,
  Home,
  Pomodoro,
  Ultradian,
  Why,
} from "./pages";
import { BrowserRouter, Route, Routes } from "react-router";
import { Navbar, Footer } from "./components";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="why" element={<Why />} />
          <Route path="pomodoro" element={<Pomodoro />} />
          <Route
            path="fifty-two-by-seventeen"
            element={<FiftyTwoBySeventeen />}
          />
          <Route path="ultradian" element={<Ultradian />} />
          <Route path="custom" element={<Custom />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
