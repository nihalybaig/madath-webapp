import React, { useContext, useEffect } from "react";
import PrayCard from "../components/PrayCard";
import { FetchedDataContext } from "../contexts/FetchedDataContext";
import useNextPrayer from "../hooks/useNextPray";

function PrayerTimes({ onPrayerTimeUpdate }) {
  // Context
  const [loaded, data] = useContext(FetchedDataContext);

  // Get Prayer Time
  const timings = data?.timings || {};

  // Remove additional data
  const additional = [
    "Sunrise",
    "Imsak",
    "Midnight",
    "Sunset",
    "Firstthird",
    "Lastthird",
  ];
  additional.forEach((i) => delete timings[i]);

  // Get Prayer Names (English only)
  const prayerNames = Object.keys(timings);

  // Get Prayer Times
  const prayTimes = Object.values(timings);
  const [remainingTime, nextPray] = useNextPrayer(prayTimes);

  useEffect(() => {
    if (onPrayerTimeUpdate && prayTimes.length > 0) {
      onPrayerTimeUpdate(remainingTime, prayerNames[nextPray]);
    }
  }, [remainingTime, nextPray, onPrayerTimeUpdate, prayerNames, prayTimes]);

  if (!loaded) {
    return <div>Loading...</div>;
  }

  // Prayer Card
  const prayerTimeList = prayerNames.map((p, i) => (
    <PrayCard key={p} active={i === nextPray} name={p} time={prayTimes[i]} />
  ));

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 h-full">
      <div className="flex flex-wrap justify-center w-full">
        {prayerTimeList}
      </div>
    </div>
  );
}

export default PrayerTimes;
