import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Movie App</div>
      </Link>
      <div className="user-image">
        <img height={50} width={50} src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="user" />
      </div>
    </div>
  );
};

export default Header;
