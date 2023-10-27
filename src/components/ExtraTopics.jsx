import React, { useContext, useEffect, useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsArrowUpRight, BsSearch } from "react-icons/bs";
import { CgArrowRight } from "react-icons/cg";
import { FaAngleLeft, FaAngleRight, FaBell } from "react-icons/fa";
import { HiPencil } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { GiMultiDirections } from "react-icons/gi";

import darkLogo from "../assets/black-logo.png";
import { authContext } from "../context/authContext";
import { v4 } from "uuid";

const ExtraTopics = () => {
  const { windowsWidth } = useContext(authContext);
  const [showExplore, setShowExplore] = useState(false);
  const explorerRef = useRef();
  const topicRef = useRef();
  const [extraTopics, setextraTopics] = useState([]);

  const handleTopicsScroll = (direction) => {
    if (direction === "right") {
      topicRef ? (topicRef.current.scrollLeft += 50) : null;
    } else {
      topicRef ? (topicRef.current.scrollLeft -= 50) : null;
    }
  };

  const showExploreButton = () => {
    setShowExplore((prev) => !prev);
  };

  const categories = [
    "Machine Learning",
    "Photography",
    "Literature",
    "Discovery",
    "Research",
    "Mathematics",
    "Culture",
    "Music",
    "Piracy",
    "Political Parties",
    "Election",
    "Cryptocurrency",
    "Discography",
  ];

  useEffect(() => {
    window.addEventListener("mousedown", function (e) {
      if (showExplore && !explorerRef.current.contains(e.target)) {
        setShowExplore(false);
        return;
      }
    });
  });

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        setextraTopics(data.users);
      });
  });
  return (
    <>
      <div className={"w-full sticky top-0 left-0   bg-white z-10"}>
        <div className="cursor-pointer my-2 border-b-[1px] py-2 gap-2 bg-white w-full h-full md:hidden flex justify-center items-center">
          <p>Open in app</p>
          <CgArrowRight className=" rotate-[-45deg]" />
        </div>
        <div className="w-full relative py-2">
          {showExplore && (
            <Link
              to="/extra-topics"
              className="flex items-center bg-white bg-opacity-100 opacity-100 z-2 shadow-black shadow-lg text-black rounded-lg w-[300px] justify-between px-4 py-3 absolute top-[57px] left-32"
            >
              <div ref={explorerRef} className="flex  items-start gap-2">
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
                  <img src={darkLogo} className="w-8 h-8 object-fill" alt="" />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <section className="w-full relative">
        <div className="w-[72%] absolute top-[20%] text-gray-500 text-xl flex justify-between items-center right-[14%]">
          <FaAngleLeft
            onClick={() => handleTopicsScroll("left")}
            className="cursor-pointer hover:scale-110 transition-all duration-300 ease-linear"
          />
          <FaAngleRight
            onClick={() => handleTopicsScroll("right")}
            className="cursor-pointer hover:scale-110 transition-all duration-300 ease-linear"
          />
        </div>
        <div
          ref={topicRef}
          className="w-[70%] flex items-center scroll-smooth gap-6 no-scrollbar overflow-x-scroll mx-auto my-5"
        >
          {categories &&
            categories.map((topic, index) => (
              <p
                key={v4()}
                className="whitespace-nowrap first-of-type:border-2 first-of-type:z-20  bg-gray-100 text-gray-800 text-sm px-2 py-1 rounded-full"
              >
                {topic}
              </p>
            ))}
        </div>
      </section>

      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center my-3 text-3xl">Explore topics</h1>

        <div className="lg:w-[600px] text-center flex items-center gap-2 mb-5 bg-gray-50 px-3 py-2 rounded-full">
          <BsSearch className="text-gray-400 text-xl" />
          <input
            type="text"
            placeholder="Search all topics"
            className=" bg-none outline-none w-full p-2 bg-gray-50"
          />
        </div>
        <div className="flex items-center gap-4">
          <div>
            <h2 className="font-thin text-gray-500">Recommended: </h2>
          </div>
          <div className="flex items-center gap-4">
            <p className="hover:underline text-sm cursor-pointer transition-all duration-300 ease-linear">
              Programming
            </p>
            <p className="hover:underline text-sm cursor-pointer transition-all duration-300 ease-linear">
              Technology
            </p>
            <p className="hover:underline text-sm cursor-pointer transition-all duration-300 ease-linear">
              Self Improvement
            </p>
          </div>
        </div>
      </div>

      <section className=" mt-[10vh] w-full ">
        <div className=" w-[80%] mx-auto ">
          <table className="table lg:w-[70%]">
            <thead className="table-head w-full flex items-center justify-start gap-96 text-left">
              <tr>
                <th>Life</th>
                <th className="whitespace-nowrap">Self Improvement</th>
                <th>Work</th>
              </tr>
            </thead>
            <tbody>{}</tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default ExtraTopics;
