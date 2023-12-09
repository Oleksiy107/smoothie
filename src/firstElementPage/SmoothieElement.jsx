import React from "react";
import { Link } from "react-router-dom";
function SmoothieEl() {
  return (
    <div className="smoothie-block">
      <div className="moothie-block__wrap1">
        <h2 className="smoothie-block__title">
          <Link to="/smoothie">Smoothie</Link>
        </h2>
        <p className="smoothie-block__text">
          Smoothie:you can order ready smoothe
        </p>
      </div>
      <div className="smoothie-block__wrap2">
        <h2 className="smoothie-block__title">Smoothie Create</h2>
        <p className="smoothie-block__text">
          <Link to="/smoothieVegetable">vegetables:</Link>
        </p>
        <p className="smoothie-block__text">
          <Link to="/smoothieFruits">fruits:</Link>
        </p>
      </div>
    </div>
  );
}
export default SmoothieEl;
