import React, { useContext, useState } from "react";
import MediumLogo from "../assets/medium-logo2.png";
import { authContext } from "../context/authContext";
import { IoMdOptions } from "react-icons/io";
import { BsBell } from "react-icons/bs";
import { Link } from "react-router-dom";
import { writeOptions } from "../assets/data";
import { v4 } from "uuid";

const Compose = () => {
  const [showOptions, setShowOptions] = useState(false);
  const { auth } = useContext(authContext);
  return (
    <>
      <div className="w-full px-4 lg:mx-auto lg:w-[1020px]">
        <header className="w-full flex justify-between items-center py-4 relative">
          <div className="flex items-center gap-2">
            <h1>
              <img src={MediumLogo} alt="Medium Logo" />
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
                <div className="absolute top-[65px] rounded-lg right-24 px-4 py-2 border-[1px] border-gray-300">
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
            <li>
              <BsBell />
            </li>
            <li>
              <img
                className="w-10 h-10 rounded-full border-[1px] p-1"
                src={MediumLogo}
                alt="user image"
              />
            </li>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Compose;
