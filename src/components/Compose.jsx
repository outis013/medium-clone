import React, { useContext, useEffect, useRef, useState } from "react";
import MediumLogo from "../assets/medium-logo2.png";
import { authContext } from "../context/authContext";
import { IoMdOptions } from "react-icons/io";
import { BsBell } from "react-icons/bs";
import { Link } from "react-router-dom";
import { writeOptions } from "../assets/data";
import { v4 } from "uuid";
import Textarea from "./Textarea";
import { hints } from "../assets/data";
import { FaAngleLeft, FaAngleRight, FaPlus } from "react-icons/fa";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Compose = () => {
  const [showOptions, setShowOptions] = useState(false);
  const {
    auth,
    showHints,
    setShowHints,
    notifications,
    showNotifications,
    setshowNotifications,
  } = useContext(authContext);
  let [hintIndex, setHintIndex] = useState(0);

  const handleSwitch = (direction) => {
    if (direction === "right") {
      if (hintIndex < hints.length - 1) {
        hintIndex += 1;
        setHintIndex(hintIndex);
      } else if (hintIndex === hints.length - 1) {
        hintIndex = 0;
        setHintIndex(hintIndex);
      }
    } else {
      if (
        hintIndex === hints.length - 1 ||
        (hintIndex < hints.length - 1 && hintIndex !== 0)
      ) {
        hintIndex -= 1;
        setHintIndex(hintIndex);
      } else if (hintIndex === 0) {
        setHintIndex(hints.length - 1);
      }
    }
  };

  const optionsRef = useRef();
  const notificationsRef = useRef();
  const profileRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", function (e) {
      if (showOptions && !optionsRef.current.contains(e.target)) {
        setShowOptions(false);
        return;
      } else if (
        showNotifications &&
        !notificationsRef?.current?.contains(e.target)
      ) {
        console.log(notificationsRef.current);
        setshowNotifications(false);
        return;
      }
    });
  });

  return (
    <>
      <div className="w-full md:px-4 mx-auto lg:w-[75%]">
        <header className="w-full flex justify-between items-center py-4 relative px-10">
          <div className="flex items-center gap-2">
            <h1>
              <Link to="/">
                <img src={MediumLogo} alt="Medium Logo" />
              </Link>
            </h1>

            <p>Draft in {auth?.user.name}</p>
          </div>

          <nav className="flex items-center gap-6 list-none">
            <Link className="text-sm rounded-full px-2 py-1 bg-green-600 text-white">
              Publish
            </Link>
            <li>
              <IoMdOptions
                className="cursor-pointer "
                onClick={() => setShowOptions((prev) => !prev)}
              />
              {showOptions && (
                <div
                  ref={optionsRef}
                  className=" z-10 absolute bg-white top-[65px] rounded-lg right-24 px-4 py-2 border-[1px] border-gray-300"
                >
                  {writeOptions &&
                    writeOptions.map((option) => (
                      <p className="my-4">
                        <Link
                          key={v4()}
                          className="text-sm  w-full h-full hover:opacity-40 transition-all duration-300 ease-linear"
                        >
                          {option}
                        </Link>
                      </p>
                    ))}
                </div>
              )}
            </li>
            <li className="">
              <BsBell
                onClick={() => setshowNotifications((prev) => !prev)}
                className=" cursor-pointer"
              />
              {showNotifications && (
                <div
                  ref={notificationsRef}
                  className=" extra shadow-sm  shadow-black absolute top-[80px] md:top-[65px] md:w-88 w-full rounded-lg right-0 md:right-[-60px] px-4 py-2 border-[1px] border-gray-300 z-10 bg-white"
                >
                  {notifications &&
                    notifications.map((message, index) => {
                      if (index > 4) return;
                      return (
                        <div
                          key={v4()}
                          className="my-4 border-t-[1px] cursor-pointer border-gray-500 first:border-none border-opacity-40"
                        >
                          <div className=" flex items-center gap-2 w-full font-bold">
                            <img
                              src={MediumLogo}
                              className="w-8 h-8 rounded-full"
                              alt=""
                            />
                            <h2 className="w-full  text-xs flex items-center gap-2 h-full hover:opacity-40 transition-all duration-300 ease-linear">
                              <p>{message.user.name}</p>
                              <p className="font-thin">Started following you</p>
                            </h2>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-gary-300 font-thin">
                            <p>
                              {monthNames[new Date().getMonth()].substring(
                                0,
                                3
                              )}
                              ,
                            </p>
                            <p> {new Date().getDate()}</p>
                            <p>{new Date().getFullYear()}</p>
                          </div>
                        </div>
                      );
                    })}

                  <div className="my-2 w-full border-t-[1px] border-gray-500 border-opacity-40">
                    <div className="w-full flex items-center justify-between pt-2 text-gary-400 text-xs">
                      <h2 className=" cursor-pointer">Older notifications</h2>
                      <h2 className=" cursor-pointer">Your stats</h2>
                    </div>
                  </div>
                </div>
              )}
            </li>
            <li>
              <img
                className="w-10 h-10 rounded-full border-[1px] p-1"
                src={MediumLogo}
                alt="user image"
              />

              <div ref={profileRef} className=""></div>
            </li>
          </nav>
        </header>

        <section className="w-[95%] mx-auto md:ml-[8rem] mt-[2rem]">
          <div className="">
            <Textarea type="title" placeholder="Give your story a title..." />
            <Textarea
              type="content"
              placeholder="The world awaits your story..."
            />
          </div>
        </section>

        {showHints && (
          <section className="mt-[40vh]  h-10 w-[90%] md:w-full relative text-center mx-auto">
            <div className="absolute top-0 right-0 z-10">
              <FaPlus
                onClick={() => setShowHints(false)}
                className="text-3xl font-thin text-gray-400 rotate-45 hover:-rotate-45 transition-all duration-300 ease-in-out cursor-pointer"
              />
            </div>
            <div className=" w-full flex items-center justify-between absolute top-20 text-2xl font-thin text-gray-600 z-10">
              <div className="cursor-pointer">
                <FaAngleLeft
                  onClick={() => handleSwitch("left")}
                  className="hover:text-gray-400 cursor-pointer transition-all duration-300 ease-linear"
                />
              </div>
              <div className="cursor-pointer">
                <FaAngleRight
                  onClick={() => handleSwitch("right")}
                  className="hover:text-gray-400 cursor-pointer transition-all duration-300 ease-linear"
                />
              </div>
            </div>
            <div className="md:w-full w-[90%] relative text-center">
              <img
                src={hints[hintIndex].url}
                className="w-[100%] md:w-[60%] m-auto"
                alt={`Hint${0}`}
              />
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default Compose;
