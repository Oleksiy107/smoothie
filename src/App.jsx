import React from "react";
import FirstPage from "./Pages/FirstPage.jsx";
import SecondPage from "./Pages/SecondPage.jsx";
import ThirdPage from "./Pages/ThirdPage.jsx";
import FourPage from "./Pages/FourPage.jsx";
import AboutPage from "./Pages/AboutPage.jsx";
import BasketPage from "./Pages/BasketPage.jsx";
import { Routes, Route } from "react-router-dom";

// You are missing parentheses in the function declaration
function App() {
  return (
    <Routes>
      <Route path="/" element={<FirstPage />} />
      <Route path="/smoothie" element={<SecondPage />} />
      <Route path="/smoothieVegetable" element={<ThirdPage />} />
      <Route path="/smoothieFruits" element={<FourPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/basket" element={<BasketPage />} />
    </Routes>
  );
}

export default App;
