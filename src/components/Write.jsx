import React, { useContext } from "react";

import mediumLogo from "../assets/medium-logo.png";
import { Link } from "react-router-dom";
import { authContext } from "../context/authContext";
import bgImage from "../assets/writebg.jpg";

const Write = () => {
  const { auth } = useContext(authContext);
  return (
    <>
      <div>
        <header className="w-full sticky top-0 m-auto flex justify-between items-center border-b-[1px] border-black border-solid bg-white bg-opacity-80">
          <div className="py-6">
            <Link to="/">
              <img className="lg:w-[8rem] " src={mediumLogo} alt="medium" />
            </Link>
          </div>
          {!auth.user && (
            <nav className=" list-none flex gap-6">
              <li className="border-[1px] border-white rounded-[25px] py-2 px-3 text-sm bg-black text-white">
                <Link to="/singin">Sign up</Link>
              </li>
              <li className="border-[1px] border-black rounded-[25px] py-2 px-3 text-sm bg-white text-black">
                <Link to="/signin">Sign in</Link>
              </li>
              <li></li>
            </nav>
          )}
        </header>

        <section className="w-full h-[80vh]">
          <div className="relative w-full h-full">
            <img
              src={bgImage}
              alt="green forest"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 bg-black opacity-80 w-full h-full z-10"></div>
            <div className="z-20 absolute top-0 left-0 w-full h-full flex gap-10">
              <div className="flex-1 w-full h-full flex flex-col justify-center gap-10 text-white">
                <h1 className="text-7xl lg:ml-6 mt-20">
                  Medium Partner Program
                </h1>

                <p className="lg:ml-6 w-[400px]">
                  Medium’s Partner Program is for people who are interested in
                  helping us fulfill our mission of deepening the collective
                  wisdom of the world through personal expression,
                  knowledge-sharing, and storytelling.
                </p>

                <button className="lg:ml-6 bg-black rounded-full text-white border-[1px] border-white border-solid text-sm w-fit px-3 py-2">
                  Apply now
                </button>
              </div>
              <div className="flex-1"></div>
            </div>
          </div>
        </section>

        <section className="w-full h-[70vh] lg:mt-[10vh]">
          <div className="lg:[w-90%] flex justify-between items-start gap-5">
            <div className="ml-6  flex-1 flex flex-col gap-10">
              <h1 className="lg:text-7xl lg:w-[450px]">
                Quality over clickbait
              </h1>
              <p className="text-lg -tracking-wider leading-8 w-[550px]">
                In a creator economy ruled by clickbait and ad impressions,
                Medium’s Partner Program is taking a stand for quality. As a
                partner, when your best stories are read by Medium members, a
                portion of their membership dues will be shared with you. Here
                are a few factors we consider in order to determine quality.
              </p>
            </div>
            <div className="flex-1 flex flex-col gap-4">
              <div className="py-2 px-3 w-[600px] border-b-[1px] border-solid border-gray-200">
                <h2 className="text-lg font-bold">Member read time</h2>
                <p>
                  Members-only stories will earn money when a member reads your
                  story for 30 seconds or more, and will continue to earn more
                  the longer they keep reading. Long, thoughtful, reads are
                  encouraged!
                </p>
              </div>
              <div className="py-2 px-3 w-[600px] border-b-[1px] border-solid border-gray-200">
                <h2 className="text-lg font-bold">Positive interactions</h2>
                <p>
                  You’ll also earn more when members clap, highlight, reply, or
                  engage with your story in other ways.
                </p>
              </div>
              <div className="py-2 px-3 w-[600px] border-b-[1px] border-solid border-gray-200">
                <h2 className="text-lg font-bold">Followers bonus</h2>
                <p>
                  When members follow you and continue to read and interact with
                  your stories, you will be given a follower bonus. We encourage
                  writers to share their stories with readers in a way that
                  promotes community and audience building.
                </p>
              </div>
              <div className="py-2 px-3 w-[600px] border-b-[1px] border-solid border-gray-200">
                <h2 className="text-lg font-bold">Boost bonus</h2>
                <p>
                  Stories that are Boosted will also earn more for each read and
                  interaction. We recommend that writers spend more time on
                  fewer, high-quality stories to reach this bar.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Write;
