import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <div className="header-box">
      <div>
        <h2 className="heading-text">FakeShop</h2>
      </div>
    </div>
  );
};

export default Header;
