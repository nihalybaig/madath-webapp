import React, { createContext } from "react";
import { useFetch } from "../hooks/useFetch";

export const FetchedDataContext = createContext();

export function FetchedDataProvider(props) {
  // Coordinates for Hyderabad, India
  const latitude = 17.385;
  const longitude = 78.4867;

  // Update the API URL to use the specified parameters
  const [loaded, data] = useFetch(
    `https://api.aladhan.com/v1/timings?latitude=${latitude}&longitude=${longitude}&method=1`
  );

  return (
    <FetchedDataContext.Provider value={[loaded, data]}>
      {props.children}
    </FetchedDataContext.Provider>
  );
}
