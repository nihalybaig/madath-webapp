import React from "react";
import "../app/globals.css";
import Announcements from "../app/components/Announcements";

const DisplayComponent = () => {
  return (
    <div className="bg-white p-4 min-h-screen flex flex-col justify-between">
      <div className="flex justify-between items-center">
        <div className="flex flex-col items-center">
          <img
            src="path_to_your_image/logo.png"
            alt="Masjid Noor Logo"
            className="w-32 mb-2"
          />
          <p className="text-center font-bold">
            Masjid Noor & Education Centre
          </p>
          <img
            src="path_to_your_image/qrcode.png"
            alt="QR Code"
            className="w-24 mt-2"
          />
          <p className="text-center">SCAN TO DONATE</p>
        </div>
        <div className="text-center p-4 bg-blue-900 text-white w-1/3">
          <p className="bg-yellow-400 text-black p-2 mb-2">EVERYTHING</p>
          <p className="text-xl">WE HAVE IS A</p>
          <p className="text-2xl font-bold">PROVISION</p>
          <p className="text-xl">FROM ALLAH</p>
          <p className="mt-4">DONATE GENEROUSLY</p>
          <p>Masjid Noor needs your support</p>
        </div>
        <div className="text-right">
          <p className="text-gray-700">SHAWWAL 16, 1441</p>
          <p className="text-gray-700">MONDAY, JUN 8</p>
          <p className="text-5xl">12:40PM</p>
          <p>NEXT IQAMAH IN</p>
          <p className="text-4xl">0:50</p>
          <p>JUMU&apos;AH</p>
          <div className="flex justify-end">
            <div className="mr-2">
              <p className="font-bold">1:00PM</p>
              <p>START</p>
            </div>
            <div>
              <p className="font-bold">1:30PM</p>
              <p>IQAMAH</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between bg-gray-100 p-2">
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
      <div
        className={`w-full flex items-center justify-between bg-black text-white`}
      >
        <Announcements />
      </div>
    </div>
  );
};

export default DisplayComponent;
