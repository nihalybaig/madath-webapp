import React from "react";

const PrayCard = ({ name, time, active }) => {
  return (
    <li
      className={`rounded-lg shadow-md mx-2 w-full sm:w-36 md:w-48 flex flex-col items-center ${
        active ? "bg-blue-500 text-white" : "bg-white text-black"
      }`}
    >
      <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1">
        {name}
      </h3>
      <p className="text-xs sm:text-sm md:text-base">{time}</p>
    </li>
  );
};

export default PrayCard;
