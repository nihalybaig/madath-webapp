import React, { useEffect, useState } from "react";
import "../app/globals.css";
import Image from "next/image";
import moment from "moment";
import { BiTimeFive } from "react-icons/bi";
import Announcements from "../app/components/Announcements";
import PrayerTimes from "../app/components/PrayerTimes";
import RemainTime from "../app/components/RemainTime";
import HijriDateDisplay from "../app/components/HijriDateDisplay";
import { FetchedDataProvider } from "@/app/contexts/FetchedDataContext";

const DisplayComponent = () => {
  const [currentTime, setCurrentTime] = useState(null); // Initialize as null
  const [is24HourFormat, setIs24HourFormat] = useState(true);

  // State to hold remaining time and next prayer name
  const [remainingTime, setRemainingTime] = useState("0:00");
  const [nextPrayerName, setNextPrayerName] = useState("None");

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    // Set initial time immediately after the component mounts
    setCurrentTime(moment());

    return () => clearInterval(timerId);
  }, []);

  const toggleFormat = () => {
    setIs24HourFormat(!is24HourFormat);
  };

  const formatTime = () => {
    if (is24HourFormat) {
      return currentTime.format("HH:mm:ss");
    } else {
      const formattedTime = currentTime.format("hh:mm:ss A").split(" ");
      return { time: formattedTime[0], period: formattedTime[1] };
    }
  };

  const formattedTime = currentTime ? formatTime() : null;

  // Callback function to update remaining time and next prayer name
  const handlePrayerTimeUpdate = (time, name) => {
    setRemainingTime(time);
    setNextPrayerName(name);
  };

  return (
    <FetchedDataProvider>
      <div className="bg-white flex flex-col justify-between h-screen">
        <div className="flex flex-col sm:flex-col md:flex-row text-white text-sm text-center font-bold">
          <div className="flex flex-col md:flex-row flex-grow">
            <div className="w-full md:w-5/12 bg-blue-400 border mb-2 md:mb-0 grid items-center justify-center">
              <div className="text-center text-black my-2 grid content-center">
                <Image
                  src="/logo.png"
                  alt="logo"
                  width={100}
                  height={100}
                  className="block mx-auto"
                />
                <p className="font-bold text-xl mb-1">مركز إسلامي مسجد</p>
                <p className="text-base">Masjid Islamic Center</p>
                <p className="text-base">Toli Chowki , Hyderabad</p>
              </div>
              <div className="text-center text-black my-2 grid content-center">
                <Image
                  src="/qr-code.svg"
                  alt="Dummy QR Code"
                  width={100}
                  height={100}
                  className="block mx-auto"
                />
                <p className="text-center mt-1 text-sm">SCAN TO DONATE</p>
              </div>
            </div>
            <div className="w-full md:w-4/12 bg-[#1a2b44] text-white mb-2 md:mb-0">
              <div className="relative mx-3 mt-3 flex h-8">
                <span className="absolute top-0 left-0 md:-left-8 m-2 w-full p-1 bg-yellow-400 text-black font-bold px-2 text-left text-sm">
                  EVERYTHING
                </span>
              </div>
              <div className="flex flex-col flex-grow mx-4">
                <p className="text-left text-2xl my-2">WE HAVE IS A</p>
                <p className="text-left text-4xl font-bold mb-2">PROVISION</p>
                <p className="text-left text-4xl mb-4">FROM ALLAH</p>
                <div className="text-yellow-400 p-1 my-1 md:my-12">
                  <p className="text-left text-sm">DONATE GENEROUSLY</p>
                  <p className="text-left text-sm">
                    Masjid Noor needs your support
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-3/12 bg-gray-200 text-black mb-2 md:mb-0">
              <div className="flex flex-col p-6">
                <div className="text-base font-bold text-black sm:text-lg flex flex-col items-center">
                  <div className="flex items-center mr-0 md:mr-6">
                    <span className="mr-2">Hijri:</span>
                    <span className="font-medium">
                      <HijriDateDisplay />
                    </span>
                  </div>
                  <div className="flex items-center mt-2">
                    <span className="mr-2">Date:</span>
                    <span className="font-medium">
                      {currentTime && currentTime.format("dddd, MMM D, YYYY")}
                    </span>
                  </div>
                </div>
                <div className="my-4 w-full border-t-2 border-black"></div>

                <div className="flex items-center justify-center">
                  <div className="text-base font-bold text-black sm:text-lg">
                    <div className="flex items-center">
                      <span className="font-bold text-2xl flex items-center">
                        <span className="text-4xl">
                          {currentTime &&
                            (is24HourFormat ? (
                              <span className="w-28">
                                {currentTime.format("HH:mm:ss")}
                              </span>
                            ) : (
                              formattedTime && (
                                <>
                                  <span className="text-4xl">
                                    {formattedTime.time}
                                  </span>
                                  <span className="text-2xl ml-1">
                                    {formattedTime.period}
                                  </span>
                                </>
                              )
                            ))}
                        </span>
                        <BiTimeFive
                          className="cursor-pointer text-2xl ml-2"
                          onClick={toggleFormat}
                        />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="my-4 w-full border-t-2 border-black"></div>

                <div className="text-center">
                  <RemainTime
                    text="NEXT SALAH:"
                    time={remainingTime}
                    prayer={nextPrayerName}
                  />
                </div>

                <div className="my-4 w-full border-t-2 border-black"></div>

                <div className="text-center">
                  <div className="text-base font-bold text-black sm:text-lg">
                    JUMU&apos;AH
                  </div>
                  <div className="flex justify-between mt-2 w-full">
                    <div className="text-center">
                      <div className="text-lg font-bold text-black sm:text-xl">
                        1:00<span className="text-xs sm:text-sm">PM</span>
                      </div>
                      <div className="text-xs font-medium text-black sm:text-sm">
                        START
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-black sm:text-xl">
                        1:30<span className="text-xs sm:text-sm">PM</span>
                      </div>
                      <div className="text-xs font-medium text-black sm:text-sm">
                        IQAMAH
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center bg-gray-100 items-center h-full px-20">
          <PrayerTimes onPrayerTimeUpdate={handlePrayerTimeUpdate} />
        </div>
        <div className="w-full flex items-center justify-between bg-black text-white">
          <Announcements />
        </div>
      </div>
    </FetchedDataProvider>
  );
};

export default DisplayComponent;
