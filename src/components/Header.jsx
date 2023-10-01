import React from "react";
import { Link } from "react-router-dom";
import headerImage from "../assets/medium-logo.png";

const Header = () => {
  return (
    <div className="header bg-yellow-500 p-2">
      <div className="header-content w-[75%] m-auto flex justify-between items-center">
        <div className="logo ">
          <h1>
            <Link to="/">
              <img src={headerImage} alt="Medium" className="w-[10rem] py-2" />
            </Link>
          </h1>
        </div>
        <nav className="nav ">
          <ul className="nav-container flex gap-6 items-center justify-end">
            <li className="nav-item text-sm">
              <Link to="ourstory"> Our story </Link>
            </li>
            <li className="nav-item text-sm">
              {" "}
              <Link to="membership">Membership</Link>{" "}
            </li>
            <li className="nav-item text-sm">
              {" "}
              <Link to="write">Write</Link>{" "}
            </li>
            <li className="nav-item text-sm">
              {" "}
              <Link to="signin">Sign In</Link>{" "}
            </li>
            <li className="nav-item text-sm text-white rounded-[25px] px-4  py-[7.5px] bg-black">
              {" "}
              <Link to="getstarted">Get started</Link>{" "}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
