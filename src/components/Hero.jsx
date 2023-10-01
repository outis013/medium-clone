import React from "react";
import { Link } from "react-router-dom";
import landingImage from "../assets/landing.jpg";
import { PiStarFourBold, PiTrendUp } from "react-icons/pi";
import { posts } from "../assets/data";

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
  console.log(posts);
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
        <div className="trending my-8 w-[100%] mx-auto border-b-[1px] border-black  border-solid border-opacity-10">
          <div className="trending-content w-[75%] m-auto">
            <h2 className="tranding-content-heading flex justify-start items-center gap-2">
              <p className="border border-black rounded-[50%] m-[2px] p-[2px]">
                <PiTrendUp />
              </p>
              <p>Trending on Medium</p>
            </h2>
            <div className="trending-content_posts flex flex-wrap justify-between items-center my-6">
              {posts &&
                posts.map((post, index) => (
                  <Link
                    to="postDetails"
                    className="trending-content_post w-[350px] flex gap-4 my-4 items-start justify-start"
                    key={index}
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
                        <p>{post.author.name}</p>
                      </div>
                      <div className="post-details_content">
                        {post.title.substring(0, 40)}...
                      </div>
                      <div className="post-details_footer flex justify-start items-center gap-4">
                        <div className="flex gap-2 font-thin post-details_footer-time text-sm">
                          <p>
                            {monthNames[post.date.getMonth()].substring(0, 3)},
                          </p>
                          <p>{post.date.getDate()}</p>
                        </div>
                        <div className="flex items-center gap-2">
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
          <div className="posts-content w-[75%] flex justify-between items-start">
            <div></div>
            <div className="">
              <h6 className="font-thin">
                discover more of what matters to you
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
