import React from "react";
import { Link } from "react-router-dom";
import landingImage from "../assets/landing.jpg";

import { brandsLogos, users } from "../assets/data";
import { PiTrendUp } from "react-icons/pi";

const Hero = () => {


  return (
    <div className="hero w-[100%]">
      <div className="hero-container w-[100%]">
        <div className="hero-welcome border-b-[1px] border-solid border-black bg-yellow-500 w-[100%] h-[55vh]">
          <div className="hero-welcome_content w-[87%] h-[100%] ml-auto flex jusify-between">
            <div className="hero-welcome_text  flex-1 flex flex-col">
              <h1 className="text-[5rem] mt-[4rem]">Stay Curious.</h1>
              <p className="mt-8 w-[500px] text-[1.5rem] font-thin">
                Discover stories, thinking and expertise from writers on any
                topic
              </p>
              <p className="mt-8 px-12 text-white bg-black w-fit py-2 rounded-[25px] opacity-80 hover:opacity-100">
                <Link to="getstarted">Start reading</Link>
              </p>
            </div>
            <div className="hero-welcome_image flex-1">
              <div className="landing w-[100%] h-[100%] ">
                <div className="landing-content w-[80%] h-[95%] flex mt-2">
                  <img
                    src={landingImage}
                    alt="Books"
                    className="w-[100%] h-[100%] object-fill rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="trending my-8 w-[75%] mx-auto">
          <div className="trending-content">
            <h2 className="tranding-content-heading flex justify-start items-center gap-2">
              <p className="border border-black rounded-[50%] m-[2px] p-[2px]">
                <PiTrendUp />
              </p>
              <p>Trending on Medium</p>
            </h2>


          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Hero;
