"use client";
import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { IoIosArrowBack, IoIosNotifications } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
const SideBar = ({ moveLeft, sideBar, setSideBar }) => {
  return (
    <div
      className={`min-h-full bg-[#1f3a61] fixed transition-all duration-300 ease-linear delay-300 top-0 ${
        sideBar ? `left-0` : `left-[-276px]`
      }`}
    >
      {/* sideOpen-start */}
      <div
        className="h-16 w-4 bg-[#1f3a61] flex items-center absolute right-[-16px] bottom-1/2"
        onClick={() => setSideBar((e) => !e)}
      >
        {sideBar ? (
          <IoIosArrowBack color="#fff" />
        ) : (
          <IoIosArrowForward color="#fff" />
        )}
      </div>
      {/* sideOpen-end */}

      {/* top-card-start */}
      <div className="min-w-full bg-[#1f3a61] flex flex-row gap-28 items-center p-4 border-b-[1px] border-opacity-50">
        <div className="flex flex-row items-center gap-2">
          <FaUserAlt color="#fff" fontSize={"22px"} />{" "}
          <span className="text-white">Hello, User</span>{" "}
        </div>
        <div>
          {" "}
          <IoIosNotifications color="#fff" fontSize={"24px"} />{" "}
        </div>
      </div>
      {/* top-card-end */}
    </div>
  );
};

export default SideBar;
