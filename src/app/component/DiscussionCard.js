import React from "react";
import { FaRegCommentAlt } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineRemoveRedEye, MdShare } from "react-icons/md";

const DiscussionCard = () => {
  return (
    <li className="min-w-full flex flex-row relative bg-white p-2 rounded-xl shadow-2xl mt-8">
      <img
        src={`https://i.pravatar.cc`}
        alt=""
        className="rounded-full w-14 h-14 mr-2 ml-2"
      />
      <div className="flex-1  p-2 relative">
        <span className="flex gap-4">
          <h4 className="font-semibold text-gray-900 text-xl">Lorem Ipsum</h4>
          <span className="bg-blue-600 rounded-3xl text-white sm:px-3 px-2 text-sm sm:text-base text-center flex items-center justify-center">
            Sector 2
          </span>
        </span>
        <p className="mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          aliquid consectetur quam corrupti quaerat aut molestiae cum
          necessitatibus fugit eveniet!
        </p>
        <div className="flex flex-1  justify-between mt-2">
          <span className="flex items-center gap-1">
            <IoMdHeartEmpty fontSize={"26px"} /> <span>2k</span>
          </span>
          <span className="flex items-center gap-1">
            <MdOutlineRemoveRedEye fontSize={"26px"} /> <span>2k</span>
          </span>
          <span className="flex items-center gap-1">
            <FaRegCommentAlt fontSize={"26px"} />{" "}
            <span>
              <span> 2k</span>{" "}
              <span className="hidden lg:inline">Comments</span>{" "}
            </span>
          </span>
          <span className="flex items-center gap-1 xl:mr-28 mr-0">
            <MdShare fontSize={"26px"} /> <span>2k</span>
          </span>
        </div>
      </div>

      <div className=" text-blue-700 font-semibold absolute right-2 text-xs sm:text-base">
        {" "}
        2 min ago
      </div>
    </li>
  );
};

export default DiscussionCard;
