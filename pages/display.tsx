import React from "react";
import "../app/globals.css";
import Image from "next/image";
import Announcements from "../app/components/Announcements.jsx";

const DisplayComponent = () => {
  return (
    <div className="bg-white flex flex-col justify-between h-screen">
      <div className="flex flex-col sm:flex-col md:flex-row text-white text-sm text-center font-bold">
        <div className="flex flex-col md:flex-row flex-grow">
          <div className="w-full md:w-5/12 bg-blue-400 border mb-2 md:mb-0">
            <div className="text-center text-black my-2">
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
            <div className="text-center text-black my-2">
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
              <div className="text-center">
                <div className="text-xs font-medium text-black sm:text-sm">
                  SHAWWAL 16, 1441
                </div>
                <div className="text-base font-bold text-black sm:text-lg">
                  MONDAY, JUN 8
                </div>
              </div>
              <div className="my-4 w-full border-t-2 border-black"></div>

              <div className="my-4">
                <div className="text-4xl font-bold text-black sm:text-6xl">
                  12:40<span className="text-xl sm:text-2xl">PM</span>
                </div>
              </div>

              <div className="my-4 w-full border-t-2 border-black"></div>

              <div className="text-center">
                <div className="text-xs font-medium text-black sm:text-sm">
                  NEXT IQAMAH IN
                </div>
                <div className="text-2xl font-bold text-black sm:text-4xl">
                  0:50
                </div>
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
      <div className="flex justify-between bg-gray-100">
        <div className="text-center">
          <p>3:06AM</p>
          <p className="font-bold">FAJR</p>
          <p>4:00AM</p>
        </div>
        <div className="text-center">
          <p>12:52PM</p>
          <p className="font-bold">DHUHR</p>
          <p>1:30PM</p>
        </div>
        <div className="text-center">
          <p>6:08PM</p>
          <p className="font-bold">ASR</p>
          <p>7:15PM</p>
        </div>
        <div className="text-center">
          <p>8:28PM</p>
          <p className="font-bold">MAGHRIB</p>
          <p>8:33PM</p>
        </div>
        <div className="text-center">
          <p>10:10PM</p>
          <p className="font-bold">ISHA</p>
          <p>10:50PM</p>
        </div>
        <div className="text-center">
          <p className="font-bold">5:17AM</p>
          <p>SUNRISE</p>
        </div>
        <div className="text-center">
          <p className="font-bold">8:28PM</p>
          <p>SUNSET</p>
        </div>
      </div>
      <div className="w-full flex items-center justify-between bg-black text-white">
        <Announcements />
      </div>
    </div>
  );
};

export default DisplayComponent;
