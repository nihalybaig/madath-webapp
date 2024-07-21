import { useState, useEffect } from "react";

/**
 * Get the Current location of the user
 *
 * @returns {[string, string]}
 */

export const useLocation = () => {
  const [latitude, setLatitude] = useState("30.008");
  const [longitude, setLongitude] = useState("31.2194");

  useEffect(() => {
    if (typeof navigator !== "undefined" && navigator.geolocation) {
      const success = (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      };

      const error = (positionError) => {
        console.log(positionError.message);
      };

      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation is not supported by your browser");
    }
  }, []);

  return [latitude, longitude];
};
