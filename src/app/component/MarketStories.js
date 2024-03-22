import React from "react";

const MarketStories = () => {
  return (
    <li className="flex flex-col xl:w-[75%] shadow-2xl p-4 lg:p-1">
      <img
        src={`https://i.pravatar.cc/1000`}
        alt=""
        className="min-w-full h-60 "
      />
      <h4 className="font-semibold text-xl text-gray-900">
        Lorem ipsum dolor sit
      </h4>
      <p className="text-gray-700">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure a
        provident quia impedit nemo, nam itaque illo voluptatum! Corrupti,
        delectus.
      </p>
    </li>
  );
};

export default MarketStories;
