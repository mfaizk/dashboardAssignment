"use client";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegCommentAlt } from "react-icons/fa";
import { MdShare } from "react-icons/md";
import { useState } from "react";
import MarketStories from "./component/MarketStories";
import DiscussionCard from "./component/DiscussionCard";
export default function Home() {
  const [tab, setTab] = useState(0);
  return (
    <>
      {/* tab-started */}
      <div className="min-w-full flex lg:hidden ">
        <div
          onClick={() => setTab(0)}
          className={`flex flex-1 ${
            tab == 0
              ? "bg-blue-500 border-b-2 border-red-600"
              : "bg-blue-900 border-b-2  border-blue-900"
          } transition-colors duration-100 delay-100 ease-linear py-4 text-white items-center justify-center font-semibold text-xl cursor-pointer`}
        >
          Discussion Forum
        </div>
        <div
          onClick={() => setTab(1)}
          className={`flex flex-1 ${
            tab == 1
              ? "bg-blue-500 border-b-2 border-red-600"
              : "bg-blue-900 border-b-2 border-blue-900"
          } transition-colors duration-100 delay-100 ease-linear py-4 text-white items-center justify-center font-semibold text-xl cursor-pointer`}
        >
          Market Stories
        </div>
      </div>
      {/* tab-end */}

      <main className="flex min-h-screen flex-row items-start justify-center ">
        {/* discussison-div-start */}
        <div
          className={`w-auto lg:w-[55%] flex lg:px-2 sm:px-10 flex-col my-2 lg:flex ${
            tab == 0 ? "flex" : "hidden"
          }`}
        >
          <h4 className="text-[#fd949d] font-semibold text-2xl lg:flex hidden ">
            DISCUSSION FORUM
          </h4>

          <ul className={`list-none  min-w-full gap-10 flex-col`}>
            {Array(10)
              .fill(1)
              .map((e, i) => (
                <>
                  {/* card-start */}
                  <DiscussionCard />
                  {/* card-end */}
                </>
              ))}
          </ul>
        </div>
        {/* discussison-div-end */}
        {/* market-stories-div-start */}
        <div
          className={`w-auto lg:w-[45%] lg:flex lg:px-10 px-2 flex-col my-2 items-center lg:items-end  ${
            tab == 1 ? "flex" : "hidden"
          }`}
        >
          <h4 className="text-[#cd5e68] font-semibold text-2xl w-[75%] lg:inline-block hidden">
            MARKET STORIES
          </h4>
          <ul
            className={`list-none  min-w-full gap-10 lg:flex flex-col items-center lg:items-end`}
          >
            {/* card-start */}
            <MarketStories />
            {/* card-end */}
          </ul>
        </div>
        {/* market-stories-div-end */}
      </main>
    </>
  );
}
