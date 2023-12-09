import React from "react";
import { Link } from "react-router-dom";
import BasketImg from "../assets/basket.png";
function Header() {
  return (
    <header className="header-outer">
      <div className="header-outer__header-inner header-inner">
        <div className="header-inner__header-logo"></div>
        <nav className="header-inner__header-navigation">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/basket">Basket</Link>
          <div className="header-inner__blockImg">
            <Link to="/basket">
              <img src={BasketImg} alt="" className="header-inner__img" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
export default Header;
