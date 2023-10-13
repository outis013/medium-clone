import React, { useState } from "react";
import { Link } from "react-router-dom";
import landingImage from "../assets/landing.jpg";
import { PiStarFourBold, PiTrendUp } from "react-icons/pi";
import { mainPosts, posts } from "../assets/data";
import Post from "./Post";
import Header from "./Header";
import { useLockBodyScroll } from "@uidotdev/usehooks";

import { FcGoogle } from "react-icons/fc";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineApple } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsTwitter } from "react-icons/bs";

const Hero = () => {
  const [modal, setModal] = useState(false);
  const [onboardingMode, setonboardingMode] = useState("singin");
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

  const footer = [
    "Help",

    "Status",

    "Writers",

    "Blog",

    "Careers",

    "Privacy",

    "Terms",

    "About",

    "Text to speech",

    "Teams",
  ];

  return (
    <>
      <Header setModal={setModal} />
      {modal && (
        <div className="absolute w-[100vw] h-[100vh] top-0 left-0 z-3 bg-black opacity-90 flex justify-center items-center">
          <div className="w-[40vw] h-[90vh] bg-white opacity-100 shadow-lg rounded-lg text-center pt-20 relative">
            <RxCross1
              onClick={() => setModal(false)}
              className="absolute top-5 right-5 text-2xl text-black hover:rotate-180 transition-all duration-700 ease-linear cursor-pointer"
            />
            <h1 className="text-black text-2xl font-extrabold mb-20">
              {onboardingMode === "signin" ? "Welcome back!" : "Join Medium"}
            </h1>
            <div className=" flex flex-col justify-center gap-3 items-center">
              <Link className="border-[1px]  border-black rounded-full w-[250px] text-center  py-2 flex justify-around gap-4 items-center">
                <p>
                  <FcGoogle className="text-2xl" />
                </p>
                <p>Sign in with Google</p>
              </Link>
              <Link className="border-[1px]  border-black rounded-full w-[250px] text-center  py-2 flex justify-around gap-4 items-center">
                <p>
                  <FaFacebook className="text-2xl" />
                </p>
                <p>Sign in with Facebook</p>
              </Link>
              {onboardingMode === "signin" && (
                <Link className="border-[1px]  border-black rounded-full w-[250px] text-center  py-2 flex justify-around gap-4 items-center">
                  <p>
                    <AiOutlineApple className="text-2xl" />
                  </p>
                  <p>Sign in with Apple</p>
                </Link>
              )}
              {onboardingMode === "signin" && (
                <Link className="border-[1px]  border-black rounded-full w-[250px] text-center  py-2 flex justify-around gap-4 items-center">
                  <p>
                    <BsTwitter className="text-2xl" />
                  </p>
                  <p>Sign in with Twitter</p>
                </Link>
              )}
              <Link className="border-[1px]  border-black rounded-full w-[250px] text-center  py-2 flex justify-around gap-4 items-center">
                <p>
                  <HiOutlineMail className="text-2xl" />
                </p>
                <p>Sign in with Email</p>
              </Link>
            </div>
            <div className="flex gap-1 items-center justify-center my-10 text-xs">
              {onboardingMode === "signin" && (
                <>
                  <h1>No account?</h1>
                  <Link
                    onClick={() => setonboardingMode("signup")}
                    className="text-green-500 text-sm "
                  >
                    Create one!
                  </Link>
                </>
              )}
              {onboardingMode !== "signin" && (
                <>
                  <h1>Already have an account?</h1>
                  <Link
                    onClick={() => setonboardingMode("signin")}
                    className="text-green-500 text-sm "
                  >
                    Sign in
                  </Link>
                </>
              )}
            </div>
            <div className="my-15 flex items-center justify-center gap-1  text-xs">
              <p>forgot email or trouble signin in?</p>
              <Link className="underline text-black ">Get help</Link>
            </div>
            <div className="px-[4rem] text-center my-12 text-xs">
              <p>
                Click “Sign {onboardingMode === "signup" ? "up" : "in"}” to
                agree to Medium’s{" "}
                <Link className="underline">Terms of Service</Link> and
                acknowledge that Medium’s{" "}
                <Link className="underline">Privacy Policy</Link> applies to
                you.
              </p>
            </div>
          </div>
        </div>
      )}
      <div className="hero w-[100%]">
        <div className="hero-container w-[100%]">
          <div className="hero-welcome border-b-[1px] border-solid border-black bg-yellow-500 w-[100%] h-[55vh]">
            <div className="hero-welcome_content w-full px-4 lg:px-0 md:w-[87%] md:ml-[11.5rem] h-[100%]  flex jusify-between">
              <div className="hero-welcome_text  flex-1 flex flex-col">
                <h1 className="lg:text-[5rem] text-[3rem] mt-[3rem] lg:mt-[2rem]">
                  Stay Curious.
                </h1>
                <p className="lg:mt-6 mt-8 w-fit  max-w-[500px] text-[1.5rem] font-thin">
                  Discover stories, thinking and expertise from writers on any
                  topic
                </p>
                <p className="lg:mt-6 mt-8 z-1 px-12 text-white bg-black w-fit py-2 rounded-[25px] opacity-80 hover:opacity-100">
                  <Link to="getstarted" className="z-1">
                    Start reading
                  </Link>
                </p>
              </div>
              <div className="hero-welcome_image hidden md:block  flex-1">
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
          <div className="trending my-8 w-[100%] lg:mx-auto border-b-[1px] border-black  border-solid border-opacity-10">
            <div className="trending-content w-[90%] ml-4 lg:w-[75%] lg:m-auto">
              <h2 className="tranding-content-heading flex justify-start items-center gap-2 border-b-2 border-black border-opacity-20 lg:border-none">
                <p className="border border-black rounded-[50%] m-[2px] p-[2px]">
                  <PiTrendUp />
                </p>
                <p>Trending on Medium</p>
              </h2>
              <div className="trending-content_posts flex flex-wrap justify-between items-center my-6">
                {posts &&
                  posts.map((post, index) => (
                    <Link
                      to={`posts/${post.id}/postdetails`}
                      className="trending-content_post w-[350px] flex gap-4 my-4 items-start justify-start"
                      key={post.id}
                    >
                      <div className="post-index">
                        <p className="index-number font-thin text-4xl opacity-10">
                          {String(index + 1).padStart(2, "0")}
                        </p>
                      </div>
                      <div className="post-details w-full">
                        <div className=" flex  justify-start items-center">
                          <div className="w-12 h-12 post-details_proifle-logo ">
                            {post.userType === "person" ? (
                              <img
                                className="w-[100%] h-[100%] p-2  rounded-full"
                                src={post?.author?.profileLogo}
                                alt="author"
                              />
                            ) : (
                              <p>{post.author.profileLogo}</p>
                            )}
                          </div>
                          <p className=" text-sm">{post.author.name}</p>
                        </div>
                        <div className="post-details_content font-bold mb-1">
                          {post.title.substring(0, 40)}...
                        </div>
                        <div className="post-details_footer flex justify-start items-center gap-4">
                          <div className="flex gap-2 font-thin post-details_footer-time text-xs ">
                            <p>
                              {monthNames[post.date.getMonth()].substring(0, 3)}
                              ,
                            </p>
                            <p>{post.date.getDate()}</p>
                          </div>
                          <div className="flex items-center gap-2 text-xs">
                            <p>{post.readlength} mins read.</p>
                            {post.isMembershipOnly && (
                              <p>
                                <PiStarFourBold className="text-yellow-500" />
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
          <div className="posts w-full">
            <div className="posts-content w-full lg:w-[75%] gap-3 m-auto flex flex-col-reverse lg:flex-row justify-between items-start">
              <div className="w-[90%] m-auto md:w-[60%]">
                {mainPosts &&
                  mainPosts.map((post, index) => (
                    <Link
                      key={index}
                      to={`posts/${post.id}/postdetails`}
                      className="w-full"
                    >
                      <Post post={post} monthNames={monthNames} />
                    </Link>
                  ))}
              </div>
              <div className="  w-[350px] mx-auto lg:sticky top-[80px] ">
                <h6 className="font-extrabold mb-3">
                  discover more of what matters to you
                </h6>

                <div className="categories flex flex-wrap items-center">
                  {categories &&
                    categories.map((category, index) => (
                      <p
                        key={index}
                        className="m-1 bg-black bg-opacity-10 p-3 text-gray-800 rounded-full font-light text-xs cursor-pointer"
                      >
                        {category}
                      </p>
                    ))}
                </div>
                <h6 className="font-thin my-8 font-xs border-b-[1px] text-green-500 hover:text-black cursor-pointer">
                  see more topics
                </h6>

                <div className="footer flex items-center gap-3 flex-wrap">
                  {footer &&
                    footer.map((item, index) => (
                      <p
                        className="text-xs font-thin text-gray-400 cursor-pointer"
                        key={index}
                      >
                        {item}
                      </p>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
