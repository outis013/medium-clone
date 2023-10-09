import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import mediumLogo from "../assets/white-medium-logo.png";
import darkMediumLogo from "../assets/medium-logo.png";
// import darkMediumLogo from "../assets/medium-logo.png";
import { authContext } from "../context/authContext";
import membershipImage1 from "../assets/membership-image1.png";
import membershipImage2 from "../assets/membership-image2.png";
import { testiominials } from "../assets/data";

import Slide from "./Carousel";

const footerLinks = ["About", "Terms", "Privacy", "Help", "Teams", "Press"];

const Membership = () => {
  const [navColor, setNavColor] = useState(false);

  const toggleNavColor = () => {
    if (window.scrollY >= 400) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };

  window.addEventListener("scroll", toggleNavColor);
  const { auth } = useContext(authContext);

  return (
    <div className="bg-blue-500">
      <header
        className={
          navColor
            ? " sticky w-full top-0 m-auto  border-b-[1px] border-white border-solid bg-white bg-opacity-70 transition-all ease-in-out duration-300 z-10"
            : " sticky w-full top-0 m-auto  border-b-[1px] border-white border-solid bg-blue-500 bg-opacity-70 transition-all ease-in-out duration-300 z-10 "
        }
      >
        <div
          className={
            navColor
              ? " flex lg:w-[98%] items-center justify-between text-black mx-auto transition-all duration-300 ease-in-out"
              : " flex lg:w-[98%] items-center justify-between text-white mx-auto transition-all duration-300 ease-in-out"
          }
        >
          <div className="py-6 ">
            <Link to="/">
              {navColor ? (
                <img
                  className="lg:w-[8rem] "
                  src={darkMediumLogo}
                  alt="medium"
                />
              ) : (
                <img className="lg:w-[8rem] " src={mediumLogo} alt="medium" />
              )}
            </Link>
          </div>
          {!auth.user && (
            <nav className=" list-none flex gap-6 justify-end items-center text-sm font-bold text-white">
              <li className="hidden md:block">
                <Link to="/ourstory">Our story</Link>
              </li>
              <li className="hidden md:block">
                <Link to="/membership" className="underline">
                  Membership
                </Link>
              </li>
              <li className="hidden md:block">
                <Link to="/write">Write</Link>
              </li>
              <li className="hidden md:block">
                <Link to="/signin">Sign in</Link>
              </li>
              <li>
                <Link
                  to="/plans"
                  className={
                    navColor
                      ? "bg-black text-blue-500 rounded-full px-5 py-2 ease-in-out  transition-all duration-300"
                      : "bg-black text-white rounded-full px-5 py-2 ease-in-out transition-all duration-300"
                  }
                >
                  Get unlimited access
                </Link>
              </li>
            </nav>
          )}
        </div>
      </header>

      <section className="landing w-full border-b-[1px] border-white border-solid h-[55vh] ">
        <div className="membership-content w-full h-full justify-center flex flex-col items-center text-white">
          <h1 className=" membership-content_heading text-4xl md:text-5xl lg:text-7xl lg:mt-28">
            {" "}
            Give us your money
          </h1>
          <p className=" w-[90%] lg:w-[60%] text-md  my-7 text-center">
            Look let's cut through the bullshit shall we? we are a bunch of well
            intentioned people and we really wanna change the world through
            writing but there's only so much we can do without your money.
          </p>
          <Link
            to="/plans"
            className="border-[1px] border-white hover:text-blue-500 hover:bg-white rounded-full px-6 py-2 transition-all duration-500 ease-in-out"
          >
            Get us paid bro
          </Link>
        </div>
      </section>

      <section className="w-full lg:h-[55vh] text-white border-b-[1px] border-solid">
        <div className="lg:w-[90%] lg:h-[90%] my-6 mx-auto flex lg:flex-row flex-col  justify-between">
          <div className=" lg:border-r-[2px] lg:border-white flex-1 flex flex-col gap-6 lg:w-full w-[90%] mx-auto ">
            <h1 className="lg:text-5xl text-3xl leading-11 tracking-wide">
              Look nothing good comes for free ok? Pay up
            </h1>
            <div className="membership-image_container w-full">
              <img
                className="w-[300px] h-[150px]"
                src={membershipImage1}
                alt="membership"
              />
            </div>
            <p>
              With your money in our pockets you can be rest assured that all
              our stories both the helpful and the damaging ones; heck even the
              ones we made up are all but yours to keep for the entire validity
              of your money. cool right?
            </p>
          </div>
          <div className="mb-8 md:hidden"></div>
          <div className="flex-1 ml-8 flex flex-col gap-6 lg:w-[90%] w-[90%]  ">
            <h1 className="lg:text-5xl text-3xl leading-11 tracking-wide">
              Look nothing good comes for free ok? Pay up
            </h1>
            <div className="membership-image_container w-full">
              <img
                className="w-[300px] h-[150px]"
                src={membershipImage2}
                alt="membership"
              />
            </div>
            <p>
              With your money in our pockets you can be rest assured that all
              our stories both the helpful and the damaging ones; heck even the
              ones we made up are all but yours to keep for the entire validity
              of your money. cool right?
            </p>
          </div>
        </div>
      </section>
      <div className="divider w-full h-10 bg-white"></div>

      <section className="testimonials w-full lg:h-[60vh] border-b-[1px] border-black border-solid bg-white">
        <div className="testimonials-content h-full bg-white flex flex-col gap-6  items-center lg:w-[80%] mx-auto">
          <div className="testimonials-content_heading my-10 lg:w-full w-[90%] mx-auto ">
            <h1 className="text-4xl md:text-center text-center">
              Why folks give us their money ...
            </h1>
          </div>

          <div className="">
            <Slide className="flex-1" />
          </div>
        </div>
      </section>

      <section className="h-[60vh] w-full bg-cyan-300">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <h1 className="lg:text-7xl text-3xl lg:w-[800px] w-[90%] text-center my-10">
            Explore a new system of thought process.
          </h1>
          <button className="px-5 py-2 text-white text-xl bg-black rounded-full">
            Get unlimited access
          </button>
        </div>
      </section>
      <footer className="bg-white flex items-center justify-between px-4">
        <div>
          <h1 className="py-4">
            <Link to="/">
              <img src={darkMediumLogo} alt="medium dark" />
            </Link>
          </h1>
        </div>
        <div className="flex items-center gap-4 list-none underline">
          {footerLinks &&
            footerLinks.map((item, index) => (
              <Link key={index} className="text-[10px]">
                {item}
              </Link>
            ))}
        </div>
      </footer>
    </div>
  );
};

export default Membership;
