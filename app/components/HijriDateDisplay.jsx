// components/HijriDateDisplay.tsx
import React, { useEffect, useState } from "react";
import { getHijriDate } from "../utils/hijridate";

const HijriDateDisplay = () => {
  const [hijriDate, setHijriDate] = useState("");

  useEffect(() => {
    const today = new Date();
    setHijriDate(getHijriDate(today));
  }, []);

  return <span>{hijriDate}</span>;
};

export default HijriDateDisplay;
