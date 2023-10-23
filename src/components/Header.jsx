import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import headerImage from "../assets/medium-logo.png";
import darkLogo from "../assets/black-logo.png";
import { authContext } from "../context/authContext";

import { FaBell } from "react-icons/fa";
import { HiPencil } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";
import { GiMultiDirections } from "react-icons/gi";
import { BsArrowUpRight } from "react-icons/bs";
import { CgArrowRight } from "react-icons/cg";
import { AiOutlineSearch } from "react-icons/ai";

const Header = ({ setModal }) => {
  const { auth, windowsWidth } = useContext(authContext);
  //change navbar color on scroll

  const [navbarColor, setNavbarColor] = useState(false);
  const [showExplore, setShowExplore] = useState(false);

  //show or hide heading on scroll

  const toggleNavbarColor = () => {
    if (window.scrollY >= 420) {
      setNavbarColor(true);
    } else {
      setNavbarColor(false);
    }
  };

  const showExploreButton = () => {
    setShowExplore((prev) => !prev);
  };

  window.addEventListener("scroll", toggleNavbarColor);

  return (
    <>
      {!auth.user ? (
        <div
          className={
            navbarColor
              ? "header bg-white p-2 sticky top-0 bg-opacity-100 transition-all duration-200 ease-linear"
              : "header bg-yellow-500 p-2 sticky top-0 transition-all duration-200 ease-linear"
          }
        >
          <div className="header-content w-full md:w-[75%] m-auto flex justify-between items-center">
            <div className="logo ">
              <h1>
                <Link to="/">
                  {auth.user ? (
                    <img src={darkLogo} alt="Medium" className=" py-2" />
                  ) : (
                    <img
                      src={headerImage}
                      alt="Medium"
                      className="w-[10rem] py-2"
                    />
                  )}
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
                  <Link to="write">Write</Link>
                </li>
                <li
                  onClick={() => setModal((prev) => !prev)}
                  className="nav-item text-sm hidden md:block cursor-pointer"
                >
                  {" "}
                  Sign In
                </li>
                <li
                  onClick={() => setModal((prev) => !prev)}
                  className={
                    navbarColor
                      ? "nav-item text-sm bg-green-600 rounded-[25px] px-4  py-[7.5px] text-white transition-all duration-200 ease-linear cursor-pointer"
                      : "nav-item text-sm text-white rounded-[25px] px-4  py-[7.5px] bg-black transition-all duration-200 ease-linear cursor-pointer"
                  }
                >
                  Get started
                </li>
              </ul>
            </nav>
          </div>
        </div>
      ) : (
        <div className={"w-full sticky top-0 left-0   bg-white z-10"}>
          <div className="cursor-pointer my-2 border-b-[1px] py-2 gap-2 bg-white w-full h-full md:hidden flex justify-center items-center">
            <p>Open in app</p>
            <CgArrowRight className=" rotate-[-45deg]" />
          </div>
          <div className="w-full relative py-2">
            {showExplore && (
              <Link
                to="#"
                className="flex items-center bg-white bg-opacity-100 opacity-100 z-2 shadow-black shadow-lg text-black rounded-lg w-[300px] justify-between px-4 py-3 absolute top-[57px] left-32"
              >
                <div className="flex  items-start gap-2">
                  <GiMultiDirections className="rotate-[30deg]" />
                  <h3>Explore topics</h3>
                </div>

                <BsArrowUpRight />
              </Link>
            )}
            <div className="flex justify-between items-center  w-[95%] m-auto border-b-[1px] border-opacity-10">
              <div className="flex items-center">
                <Link to="/" className="">
                  <img src={darkLogo} alt="Medium Logo" className="" />
                </Link>

                {windowsWidth > 550 && (
                  <div className="p-2 md:block">
                    <div className="flex items-center py-1 px-2 bg-black bg-opacity-10 rounded-full placeholder:text-[10px]">
                      <IoIosSearch className="text-3xl" />
                      <input
                        onClick={showExploreButton}
                        type="text"
                        placeholder="Search Medium"
                        className="outline-none border-none rounded-full p-1"
                      />
                    </div>
                  </div>
                )}
              </div>
              <nav className="nav">
                <ul className="flex items-center text-gray-600 gap-4 text-sm cursor-pointer">
                  {windowsWidth >= 730 && (
                    <Link to="/compose" className="flex items-center gap-2">
                      <HiPencil className="text-2xl font-thin" />
                      <p className="text-lg">Write</p>
                    </Link>
                  )}
                  {windowsWidth <= 550 && (
                    <li className=" cursor-pointer">
                      <AiOutlineSearch className="text-xl" />
                    </li>
                  )}
                  <li className="cursor-point">
                    <Link to="/notifications">
                      <FaBell className="text-xl" />
                    </Link>
                  </li>
                  <li className="cursor-point">
                    <img
                      src={darkLogo}
                      className="w-8 h-8 object-fill"
                      alt=""
                    />
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
