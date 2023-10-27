import React, { useContext, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import landingImage from "../assets/landing.jpg";
import darkLogo from "../assets/black-logo.png";
import { PiStarFourBold, PiStarThin, PiTrendUp } from "react-icons/pi";
import { LiaAngleRightSolid, LiaAngleLeftSolid } from "react-icons/lia";
import { mainPosts, posts, users } from "../assets/data";
import Post from "./Post";
import Header from "./Header";

import { FcGoogle } from "react-icons/fc";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineApple } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsPlus, BsSave, BsTwitter } from "react-icons/bs";
import { GoBlocked } from "react-icons/go";
import { CgMenuRight } from "react-icons/cg";
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

const Hero = () => {
  const [modal, setModal] = useState(false);
  const [onboardingMode, setonboardingMode] = useState("singup");
  const [currentTopic, setCurrentTopic] = useState(topics[0]);
  const [staffPicks, setStaffPicks] = useState([]);
  const [hideScrollbar, sethideScrollbar] = useState(false);

  const { auth } = useContext(authContext);
  const topicRef = useRef(0);

  const handleTopicsScroll = (direction) => {
    if (direction === "left") {
      topicRef ? (topicRef.current.scrollLeft -= 75) : null;
    } else {
      topicRef ? (topicRef.current.scrollLeft += 75) : null;
    }
  };

  useEffect(() => {
    const getStaffPicks = (number) => {
      mainPosts.map((post, index) => {
        if (staffPicks.length < number) staffPicks.push(post);
      });
    };

    getStaffPicks(3);
  }, []);

  //show or hide heading on scroll

  const [showHeading, setShowHeading] = useState(true);
  window.addEventListener("scroll", function handleScroll(event) {
    if (window.scrollY > this.lastScrollTop || 0) {
      setShowHeading(false);
    } else if (window.scrollY < this.lastScrollTop) {
      setShowHeading(true);
    }

    this.lastScrollTop = window.scrollY;
  });

  return (
    <>
      {!auth.user ? (
        <div>
          <Header setModal={setModal} />
          {modal && (
            <div className="absolute w-[100vw] h-[100vh] top-0 left-0 z-3 bg-black opacity-90 flex justify-center items-center">
              <div className=" w-[80%] md:w-[40vw] lg:h-[90vh] bg-white opacity-100 shadow-lg rounded-lg text-center pt-20 relative">
                <RxCross1
                  onClick={() => setModal(false)}
                  className="absolute top-5 right-5 text-2xl text-black hover:rotate-180 transition-all duration-700 ease-linear cursor-pointer"
                />
                <h1 className="text-black text-2xl font-extrabold mb-20">
                  {onboardingMode === "signin"
                    ? "Welcome back!"
                    : "Join Medium"}
                </h1>
                <div className=" flex flex-col justify-center gap-3 items-center">
                  <Link className="border-[1px]  border-black rounded-full w-[250px] text-center  py-2 flex justify-start px-2 gap-4 items-center">
                    <p>
                      <FcGoogle className="text-2xl" />
                    </p>
                    <p>Sign in with Google</p>
                  </Link>
                  <Link className="border-[1px]  border-black rounded-full w-[250px] text-center  py-2 flex justify-start px-2 gap-4 items-center">
                    <p>
                      <FaFacebook className="text-2xl" />
                    </p>
                    <p>Sign in with Facebook</p>
                  </Link>
                  {onboardingMode === "signin" && (
                    <Link className="border-[1px]  border-black rounded-full w-[250px] text-center  py-2 flex justify-start px-2 gap-4 items-center">
                      <p>
                        <AiOutlineApple className="text-2xl" />
                      </p>
                      <p>Sign in with Apple</p>
                    </Link>
                  )}
                  {onboardingMode === "signin" && (
                    <Link className="border-[1px]  border-black rounded-full w-[250px] text-center  py-2 flex justify-start px-2 gap-4 items-center">
                      <p>
                        <BsTwitter className="text-2xl" />
                      </p>
                      <p>Sign in with Twitter</p>
                    </Link>
                  )}
                  <Link className="border-[1px]  border-black rounded-full w-[250px] text-center  py-2 flex justify-start px-2 gap-4 items-center">
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
                      Discover stories, thinking and expertise from writers on
                      any topic
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
                                  {monthNames[post.date.getMonth()].substring(
                                    0,
                                    3
                                  )}
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
        </div>
      ) : (
        <>
          <div className="w-full ">
            {showHeading && <Header />}
            <div className="lg:w-[70%] md:w-full md:grid grid-cols-10  gap-6 mx-auto">
              <div className="col-span-6  py-2 px-4  top-[200px]  sticky border-r-[1px] border-opacity-10">
                <div className="flex relative justify-between items-center gap-2 mt-8">
                  <LiaAngleLeftSolid
                    onClick={() => handleTopicsScroll("left")}
                    className="text-2xl cursor-pointer"
                  />

                  <div
                    ref={topicRef}
                    className="no-scrollbar scroll-smooth py-3  border-b  border-opacity-10 w-full px-2 flex items-center gap-4 overflow-x-auto text-black text-sm"
                  >
                    {topics &&
                      topics.map((topic, index) => (
                        <p
                          key={index}
                          className={
                            topic === currentTopic
                              ? "whitespace-nowrap cursor-pointer"
                              : "whitespace-nowrap cursor-pointer"
                          }
                        >
                          {topic}
                        </p>
                      ))}
                  </div>
                  <LiaAngleRightSolid
                    onClick={() => handleTopicsScroll("right")}
                    className="text-2xl cursor-pointer"
                  />
                </div>
                <div className="posts my-10 w-full">
                  {mainPosts &&
                    mainPosts.map((post, index) => (
                      <div
                        key={index}
                        className="my-10  grid-cols-8 gap-1 align-middle w-full border-b-[1px] border-opacity-20"
                      >
                        <div className=" col-span-6 md:col-span-5">
                          <div className="flex items-center gap-2 font-thin text-gray-500">
                            <img
                              src={post.author.profileLogo}
                              className="w-8 h-8 rounded-full"
                              alt=""
                            />
                            <h2>{post.author.name} &nbsp; .</h2>
                            <p>
                              {monthNames[post.date.getMonth()].substring(0, 3)}{" "}
                              &nbsp; {post.date.getDate()}{" "}
                            </p>
                            {post.isMembershipOnly && (
                              <p className="flex items-center gap-2">
                                <PiStarThin className="text-yellow-500" />
                                <h4 className="text-xs md:text-sm">
                                  Members-only
                                </h4>
                              </p>
                            )}
                          </div>

                          <div className="">
                            <h2 className="my-2 font-bold text-lg">
                              {post.title}
                            </h2>
                            <div className="flex justify-between items-center">
                              <div>
                                <p className=" md:block">
                                  {post.content.substring(0, 150)}
                                </p>
                              </div>
                              <div className="col-span-2 md:col-span-3 w-full h-full">
                                <div className="w-full h-full flex items-center justify-center">
                                  <img
                                    src={post.imgUrl}
                                    className="md:w-[130px] w-[90px] h-[90px] md:h-[130px] object-cover rounded-lg"
                                    alt="post image"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center md:justify-start md:gap-20 justify-between my-10">
                            <div className="flex gap-3 items-center">
                              <p className=" whitespace-normal bg-gray-300 px-2 py-1 rounded-full">
                                {post.category}
                              </p>
                              <p>{post.readlength} min read</p>
                            </div>
                            <div className="flex items-center gap-3 text-2xl">
                              <BsSave className="cursor-pointer" />
                              <GoBlocked className="cursor-pointer" />
                              <CgMenuRight className="cursor-pointer" />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <div className=" hidden col-span-4 py-2 md:block  text-left w-[70%]">
                <h1 className="py-3 font-bold text-sm">Staff Picks</h1>
                <div className="pb-3 border-b-[1px] border-opacity-30 ">
                  {mainPosts &&
                    mainPosts.map((post, index) => {
                      if (index > 2) return;
                      return (
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
                            <h2 className="font-bold text-gray-600">
                              {post.title}
                            </h2>
                          </div>
                        </div>
                      );
                    })}

                  <p className="my-5 text-green-500 hover:text-black text-sm transition-all duration-0 ease-linear cursor-pointer">
                    See the full list
                  </p>

                  <div className="w-full ">
                    <div className="flex items-center justify-center gap-0 w-full">
                      <img src={darkLogo} className="w-14 h-14" alt="medium" />
                      <BsPlus className="text-2xl" />
                      <BsTwitter className="text-5xl text-blue-500" />
                    </div>

                    <p className="px-6 py-3 lg:px-10 text-center font-extralight text-gray-500">
                      Discover Medium writers you already follow on Twitter.
                    </p>

                    <h1 className="text-center rounded-full flex items-center justify- border-[1px] border-black gap-16 px-2 py-[.5rem] w-full ">
                      <BsTwitter className="text-blue-500 text-2xl " />
                      <p className="md:text-sm whitespace-nowrap">
                        Connect to Twitter
                      </p>
                    </h1>
                  </div>
                  <div className="text-center py-3">
                    <Link className=" underline  text-gray-400 ">
                      Maybe Later
                    </Link>
                  </div>
                </div>
                <div className="pt-6">
                  <h1 className="text-lg font-bold">Recommended topics</h1>

                  <div className="flex flex-wrap items-center gap-2 my-4">
                    {topics.map((topic, index) => {
                      if (index > 6) return;
                      return (
                        <p
                          className=" whitespace-normal px-3 py-2 text-sm text text-gray-800 bg-gray-100 rounded-full hover:scale-110 transition-all duration-300 cursor-pointer ease-in"
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
                            <h2 className="mb-2  text-sm font-bold">
                              {user.name}
                            </h2>
                            <p className="text-xs">
                              {user.bio.substring(0, 50)}...
                            </p>
                          </div>
                          <div className="col-span-3 flex items-center">
                            <button className="rounded-full  border  border-black px-2 py-1  text-xs">
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
                  <h1 className="text-lg font-bold text-black">
                    Recently saved
                  </h1>

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

                            <div className="font-bold text-sm">
                              <p>{post.title}</p>
                            </div>
                            <div className="flex gap-1 items-center my-2 font-[50] text-xs">
                              <p>
                                {monthNames[post.date.getMonth()].substring(
                                  0,
                                  3
                                )}
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
          </div>
        </>
      )}
    </>
  );
};

export default Hero;
