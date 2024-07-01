import React, { useEffect, useState } from "react";
import { FaMosque } from "react-icons/fa6";

function Announcements() {
  const headlines = [
    {
      text: "Reminder: Eid-ul-Adha is scheduled for June 17, 2024, with prayers commencing at 8:00 AM",
    },
    {
      text: "Volunteers needed: Join us in organizing our annual Ramadan iftar program. Contact the masjid office for more details.",
    },
    {
      text: "Special lecture: Renowned scholar Sheikh Ahmed will deliver a talk on Islamic ethics this Saturday after Maghrib prayer",
    },
    // Add more headlines here
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % headlines.length);
    }, 3000); // adjust the delay time as needed

    return () => clearTimeout(timeoutId);
  }, [currentIndex]);

  return (
    <>
      <FaMosque
        className="h-24 w-24 md:h-12 md:w-12 sm:h-16 sm:w-16 mx-2 sm:mx-1"
        color="green"
      />
      <h2 className={`transition duration-500 p-4 rounded text-sm`}>
        {headlines[currentIndex].text}
      </h2>
      <FaMosque
        className="h-24 w-24 md:h-12 md:w-12 sm:h-16 sm:w-16 mx-2 sm:mx-1"
        color="green"
      />
    </>
  );
}

export default Announcements;
