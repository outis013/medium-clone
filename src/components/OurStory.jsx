import React, { useContext } from "react";

import mediumLogo from "../assets/white-medium-logo.png";
import darkMediumLogo from "../assets/medium-logo.png";
import { authContext } from "../context/authContext";
import { Link } from "react-router-dom";
import { BsPlay } from "react-icons/bs";

const footerLinks = ["About", "Terms", "Privacy", "Help", "Teams", "Press"];

const OurStory = () => {
  const { auth } = useContext(authContext);

  return (
    <div className="w-full bg-gray-900">
      <header className="w-full sticky top-0 m-auto flex justify-between items-center border-b-2 border-white border-solid bg-gray-900 bg-opacity-80">
        <div className="py-6">
          <Link to="/">
            <img className="lg:w-[8rem] " src={mediumLogo} alt="medium" />
          </Link>
        </div>
        {!auth.user && (
          <nav className=" list-none flex gap-6">
            <li className="border-[1px] border-white rounded-[25px] py-2 px-3 text-sm bg-gray-900 text-white">
              <Link to="/singin">Sign up</Link>
            </li>
            <li className="border-[1px] border-white rounded-[25px] py-2 px-3 text-sm bg-white text-gray-900">
              <Link to="/signin">Sign in</Link>
            </li>
            <li></li>
          </nav>
        )}
      </header>
      <div className=" lg:flex block gap-4 justify-between items-center w-[95%] m-auto ">
        <div className="flex-1 text-white w-full lg:w-[50%] mr-4">
          <h1 className=" text-[3rem] lg:text-[5rem] my-[4.5rem] w-full lg:w-[600px]">
            Everyone has a story to tell.
          </h1>

          <p className=" tracking-wide leading-8">
            <p>
              Medium is a home for human stories and ideas. Here, anyone can
              share insightful perspectives, useful knowledge, and life wisdom
              with the world—without building a mailing list or a following
              first. The internet is noisy and chaotic; Medium is quiet yet full
              of insight. It’s simple, beautiful, collaborative, and helps you
              find the right audience for whatever you have to say. We believe
              that what you read and write matters. Words can divide or empower
              us, inspire or discourage us. In a world where the most
              sensational and surface-level stories often win, we’re building a
              system that rewards depth, nuance, and time well spent. A space
              for thoughtful conversation more than drive-by takes, and
              substance over packaging.
            </p>

            <h2 className="my-6 text-2xl font-mono">
              Ultimately, our goal is to deepen our collective understanding of
              the world through the power of writing.
            </h2>

            <p>
              Over 100 million people connect and share their wisdom on Medium
              every month. Many are professional writers, but just as many
              aren’t — they’re CEOs, computer scientists, U.S. presidents,
              amateur novelists, and anyone burning with a story they need to
              get out into the world. They write about what they’re working on,
              what’s keeping them up at night, what they’ve lived through, and
              what they’ve learned that the rest of us might want to know too.
              Instead of selling ads or selling your data, we’re supported by a
              growing community of Medium members who align with our mission. If
              you’re new here, start exploring. Dive deeper into whatever
              matters to you. Find a post that helps you learn something new, or
              reconsider something familiar—and then share your own story.
            </p>
          </p>
        </div>
        <div className="flex-1"></div>
      </div>

      <div className="mt-[5rem] w-full ">
        <div>
          <div className="border-t-2 border-white border-solid w-full">
            <Link
              to="/"
              className="h-full max-w-full p-4 flex justify-between items-center text-white hover:bg-white hover:text-gray-900 transition-all duration-500 ease-in-out"
            >
              <h1 className="text-[3rem]">Start reading</h1>
              <BsPlay className="text-[3rem]" />
            </Link>
          </div>
          <div className="border-t-2 border-white border-solid w-full">
            <Link
              to="write"
              className="h-full max-w-full p-4 flex justify-between items-center text-white hover:bg-white hover:text-gray-900 transition-all duration-500 ease-in-out"
            >
              <h1 className="text-[3rem]">Start writing</h1>
              <BsPlay className="text-[3rem]" />
            </Link>
          </div>
          <div className="border-t-2 border-white border-solid w-full">
            <Link
              to="membership"
              className="h-full max-w-full p-4 flex justify-between items-center text-white hover:bg-white hover:text-gray-900 transition-all duration-500 ease-in-out"
            >
              <h1 className="text-[3rem]">Become a member</h1>
              <BsPlay className="text-[3rem]" />
            </Link>
          </div>
        </div>
      </div>

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

export default OurStory;
