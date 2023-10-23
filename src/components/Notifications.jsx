import React, { useContext, useEffect, useState } from "react";
import Header from "./Header";
import { mainPosts, users } from "../assets/data";
import darkLogo from "../assets/black-logo.png";
import { BsPlus, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
import { PiStarThin } from "react-icons/pi";
import { authContext } from "../context/authContext";

const topics = [
  "For you",

  "Following",

  " Remote Work",

  "UX",

  " History",

  "Basic Income",

  "Spirituality",

  "  Sexuality",

  "Mental Health",

  "Fitness",

  "Family",

  "  Creativity",
  " Addiction",

  "JavaScript",

  "Data Science",

  "Artificial Intelligence",

  "Android Development",

  " Freelancing",

  " Biotech",
];

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

const Notifications = () => {
  const [staffPicks, setStaffPicks] = useState([]);
  const [tabMode, setTabMode] = useState("All");

  const { notifications } = useContext(authContext);

  useEffect(() => {
    const getStaffPicks = (number) => {
      mainPosts.map((post, index) => {
        if (staffPicks.length < number) staffPicks.push(post);
      });
    };

    getStaffPicks(3);
  }, []);
  return (
    <>
      <Header />
      <section className="w-full ">
        <div className="w-[75%] mx-auto grid grid-cols-10 gap-5">
          <div className="col-span-7 my-10">
            <h1 className="text-4xl font-[600]">Notifications</h1>
            <div className="  w-full ">
              <div className="w-full border-b-[1px]  border-gray-400 border-opacity-50 ">
                <div className="tabs flex items-center gap-4 py-3">
                  <Link
                    className={
                      tabMode === "All"
                        ? "font-thin"
                        : "font-thin text-gray-400"
                    }
                    onClick={() => setTabMode("All")}
                  >
                    All
                  </Link>
                  <Link
                    className={
                      tabMode === "Responses"
                        ? "font-thin"
                        : "font-thin text-gray-400"
                    }
                    onClick={() => setTabMode("Responses")}
                  >
                    Responses
                  </Link>
                </div>
              </div>
              {tabMode === "Responses" ? (
                <div className="w-full">
                  <div className="w-full h-[30vh] text-green-800 text-xl flex items-center justify-center">
                    <h1>There are no responses at the moment</h1>
                  </div>
                </div>
              ) : (
                <div className="w-full">
                  <div className="w-full p-4">
                    {notifications &&
                      notifications.map((notification, index) => (
                        <div className="my-3">
                          <div className="flex gap-2">
                            <img
                              src={darkLogo}
                              className="w-8 h-8 rounded-full"
                              alt="user logo"
                            />
                            <p className="font-thin text-gray-600 text-sm">
                              {notification.user.name}
                            </p>
                            <p className="font-thin text-gray-400 text-sm">
                              Started following you
                            </p>
                          </div>
                          <div className="ml-10 flex items-center gap-2 text-xs">
                            <p>
                              {monthNames[new Date().getMonth()].substring(
                                0,
                                3
                              )}
                              ,
                            </p>
                            <p>{new Date().getDate()}</p>
                            <p>{new Date().getFullYear()}</p>
                          </div>
                        </div>
                      ))}
                  </div>

                  <div className="w-full">
                    <div className="ml-8 mr-20 flex items-center justify-between text-green-500 text-sm ">
                      <p className="hover:text-black transition-all duration-300 ease-linear cursor-pointer">
                        Older Notifications
                      </p>
                      <p className="hover:text-black transition-all duration-300 ease-linear cursor-pointer">
                        Your stats
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className=" hidden col-span-3 py-2 md:block  text-left w-[90%]">
            <h1 className="py-3 font-bold text-lg">Staff Picks</h1>
            <div className="pb-3 border-b-[1px] border-opacity-30 ">
              {staffPicks.length > 0 &&
                staffPicks.map((post, index) => (
                  <div className="my-5" key={index}>
                    <Link to="/user" className="flex items-center gap-2">
                      <img
                        src={post?.author.profileLogo}
                        alt="User"
                        className="w-8 h-8 rounded-full"
                      />
                      <p>{post.author.name}</p>
                    </Link>
                    <div className="mt-1">
                      <h2 className="font-extrabold">{post.title}</h2>
                    </div>
                  </div>
                ))}

              <p className="my-5 text-green-500 hover:text-black text-sm transition-all duration-0 ease-linear cursor-pointer">
                See the full list
              </p>

              <div className="w-full ">
                <div className="flex items-center justify-center gap-0 w-full">
                  <img src={darkLogo} className="w-14 h-14" alt="medium" />
                  <BsPlus className="text-2xl" />
                  <BsTwitter className="text-5xl text-blue-500" />
                </div>

                <p className="px-6 py-3 text-center font-extralight text-gray-500">
                  Discover Medium writers you already follow on Twitter.
                </p>

                <h1 className="text-center rounded-full flex items-center justify-start border-[1px] border-black gap-16 px-2 py-[.5rem] w-72">
                  <BsTwitter className="text-blue-500 text-2xl " />
                  <p className="md:text-sm whitespace-nowrap">
                    Connect to Twitter
                  </p>
                </h1>
              </div>
              <div className="text-center py-3">
                <Link className=" underline  text-gray-400 ">Maybe Later</Link>
              </div>
            </div>
            <div className="pt-6">
              <h1 className="text-lg font-bold">Recommended topics</h1>

              <div className="flex flex-wrap items-center gap-2 my-4">
                {topics.map((topic, index) => {
                  if (index > 6) return;
                  return (
                    <p
                      className=" whitespace-normal px-3 py-2 bg-gray-300 rounded-full hover:scale-110 transition-all duration-300 cursor-pointer ease-in"
                      key={index}
                    >
                      {topic}
                    </p>
                  );
                })}
              </div>

              <Link className="text-green-500 my-5 text-sm hover:text-black transition-all duration-300 ease-linear">
                See more topics
              </Link>
            </div>

            <div className="mt-7">
              <h1 className="text-lg font-bold my-4">Who to follow</h1>
              <div className="w-full">
                {users.map((user, index) => (
                  <div
                    key={index}
                    className="my-4 w-full grid grid-cols-10 align-top   gap-1 "
                  >
                    <div className=" col-span-1">
                      <img
                        src={user.profileLogo}
                        alt="user logo"
                        className="w-8 h-8 rounded-full"
                      />
                    </div>
                    <div className=" col-span-9 grid grid-cols-10 ml-2">
                      <div className=" col-span-7">
                        <h2 className="mb-2  text-lg font-bold">{user.name}</h2>
                        <p>{user.bio.substring(0, 50)}...</p>
                      </div>
                      <div className="col-span-3 flex items-center">
                        <button className="rounded-full  border  border-black px-2 py-1 ">
                          Follow
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Link className="my-4 text-green-500 text-sm hover:text-black transition-all duration-300 ease-linear">
              See more suggestions
            </Link>

            <div className="recently-saved my-4">
              <h1 className="text-lg font-bold text-black">Recently saved</h1>

              <div>
                {mainPosts &&
                  mainPosts.map((post, index) => {
                    if (index > 4) return;
                    return (
                      <div key={index} className="my-4">
                        <div className="flex gap-2 items-center">
                          <img
                            src={post.imgUrl}
                            className="w-8 h-8 rounded-full"
                            alt="Post image"
                          />
                          <h2 className="text-xs md:text-sm font-semibold">
                            {post.author.name}
                          </h2>
                        </div>

                        <div className="font-bold text-lg">
                          <p>{post.title}</p>
                        </div>
                        <div className="flex gap-1 items-center my-2 font-[50]">
                          <p>
                            {monthNames[post.date.getMonth()].substring(0, 3)}
                          </p>
                          <p>
                            {post.date.getDate()},{post.date.getFullYear()}{" "}
                            &nbsp; . &nbsp;
                          </p>
                          <p>{post.readlength} min read</p>
                          <PiStarThin className="text-yellow-500 ml-3" />
                        </div>
                      </div>
                    );
                  })}

                <Link className="my-4 text-green-500 hover:text-black text-sm transition-all duration-300 ease-linear">
                  See all({mainPosts.length}) posts
                </Link>
              </div>

              <div className="footer my-6 flex flex-wrap items-center gap-2">
                {footer &&
                  footer.map((item, index) => (
                    <Link
                      key={index}
                      className="text-xs underline text-gray-500"
                    >
                      {item}
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Notifications;
