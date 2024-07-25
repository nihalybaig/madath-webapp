import React, { useEffect, useState } from "react";
import { getHijriDate } from "../utils/hijridate";

const HijriDateDisplay = () => {
  const [hijriDate, setHijriDate] = useState("");

  useEffect(() => {
    const updateHijriDate = () => {
      const today = new Date();
      setHijriDate(getHijriDate(today));
    };

    updateHijriDate(); // Set initial Hijri date

    // Check the time every minute
    const intervalId = setInterval(() => {
      const now = new Date();
      if (now.getHours() === 0 && now.getMinutes() === 0) {
        updateHijriDate();
      }
    }, 60000); // 60000 milliseconds = 1 minute

    return () => clearInterval(intervalId);
  }, []);

  return <span>{hijriDate}</span>;
};

export default HijriDateDisplay;
