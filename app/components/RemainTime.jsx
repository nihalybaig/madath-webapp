import React from "react";

export default function RemainTime({ text, time, prayer }) {
  return (
    <div className="text-center mb-4">
      <div className="text-xs font-medium text-black sm:text-sm">
        {text} <span className="font-bold text-xl"> {prayer} </span>
      </div>
      <div className="text-2xl font-bold text-black sm:text-4xl">{time}</div>
    </div>
  );
}
