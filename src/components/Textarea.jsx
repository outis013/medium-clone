import React, { useRef, useState } from "react";
import { BsPlusLg, BsCode } from "react-icons/bs";
import {
  PiBracketsCurlyLight,
  PiGooglePhotosLogoBold,
  PiVideoCameraLight,
} from "react-icons/pi";

import { CgUnsplash } from "react-icons/cg";
import { FaCreditCard } from "react-icons/fa";

import TextareaAutosize from "react-textarea-autosize";

const Textarea = ({ placeholder, type }) => {
  const [otherInputs, setOtherInputs] = useState(false);
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    setOtherInputs(false);
    setInputText(e.target.value);
  };

  return (
    <>
      <div
        className={
          type !== "content"
            ? "flex items-center gap-4 relative"
            : "flex items-end gap-4 relative"
        }
      >
        {!inputText && type !== "content" && (
          <div className="w-10 h-10  rounded-full border-[1px]  flex items-center justify-center  border-gray-400 relative">
            <BsPlusLg
              onClick={() => setOtherInputs((prev) => !prev)}
              className={
                otherInputs
                  ? "text-3xl cursor-pointer transition-all duration-300 ease-linear rotate-[45deg]"
                  : "text-3xl cursor-pointer transition-all duration-300 ease-linear"
              }
            />
            {otherInputs && (
              <div className="flex items-center gap-2 bg-white opacity-100 absolute top-0 left-12 transition-all duration-500 ease-linear">
                <div className="rounded-full w-12 h-12 border-[1px] flex items-center justify-center border-black ">
                  <PiVideoCameraLight className="text-3xl" />
                </div>
                <div className="rounded-full w-12 h-12 border-[1px] flex items-center justify-center border-black ">
                  <BsCode className="text-3xl" />
                </div>
                <div className="rounded-full w-12 h-12 border-[1px] flex items-center justify-center border-black ">
                  <CgUnsplash className="text-3xl" />
                </div>
                <div className="rounded-full w-12 h-12 border-[1px] flex items-center justify-center border-black ">
                  <PiGooglePhotosLogoBold className="text-3xl" />
                </div>
                <div className="rounded-full w-12 h-12 border-[1px] flex items-center justify-center border-black ">
                  <PiBracketsCurlyLight className="text-3xl" />
                </div>
                <div className="rounded-full w-12 h-12 border-[1px] flex items-center justify-center border-black ">
                  <FaCreditCard className="text-3xl" />
                </div>
              </div>
            )}
          </div>
        )}

        {type === "content" && (
          <div className="w-10 h-10  rounded-full border-[1px]  flex items-center justify-center  border-gray-400 mb-3 relative">
            <BsPlusLg
              onClick={() => setOtherInputs((prev) => !prev)}
              className={
                otherInputs
                  ? "text-3xl cursor-pointer transition-all duration-300 ease-linear rotate-[45deg]"
                  : "text-3xl cursor-pointer transition-all duration-300 ease-linear"
              }
            />
            {otherInputs && (
              <div className="flex items-center gap-2 bg-white opacity-100 absolute top-0 left-12 transition-all duration-500 ease-linear">
                <div className="rounded-full w-12 h-12 border-[1px] flex items-center justify-center border-black ">
                  <PiVideoCameraLight className="text-3xl" />
                </div>
                <div className="rounded-full w-12 h-12 border-[1px] flex items-center justify-center border-black ">
                  <BsCode className="text-3xl" />
                </div>
                <div className="rounded-full w-12 h-12 border-[1px] flex items-center justify-center border-black ">
                  <CgUnsplash className="text-3xl" />
                </div>
                <div className="rounded-full w-12 h-12 border-[1px] flex items-center justify-center border-black ">
                  <PiGooglePhotosLogoBold className="text-3xl" />
                </div>
                <div className="rounded-full w-12 h-12 border-[1px] flex items-center justify-center border-black ">
                  <PiBracketsCurlyLight className="text-3xl" />
                </div>
                <div className="rounded-full w-12 h-12 border-[1px] flex items-center justify-center border-black ">
                  <FaCreditCard className="text-3xl" />
                </div>
              </div>
            )}
          </div>
        )}
        <TextareaAutosize
          value={inputText}
          onChange={handleChange}
          placeholder={placeholder}
          className="textarea pl-11 w-[80%] py-4 bg-none placeholder:text-2xl outline-none focus:placeholder:text-white placeholder:font-thin text-lg font-semibold"
        />
      </div>
    </>
  );
};

export default Textarea;
