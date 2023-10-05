import React, { useState } from "react";
import { Link } from "react-router-dom";
import headerImage from "../assets/medium-logo.png";

const Header = () => {
  //change navbar color on scroll

  const [navbarColor, setNavbarColor] = useState(false);

  const toggleNavbarColor = () => {
    if (window.scrollY >= 420) {
      setNavbarColor(true);
      console.log("changed to white");
    } else {
      setNavbarColor(false);
      console.log("changed to yellow");
    }
  };

  window.addEventListener("scroll", toggleNavbarColor);

  return (
    <div
      className={
        navbarColor
          ? "header bg-white p-2 sticky top-0 bg-opacity-100 transition-all duration-200 ease-linear"
          : "header bg-yellow-500 p-2 sticky top-0 transition-all duration-200 ease-linear "
      }
    >
      <div className="header-content w-full md:w-[75%] m-auto flex justify-between items-center">
        <div className="logo ">
          <h1>
            <Link to="/">
              <img src={headerImage} alt="Medium" className="w-[10rem] py-2" />
            </Link>
          </h1>
        </div>
        <nav className="nav ">
          <ul className="nav-container flex gap-6 items-center justify-end">
            <li className="nav-item text-sm hidden lg:block">
              <Link to="ourstory"> Our story </Link>
            </li>
            <li className="nav-item text-sm hidden lg:block">
              {" "}
              <Link to="membership">Membership</Link>{" "}
            </li>
            <li className="nav-item text-sm hidden lg:block">
              {" "}
              <Link to="write">Write</Link>{" "}
            </li>
            <li className="nav-item text-sm hidden md:block">
              {" "}
              <Link to="signin">Sign In</Link>{" "}
            </li>
            <li
              className={
                navbarColor
                  ? "nav-item text-sm bg-green-600 rounded-[25px] px-4  py-[7.5px] text-white transition-all duration-200 ease-linear"
                  : "nav-item text-sm text-white rounded-[25px] px-4  py-[7.5px] bg-black transition-all duration-200 ease-linear"
              }
            >
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
