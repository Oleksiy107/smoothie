import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer-block">
      <div className="footer-block__footer-inner footer-inner">
        <div className="footer-inner__footer-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/basket">Basket</Link>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
