import React, { useState } from "react";
import { Link } from "react-router-dom";
import landingImage from "../assets/landing.jpg";
import { PiStarFourBold, PiTrendUp } from "react-icons/pi";
import { mainPosts, posts } from "../assets/data";
import Post from "./Post";

const Hero = () => {
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
      <div className="hero w-[100%]">
        <div className="hero-container w-[100%]">
          <div className="hero-welcome border-b-[1px] border-solid border-black bg-yellow-500 w-[100%] h-[55vh]">
            <div className="hero-welcome_content w-full md:w-[87%] h-[100%] mx-4 md:ml-auto flex jusify-between">
              <div className="hero-welcome_text  flex-1 flex flex-col">
                <h1 className="lg:text-[5rem] text-[3rem] mt-[3rem] lg:mt-[2rem]">
                  Stay Curious.
                </h1>
                <p className="lg:mt-6 mt-8 w-[500px] text-[1.5rem] font-thin">
                  Discover stories, thinking and expertise from writers on any
                  topic
                </p>
                <p className="lg:mt-6 mt-8 px-12 text-white bg-black w-fit py-2 rounded-[25px] opacity-80 hover:opacity-100">
                  <Link to="getstarted">Start reading</Link>
                </p>
              </div>
              <div className="hero-welcome_image hidden lg:block flex-1">
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
            <div className="posts-content w-full lg:w-[75%]  m-auto flex flex-col-reverse lg:flex-row justify-between items-start">
              <div className="w-[85%] m-auto md:w-[60%]">
                {mainPosts &&
                  mainPosts.map((post, index) => (
                    <Link key={index} to={`posts/${post.id}/postdetails`}>
                      <Post post={post} monthNames={monthNames} />
                    </Link>
                  ))}
              </div>
              <div className=" w-[400px] mx-auto lg:sticky top-[80px]">
                <h6 className="font-extrabold mb-3">
                  discover more of what matters to you
                </h6>

                <div className="categories mr-4 flex flex-wrap items-center">
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
