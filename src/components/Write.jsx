import React, { useContext, useState } from "react";

import mediumLogo from "../assets/medium-logo.png";
import { Link } from "react-router-dom";
import { authContext } from "../context/authContext";
import bgImage from "../assets/writebg.jpg";
import { BsArrowBarRight } from "react-icons/bs";
import { LiaAngleDownSolid } from "react-icons/lia";
import Faq from "./Faq";

const Write = () => {
  const { auth } = useContext(authContext);

  return (
    <>
      <div>
        <header className="w-full sticky top-0 m-auto flex justify-between items-center border-b-[1px] border-black border-solid bg-white bg-opacity-80 z-50">
          <div className="py-6">
            <Link to="/">
              <img className="lg:w-[8rem] " src={mediumLogo} alt="medium" />
            </Link>
          </div>
          {!auth.user && (
            <nav className=" list-none flex gap-2 lg:gap-6">
              <li className="border-[1px] border-white rounded-[25px] py-2 px-3 text-sm bg-black text-white">
                <Link to="/singin">Sign up</Link>
              </li>
              <li className="border-[1px] border-black rounded-[25px] py-2 px-3 text-sm bg-white text-black hover:bg-black hover:text-white">
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
              <div className="flex-1 w-full h-full mx-4 flex flex-col justify-center gap-10 text-white">
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

        <section className="w-full mt-10 lg:mt-[10vh]">
          <div className="lg:[w-90%] flex justify-between flex-col md:flex-row items-start gap-5">
            <div className="ml-6  flex-1 flex flex-col gap-10 w-full">
              <h1 className="lg:text-7xl text-5xl lg:w-[450px]">
                Quality over clickbait
              </h1>
              <p className="text-lg -tracking-wider leading-8 w-[90%]">
                In a creator economy ruled by clickbait and ad impressions,
                Medium’s Partner Program is taking a stand for quality. As a
                partner, when your best stories are read by Medium members, a
                portion of their membership dues will be shared with you. Here
                are a few factors we consider in order to determine quality.
              </p>
            </div>
            <div className="flex-1 md:ml-0 ml-4 flex flex-col gap-4 w-full">
              <div className="py-2 px-2 w-[90%] border-b-[1px] border-solid border-gray-200">
                <h2 className="text-lg font-bold">Member read time</h2>
                <p>
                  Members-only stories will earn money when a member reads your
                  story for 30 seconds or more, and will continue to earn more
                  the longer they keep reading. Long, thoughtful, reads are
                  encouraged!
                </p>
              </div>
              <div className="py-2 px-2 w-[90%] border-b-[1px] border-solid border-gray-200">
                <h2 className="text-lg font-bold">Positive interactions</h2>
                <p>
                  You’ll also earn more when members clap, highlight, reply, or
                  engage with your story in other ways.
                </p>
              </div>
              <div className="py-2 px-2 w-[90%] border-b-[1px] border-solid border-gray-200">
                <h2 className="text-lg font-bold">Followers bonus</h2>
                <p>
                  When members follow you and continue to read and interact with
                  your stories, you will be given a follower bonus. We encourage
                  writers to share their stories with readers in a way that
                  promotes community and audience building.
                </p>
              </div>
              <div className="py-2 px-2 w-[90%] border-b-[1px] border-solid border-gray-200">
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

        <section className="w-full  mt-10 lg:mt-[10vh]">
          <div className="lg:[w-90%] flex justify-between flex-col md:flex-row items-start gap-5">
            <div className="ml-6  flex-1 flex flex-col gap-10 w-full">
              <h1 className="lg:text-7xl text-5xl lg:w-[450px]">
                Eligibility criteria
              </h1>
            </div>
            <div className="flex-1 md:ml-0 ml-4 flex flex-col gap-4 w-full">
              <div className="py-2 px-2 w-[90%] border-b-[1px] border-solid border-gray-200">
                <h2 className="text-lg font-bold">You’re a member.</h2>
                <p className="text-sm font-extralight">
                  The best way to succeed as a Partner Program author is to also
                  participate as a reader of stories on Medium.
                </p>
              </div>
              <div className="py-2 px-2 w-[90%] border-b-[1px] border-solid border-gray-200">
                <h2 className="text-lg font-bold">
                  You’ve published a story in the last 6 months.
                </h2>
                <p className="text-sm font-extralight">
                  Staying active, publishing regularly, and being engaged with
                  the community are important ways to help our platform
                  flourish.
                </p>
              </div>
              <div className="py-2 px-2 w-[90%] border-b-[1px] border-solid border-gray-200">
                <h2 className="text-lg font-bold">
                  You’re located in an eligible country.
                </h2>
                <p className="text-sm font-extralight">
                  We recently expanded the number of supported countries, so now
                  more people than ever are able to join the Partner Program.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="">
          <div className="w-full">
            <div className="w-full flex flex-col">
              <div className="w-full hover:bg-slate-800 hover:text-white text-slate-800 px-4 transition-all duration-300 ease-in-out border-b-[1px] border-white">
                <Link
                  to="/membership"
                  className="w-full flex items-center justify-between text-4xl py-8 px-2"
                >
                  <Link to="/membership">Apply now</Link>
                  <BsArrowBarRight />
                </Link>
              </div>

              <div className="faq bg-slate-800 w-full text-white">
                <h1 className="text-3xl  px-2 py-6">FAQ</h1>
                <div>
                  <div className="w-full border-y-[1px] border-white py-6 my-4">
                    <Faq question="What are the new changes for the Partner Program?">
                      <div className=" mb-6 transition-all duration-500 ease-linear tracking-wide px-2 text-xs leading-7">
                        <p className="font-thin lg:w-[60vw] text-left">
                          We’ve updated the Partner Program to incentivize
                          high-quality human writing. Here’s a quick summary:
                          we’ve opened up the Partner Program to more locations,
                          removed the 100 follower requirement, and require
                          Medium membership to join. Earnings will be higher for
                          stories that have repeat readers, have been Boosted,
                          and that have a high read ratio. All stories will also
                          earn more based on engagement signals like claps,
                          highlights, and replies. Referral bonuses are being
                          deprecated and new story stats will be added in so
                          writers can better understand their story earnings
                          breakdown.
                        </p>
                        <Link
                          className="underline text-[10px]"
                          to="https://blog.medium.com/were-updating-the-partner-program-to-incentivize-high-quality-human-stories-7335f8557f6e"
                        >
                          Read more about all of the changes and our vision for
                          the Partner Program.
                        </Link>
                      </div>
                    </Faq>
                  </div>
                  <div className="w-full border-b-[1px] border-white py-6 mt-4">
                    <Faq question="What are the eligibility requirements to join the Partner Program??">
                      <div className="mb-6 transition-all duration-500 ease-linear tracking-wide px- text-xs leading-7">
                        <h1 className="text-lg my-4 leading-5 tracking-normal">
                          To join the Partner Program, you will need to meet the
                          following eligibility requirements:
                        </h1>
                        <ul className=" list-decimal px-4 py-1 leading-5 tracking-tight">
                          <li>Be a Medium member</li>
                          <li>
                            Have published at least one story on Medium in the
                            past 6 months
                          </li>
                          <li>Are located in a supported country</li>
                          <li>Are 18 years of age or older</li>
                        </ul>
                        <p className="font-thin"></p>
                        <Link
                          className="underline text-[10px]"
                          to="https://blog.medium.com/were-updating-the-partner-program-to-incentivize-high-quality-human-stories-7335f8557f6e"
                        >
                          Check out the eligibility requirements and details
                          about the Partner Program.
                        </Link>
                      </div>
                    </Faq>
                  </div>
                  <div className="w-full border-b-[1px] border-white py-6 mt-4">
                    <Faq question="How are earnings calculated?">
                      <div className=" mb-6 transition-all duration-500 ease-linear tracking-wide px-2 text-xs leading-7">
                        <p className="font-thin lg:w-[60vw] text-left">
                          Earnings will be based on member read and listen time
                          as well as member engagement signals. This includes
                          claps, highlights, replies, and new follows. Reads and
                          read ratios will be defined as people who read your
                          story for 30 seconds or more divided by total views.
                          More information on how earnings are calculated can be
                          found{" "}
                          <Link
                            to="https://help.medium.com/hc/en-us/articles/16030675401879-How-stories-earn-in-the-new-Partner-Program"
                            target="_black"
                          >
                            here &nbsp;
                          </Link>
                          with examples featured{" "}
                          <Link
                            to="https://help.medium.com/hc/en-us/articles/360036691193"
                            target="_blank"
                          >
                            {" "}
                            here.{" "}
                          </Link>{" "}
                          &nbsp;
                        </p>
                        <Link
                          className="underline text-[10px]"
                          to="https://blog.medium.com/were-updating-the-partner-program-to-incentivize-high-quality-human-stories-7335f8557f6e"
                        ></Link>
                      </div>
                    </Faq>
                  </div>
                  <div className="w-full border-b-[1px] border-white py-6 mt-4">
                    <Faq question="What is happening with referred memberships?">
                      <div className=" my-3 transition-all duration-500 ease-linear gap-3 tracking-wide px-2 text-xs leading-7">
                        <p className="font-thin lg:w-[60vw] text-left">
                          We’re deprecating the Membership Referral Program and
                          replacing it with a Follower Bonus. Stories that are
                          read by and have engagement with existing followers
                          will get an extra bonus in earnings.
                        </p>
                        <p className="font-thin lg:w-[60vw] text-left">
                          All member referrals made up until September 1, 2023
                          will continue to be honored indefinitely. We will keep
                          your custom referral pages up so that they don’t break
                          your links in stories, but we will stop generating new
                          referrals for members who sign up after September 1st.
                        </p>
                        <Link
                          className="underline text-[10px]"
                          to="https://blog.medium.com/were-updating-the-partner-program-to-incentivize-high-quality-human-stories-7335f8557f6e"
                        ></Link>
                      </div>
                    </Faq>
                  </div>
                  <div className="w-full border-b-[1px] border-white py-6 mt-4">
                    <Faq question="Do existing Partner Program writers need to re-apply or update anything at this time?">
                      <div className=" my-3 transition-all duration-500 ease-linear   gap-3 tracking-wide px-2 text-xs leading-7">
                        <p className="font-thin lg:w-[60vw] text-left">
                          Nope, if you’re already in the Partner Program, you
                          won’t have to do anything new to stay in the program.
                        </p>
                        <p></p>
                        <Link
                          className="underline text-[10px]"
                          to="https://blog.medium.com/were-updating-the-partner-program-to-incentivize-high-quality-human-stories-7335f8557f6e"
                        ></Link>
                      </div>
                    </Faq>
                  </div>
                  <div className="w-full border-b-[1px] border-white py-6 mt-4">
                    <Faq question="Where can I go if I have more questions about the Partner Program?">
                      <div className=" my-3 transition-all duration-500 text-left ease-linear gap-3 tracking-wide px-2 text-xs leading-7">
                        <p className="font-thin lg:w-[60vw] text-left">
                          Check out the &nbsp;
                          <Link
                            className="underline"
                            to="https://help.medium.com/hc/en-us/articles/115011694187-Getting-started-with-the-Partner-Program"
                            target="_blank"
                          >
                            Partner Program Guide!
                          </Link>
                          &nbsp; If you have any other questions, submit a
                          &nbsp;
                          <Link
                            className="underline"
                            to="https://help.medium.com/hc/en-us/requests/new"
                            target="_blank"
                          >
                            Help Desk
                          </Link>
                          &nbsp; request and we’ll get back to you as soon as
                          possible!
                        </p>
                        <p></p>
                        <Link
                          className="underline text-[10px]"
                          to="https://blog.medium.com/were-updating-the-partner-program-to-incentivize-high-quality-human-stories-7335f8557f6e"
                        ></Link>
                      </div>
                    </Faq>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="text-white">
          <div className="w-full flex lg:flex-row flex-col justify-between items-center p-4">
            <h1 className="logo ">
              <img src={mediumLogo} alt="" />
            </h1>

            <nav className="w-full flex justify-end items-center">
              <ul className=" list-none underline text-black text-xs w-full flex  items-center justify-center lg:items-end gap-2">
                <li>About</li>
                <li>Terms</li>
                <li>Privacy</li>
                <li>Help</li>
                <li>Teams</li>
                <li>Press</li>
              </ul>
            </nav>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Write;
